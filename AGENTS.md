# ForgeFit - Agent & Developer Operating Guide

⚠️ **PRODUCTION-GRADE SYSTEM STANDARDS** — ForgeFit is an enterprise-grade full-stack fitness, nutrition, and gamification tracking platform. All code must adhere to strict production standards. No shortcuts, sloppy types, experimental hacks, or incomplete implementations are acceptable.

> **Project Architecture & Specifications:**
> - [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — End-to-end system design, API contracts, security & JWT flows
> - [docs/DESIGN.md](docs/DESIGN.md) — UI design tokens, color palette, typography & component rules
> - [docs/DOMAIN.md](docs/DOMAIN.md) — Fitness business rules, MET calorie formulas & XP gamification logic

---

## 0. Operating Principles for AI Agents & Developers

**PRODUCTION STANDARDS ARE NON-NEGOTIABLE.** Every line of code must be production-grade, maintainable, secure, and thoroughly verified.

- **Reason before code:** Before implementing a feature or refactor, explain the architectural approach and verify whether a similar capability or utility already exists in the project.
- **Check for existing implementations first:** Always search for existing DTOs, entities, repositories, services, hooks, components, or utilities before introducing new code.
- **YAGNI (You Aren't Gonna Need It):** Do not write speculative code, premature abstractions, or unused generic infrastructure. Build what is required right now to the highest standard.
- **KISS (Keep It Simple, Stupid):** Prefer the most direct, readable, and robust solution. Avoid architectural churn or over-engineering.
- **DRY (Don't Repeat Yourself):** Reuse common UI components, custom hooks, utility functions, and backend services. Consolidate logic only when it is genuinely reused.
- **Strict type safety across the entire stack:** 
  - Frontend: Zero usage of `any`. Everything must be typed with strict TypeScript interfaces matching backend DTOs.
  - Backend: Strictly typed Java 21 with explicit DTOs and validation annotations.
- **Never expose database entities through HTTP:** JPA `@Entity` classes must never be returned directly in Spring Boot Controller responses or accepted directly in request bodies. Always map through dedicated Request/Response DTOs.
- **Minimal, production-ready changes:** Keep code changes focused and scoped to the task. Do not broaden work into unrelated refactoring unless required for correctness.
- **No quick fixes, workarounds, or silent failures:** Never leave `TODO`, `FIXME`, or temporary mock hacks in committed code. Catch and handle errors explicitly with user-friendly messages.
- **Security by design:** Validate all inputs server-side (`jakarta.validation`), enforce stateless JWT authentication on protected routes, hash passwords with BCrypt, and protect endpoints with Role-Based Access Control (`ROLE_USER`, `ROLE_ADMIN`).
- **Import hygiene:** Keep imports grouped and organized at the top of each file. On the frontend, always use the configured path alias `@/*` instead of relative imports (`../../`).

---

## 1. Project Overview & Tech Stack

ForgeFit is a full-stack health, workout, and nutrition tracking platform featuring gamified XP progression and an integrated AI fitness coach.

- **Backend (`forgefit-server`):**
  - **Language & Runtime:** Java 21 (LTS)
  - **Framework:** Spring Boot 3.x (Spring Web, Spring Data JPA, Spring Security 6, Spring Validation)
  - **Security:** Stateless JWT authentication (using JJWT `0.12.x`), BCrypt password hashing
  - **Database:** PostgreSQL / MySQL 8.x
  - **Database Migrations:** Flyway
  - **Build Tool:** Maven
- **Frontend (`forgefit-client`):**
  - **Framework & Tooling:** React 19, Vite, TypeScript (Strict mode)
  - **Styling:** Tailwind CSS v4 (Dark-mode first, mobile-responsive)
  - **Routing:** React Router v7 (`react-router-dom`)
  - **HTTP Client:** Axios (Centralized instance with request/response interceptors)
  - **UI Icons & Toasts:** Lucide React (`lucide-react`), Sonner (`sonner`)
  - **Class Utilities:** `clsx` + `tailwind-merge` via `@/utils/cn`

---

## 2. Repository Structure

```text
forgefit-workspace/
├── AGENTS.md                  # Operating guidelines for AI agents and developers (Source of Truth)
├── docs/                      # Architectural, domain, and design specifications
│   ├── ARCHITECTURE.md        # Detailed technical architecture & API envelopes
│   ├── DESIGN.md              # Design system tokens, styling & component rules
│   └── DOMAIN.md              # Domain entities, MET formulas, XP logic & business rules
├── forgefit-server/           # Spring Boot REST API backend
└── forgefit-client/           # React + TypeScript + Vite frontend
```

---

## 3. Backend (Spring Boot 3) Guidelines

1. **Layered Architecture is Strict:**
   - `Controller`: Validates HTTP requests (`@Valid`), delegates immediately to Service, returns standardized `ResponseEntity<ApiResponse<T>>`. Controllers contain **zero** business logic.
   - `Service`: Contains all business logic, transaction boundaries (`@Transactional`), validation, and DTO/Entity mappings.
   - `Repository`: Pure data access extending `JpaRepository`. Custom queries use JPQL or derived method names.
   - `Entity`: Database representation only. Never expose outside the service layer.
   - `DTO`: Dedicated records/classes for requests (`*Request.java`) and responses (`*Response.java`).
2. **Standard API Response Envelope:**
   All REST endpoints must return a standardized JSON structure:
   ```json
   {
     "success": true,
     "message": "Operation completed successfully",
     "data": { ... },
     "timestamp": "2026-09-21T11:50:00Z"
   }
   ```
3. **Global Exception Handling:**
   - Centralize exceptions in `GlobalExceptionHandler` using `@RestControllerAdvice`.
   - Never let unhandled stack traces leak to the client.
4. **Validation:**
   - Use `jakarta.validation.constraints` annotations (`@NotBlank`, `@NotNull`, `@Min`, `@Max`, `@Email`, `@Size`) on all Request DTOs.
5. **Security & Auth:**
   - Stateless JWT authentication filter intercepting all requests except public endpoints (`/api/auth/**`).
   - Extract user identity securely from `SecurityContextHolder.getContext().getAuthentication()`.

---

## 4. Frontend (React 19 & TypeScript) Guidelines

1. **Strict TypeScript:**
   - No `any` types. All models in `src/types/` must match the corresponding Spring Boot DTOs.
2. **Feature & Page Architecture:**
   - Keep domain components, hooks, and services co-located in `src/features/<domain>/`.
   - Reusable generic UI primitives (`Button`, `Card`, `Input`, etc.) belong in `src/components/ui/`.
   - Landing page sections belong in `src/components/landing/`.
   - Top-level routed views belong in `src/pages/`.
3. **Clean Component Architecture:**
   - Separate UI presentation from side-effects and data-fetching.
   - Extract complex state and API orchestration into custom hooks.
4. **Path Aliases:**
   - Always import using `@/...` (e.g., `import { Button } from '@/components/common/Button'`).
   - Relative imports (`../../`) are strictly disallowed.
5. **Tailwind CSS v4 & Styling Standards:**
   - Always merge dynamic classes using `@/utils/cn` (`clsx` + `tailwind-merge`).
   - Adhere to the design tokens in `docs/DESIGN.md`.
