# ForgeFit - Domain Model & Business Rules

This document specifies the core domain entities, scientific formulas, gamification rules, and business logic for **ForgeFit**, refactored and modernized from the original PHP implementation.

---

## 1. Domain Entities & Relationships

### 1.1 User & Identity
- **`User`**:
  - `id`: Unique identifier (Long/UUID)
  - `fullName`: User's full display name (String)
  - `email`: Unique login email (String)
  - `password`: BCrypt hashed password (String)
  - `role`: Enum (`ROLE_USER`, `ROLE_ADMIN`)
  - `isBanned`: Boolean status flag (Admin can toggle)
  - `experience`: Total accumulated XP (Integer, starts at 0)
  - `level`: Current user level (Integer, starts at 1)
  - `createdAt`, `updatedAt`: Timestamps

- **`UserProfile`** (1:1 with `User`):
  - `id`: Unique identifier
  - `user`: Foreign key to `User`
  - `heightCm`: Height in centimeters (Double)
  - `weightKg`: Current body weight in kilograms (Double, required for calorie calculations)
  - `targetWeightKg`: Desired goal weight (Double)
  - `dailyCalorieGoal`: Target calories per day (Integer, default 2000)
  - `dailyWaterGoalGlasses`: Target water glasses per day (Integer, default 8 glasses = ~2000ml)
  - `fitnessGoal`: Enum (`LOSE_WEIGHT`, `BUILD_MUSCLE`, `MAINTAIN`, `IMPROVE_ENDURANCE`)

---

### 1.2 Exercises & Workout Sessions
- **`Exercise`** (Exercise Catalog):
  - `id`: Unique identifier
  - `name`: Exercise name (e.g., "Barbell Bench Press", "Treadmill Running")
  - `category`: Enum (`STRENGTH`, `CARDIO`, `BODYWEIGHT`, `FLEXIBILITY`)
  - `targetMuscleGroup`: Enum (`CHEST`, `BACK`, `LEGS`, `SHOULDERS`, `ARMS`, `CORE`, `FULL_BODY`)
  - `metValue`: Metabolic Equivalent of Task (Double, e.g. 6.0 for heavy lifting, 9.8 for running)
  - `instructions`: Description / technique cues (Text)

- **`WorkoutSession`** (Logged Workout Session):
  - `id`: Unique identifier
  - `user`: Foreign key to `User`
  - `exercise`: Foreign key to `Exercise`
  - `sessionDate`: Date and time of workout (LocalDateTime)
  - `totalSets`: Total number of sets completed (Integer)
  - `totalReps`: Sum of all reps across sets (Integer)
  - `durationMinutes`: Estimated duration in minutes (Double)
  - `caloriesBurned`: Calculated total calories burned (Double)
  - `xpEarned`: XP awarded for this session (Integer)
  - `notes`: Optional user notes

- **`WorkoutSet`** (1:N with `WorkoutSession` - *Normalized from PHP JSON*):
  - `id`: Unique identifier
  - `workoutSession`: Foreign key to `WorkoutSession`
  - `setNumber`: Sequential index (1, 2, 3...)
  - `reps`: Repetitions completed in this set (Integer)
  - `weightKg`: Weight lifted in kilograms (Double, 0 for bodyweight)
  - `timePerRepSeconds`: Average execution time per rep (Double, default 3.0 seconds)

---

### 1.3 Meals & Nutrition
- **`FoodItem`** (Food Catalog):
  - `id`: Unique identifier
  - `name`: Food name (e.g., "Rolled Oats", "Chicken Breast")
  - `servingUnit`: Unit of measurement (e.g., "100g", "1 cup", "1 piece")
  - `calories`: Calories per serving unit (Double)
  - `proteinG`: Protein in grams (Double)
  - `carbsG`: Carbohydrates in grams (Double)
  - `fatG`: Total fat in grams (Double)
  - `fiberG`: Dietary fiber in grams (Double)

