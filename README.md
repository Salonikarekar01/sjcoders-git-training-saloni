# SJ Coders Git Training

This repository contains my Day 1 Git & GitHub training exercises as part of my internship onboarding at SJ Coders Software.

## Topics Practiced

- Git installation and configuration
- Creating and cloning repositories
- Git status
- Staging changes
- Creating commits
- Pushing changes to GitHub
- Pulling changes
- Creating branches
- Creating and merging Pull Requests

## Author

Saloni Karekar



## Day 5 - Authentication, Validation & RBAC

**Auth flow:** Client sends email/password to `POST /api/auth/login` →
Spring Security verifies against the BCrypt-hashed password → a JWT is
returned → client sends it as `Authorization: Bearer <token>` on every
subsequent request → `JwtAuthFilter` validates the token and identifies the
user for each request.

**Role permissions:**

| Operation         | ADMIN | USER |
|--------------------|:-----:|:----:|
| Login               |  Yes  | Yes  |
| List/view employees  |  Yes  | Yes  |
| Add/edit/delete employee |  Yes  |  No  |

**Test steps:**
1. Register an ADMIN and a USER via `POST /api/auth/register`
2. Login via `POST /api/auth/login`, save each token
3. `GET /employee` with either token → `200`
4. `POST /employee/add` with ADMIN token → `201`; same with USER token → `403`
5. Any request with no token → `401`
6. Invalid registration data (e.g. bad email) → `400` with a `VALIDATION_ERROR` response
7. `GET /employee/{invalid-id}` → `404`

**What I learned:** the difference between authentication and authorization,
how JWTs are generated and validated per-request, why passwords must be
hashed, and how `@PreAuthorize` enforces role-based access on top of BCrypt
and Spring Security's filter chain.