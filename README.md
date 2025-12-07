# EWATCHMARKET Backend

A domain-driven Express.js + TypeScript backend that orchestrates existing product modules into a unified dashboard API. Built for scalability, modularity, and production-grade maintainability.

---

## Project Structure

```
src/
├── Configs/          Environment, DB, security configs
├── Dbconnection/     SQL Server connection pool
├── Domains/          Feature modules (Product, Order, User, Dashboard, etc.)
├── Middlewares/      Security, logging, validation
├── Utils/            Shared helpers
├── app.ts            Express setup
├── route.ts          Centralized route registration
└── server.ts         Entry point
```

## Tech Stack

- **Runtime**: Node.js (ES2023, ESM)
- **Framework**: Express.js v5
- **Language**: TypeScript
- **Database**: SQL Server via `mssql`
- **Security**: Helmet CSP
- **Dev Tools**: tsx, nodemon, ESLint, Prettier
- **CORS**: cors
---

## Getting Started

### 1. Clone the repo

git clone [https://github.com/your-org/ewatchmarket.git](https://github.com/robmars123/eWatchMarket.git)

cd ewatchmarket

npm install

<<<<<<< HEAD
npm install cors

Architecture Principles
# Domain-Driven Design: Each feature lives in its own folder with controller, service, model, and routes.
=======
# Architecture Principles
 Domain-Driven Design: Each feature lives in its own folder with controller, service, model, and routes.
>>>>>>> 8b237a2f55f929e464809565278ca913a47dbdef

 Separation of Concerns: Configs, middleware, and business logic are isolated.

 Environment-Driven: .env powers all runtime settings.

 Scalable Routing: route.ts centralizes all domain routes.


# For Production-ready add:
1. Error handling

2. Logging

3. Validation

4. Security layers

5. Tests

6. Deployment pipeline