- **`MealLog`** (Logged Meal):
  - `id`: Unique identifier
  - `user`: Foreign key to `User`
  - `foodItem`: Foreign key to `FoodItem`
  - `logDate`: Date and time meal was consumed (LocalDateTime)
  - `mealSlot`: Enum (`BREAKFAST`, `LUNCH`, `DINNER`, `SNACK`)
  - `quantity`: Number of servings consumed (Double)
  - `totalCalories`: Calculated calories (`foodItem.calories * quantity`)
  - `totalProtein`: Calculated protein (`foodItem.proteinG * quantity`)
  - `totalCarbs`: Calculated carbs (`foodItem.carbsG * quantity`)
  - `totalFat`: Calculated fat (`foodItem.fatG * quantity`)

---

### 1.4 Hydration (Water Intake)
- **`WaterLog`**:
  - `id`: Unique identifier
  - `user`: Foreign key to `User`
  - `dateRecorded`: Calendar date (LocalDate)
  - `glassesCount`: Number of glasses logged (Integer, 1 glass = ~250ml)
  - `intakeTime`: Timestamp of the log entry (LocalTime)

---

### 1.5 Gamification & Level Thresholds
- **`LevelThreshold`**:
  - `level`: Integer (1, 2, 3...)
  - `requiredExp`: Minimum cumulative XP needed to reach this level
  - `title`: Level title (e.g., "Novice Lifter", "Iron Warrior", "Titan")

---

## 2. Business Formulas & Calculations

### 2.1 Scientific Calorie Burning Formula (MET)
Calorie expenditure for a workout session is calculated using the established scientific **Metabolic Equivalent of Task (MET)** formula:

$$\text{Duration (minutes)} = \frac{\text{Total Sets} \times \text{Total Reps} \times \text{Time per Rep (seconds)}}{60}$$

$$\text{Calories Burned} = \left(\frac{\text{MET} \times 3.5 \times \text{Body Weight (kg)}}{200}\right) \times \text{Duration (minutes)}$$

**Validation Rules:**
- `weightKg` must come from the user's `UserProfile`. If not set, prompt the user to complete their profile before logging workouts.
- `durationMinutes` must be greater than 0.
- `caloriesBurned` is rounded to 1 decimal place.

---

### 2.2 Gamification & XP Rules

XP is awarded automatically upon completing healthy actions:

| Action | XP Awarded | Maximum Daily Cap |
| :--- | :--- | :--- |
| **Complete a Workout Session** | `+50 XP` base + `(Sets * 5 XP)` | 200 XP / day |
| **Log a Meal** | `+20 XP` per meal slot | 80 XP / day (4 slots) |
| **Drink a Glass of Water** | `+5 XP` per glass | 40 XP / day (8 glasses) |
| **Reach Daily Water Goal** | `+25 XP` bonus on 8th glass | Once per day |

#### Level Progression Logic:
```text
Level 1:     0 XP  ("Novice")
Level 2:   100 XP  ("Beginner")
Level 3:   250 XP  ("Consistent")
Level 4:   500 XP  ("Challenger")
Level 5:   850 XP  ("Iron Lifter")
Level 6:  1,300 XP ("Athlete")
Level 7:  1,850 XP ("Elite")
Level 8:  2,500 XP ("Champion")
Level 9:  3,300 XP ("Master")
Level 10: 4,200 XP ("Titan")
```
When `newTotalExp >= nextLevel.requiredExp`, trigger a Level Up event and notify the client.

---

## 3. AI Fitness Coach (Gemini Integration)

The AI assistant provides personalized diet and exercise advice:

1. **Context Envelope:** When the user sends a question to `/api/chat`, the backend enriches the request with:
   - User's profile: Weight, height, fitness goal.
   - Today's nutrition: Total calories eaten vs. daily calorie goal.
   - Today's workouts: Exercises performed and estimated calories burned.
   - Today's hydration: Glasses consumed vs. daily target.
2. **System Persona:** A supportive, knowledgeable, certified fitness and nutrition coach. Concise, actionable advice without overwhelming medical jargon.
3. **Guardrails:** Always advises consulting a healthcare professional for injuries, extreme diets, or medical conditions.
