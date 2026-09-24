export type UserRole = 'ROLE_USER' | 'ROLE_ADMIN';

export type FitnessGoal =
  | 'LOSE_WEIGHT'
  | 'BUILD_MUSCLE'
  | 'MAINTAIN'
  | 'IMPROVE_ENDURANCE';

export interface User {
  id: number;
  fullName: string;
  email: string;
  role: UserRole;
  experience: number;
  level: number;
  isBanned: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserProfile {
  id?: number;
  userId?: number;
  heightCm?: number;
  weightKg?: number;
  targetWeightKg?: number;
  dailyCalorieGoal?: number;
  dailyWaterGoalGlasses?: number;
  fitnessGoal?: FitnessGoal;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
  heightCm?: number;
  weightKg?: number;
  fitnessGoal?: FitnessGoal;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}
