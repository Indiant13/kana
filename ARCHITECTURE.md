# KANA SPORT ARCHITECTURE CONTRACT

## 1. Architectural Philosophy

The platform is:

- NOT page-driven
- NOT component-driven
- IS feature-driven
- IS multi-service oriented

Every business capability must exist as:

- isolated feature
- or isolated domain service

New functionality MUST NEVER be added directly to:

- pages
- entities
- shared components

All business logic must live inside features or services.

## 2. Multi-Service Requirement (MANDATORY)

KANA SPORT MUST be designed as a multi-service platform from day one.

All core domains must be implemented as independent services inside:

`src/services/`

Examples:

- `rating/`
- `activity/`
- `tournaments/`
- `feed/`

Each service must:

- contain its own domain logic
- expose a public API
- NOT directly depend on other services
- be dependency isolated
- be ready for future extraction into standalone backend microservice

Service-to-service communication must happen ONLY via public interfaces.

Direct cross-imports between services are FORBIDDEN.

## 3. Feature Isolation Rule (MANDATORY)

Every new product capability MUST be implemented as:

`src/features/<feature-name>/`

It must contain:

- `ui/`
- `model/`
- `api/`
- `index.ts`

Features MUST NOT:

- directly modify other features
- directly modify entities
- directly modify services internally

Features may only interact with services via PUBLIC SERVICE API.

## 4. Entities Rule

Entities represent:

- Player
- Tournament
- Match
- Rating
- Achievement

Entities must contain:

- `model/`
- `types/`
- `index.ts`

Entities MUST NOT contain:

- UI logic
- network logic
- orchestration logic
- service logic

## 5. Services Rule

Services are domain engines such as:

- `rating`
- `activity`
- `tournaments`
- `feed`

Services must contain:

- `repository/`
- `use-cases/`
- `public-api/`
- `index.ts`

Only services can:

- orchestrate domain workflows
- update rating
- process tournament logic
- calculate activity score

## 6. Integration Rule (CRITICAL)

When adding a new feature:

DO NOT:

- edit unrelated modules
- inject logic into pages
- change entity structure
- access service internals

DO:

- create a new feature folder
- use service public API
- expose feature via `index.ts`

## 7. Page Responsibility Rule

Pages are:

- orchestration layers
- composition layers

Pages MUST NOT:

- contain business logic
- calculate rating
- process tournament logic

Pages may only:

- render widgets
- call feature actions

## 8. Future Microservice Compatibility

All services must be:

- dependency isolated
- domain isolated
- export public API

so they can later be moved to separate backend services without breaking features.

## 9. AI Agent Implementation Policy

When Codex or any AI generates new functionality it MUST:

1. Create a new feature
2. Use existing services via public API
3. Respect MULTI-SERVICE REQUIREMENT (Section 2)
4. Avoid modifying entities unless explicitly instructed
5. Avoid touching unrelated modules

Violating this breaks system scalability.

"KANA SPORT follows strict Feature Driven Multi-Service Architecture.
All new functionality must respect module and service isolation."
