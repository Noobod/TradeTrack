# TradeTrack — Trading Dashboard (Zerodha Clone)

TradeTrack is a Zerodha-style trading dashboard clone built with the MERN stack.
It simulates a real trading workflow (no live market data) and focuses on UI, dashboard logic, authentication, and data visualization.

Live Demo: https://trade-track-front.vercel.app/

## What This Project Demonstrates

Building dashboard-heavy applications

Separating frontend, dashboard, and backend services

Authentication flows and protected routes

Data visualization using charts

Scalable MERN architecture

## Key Features

Zerodha-inspired trading UI

Separate landing app and dashboard app

Login / Signup (Passport.js – local strategy)

Holdings, Positions, Orders dashboards

Chart-based analytics using Chart.js

Fully responsive (desktop & mobile)

Simulated trading data (no real trades)

## Architecture Overview

The project is split into three independent services:
```java
TradeTrack/
├── frontend/   → Public landing + auth UI (React)
├── dashboard/  → Auth-protected trading dashboard (React)
└── backend/    → API + auth + database (Node.js / Express)
```

After authentication, users are redirected from the frontend to the dashboard.

## Tech Stack

### Frontend

React

Bootstrap, Material UI

Chart.js

### Backend

Node.js

Express

MongoDB (Atlas)

Passport.js (local authentication)

### Deployment

Frontend & Dashboard: Vercel

Backend: Render

## Demo Credentials
Email: demo@TradeTrack.com
Password: demo123


(For testing purposes only)

## What I Learned

Structuring multi-app React projects

Dashboard design patterns

Auth flows between separate clients

Chart-driven data presentation

Realistic project organization beyond tutorials
