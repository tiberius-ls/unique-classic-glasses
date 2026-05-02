# Unique Classic | Minimalist Eyewear E-commerce

A premium, scalable e-commerce platform built with **FastAPI** (Backend) and **Next.js** (Frontend).

## Features
- **Minimalist Design:** Custom Vanilla CSS for a high-end aesthetic.
- **Admin Dashboard:** Secure interface to manage the eyewear catalog.
- **Authentication:** Support for Email/Password and **Google Sign-In**.
- **Scalable Architecture:** Decoupled frontend and backend.

## Tech Stack
- **Frontend:** Next.js (App Router), React, Vanilla CSS.
- **Backend:** Python, FastAPI, SQLAlchemy, SQLite (Development).
- **Auth:** JWT, Authlib (Google OAuth2).

## Getting Started

### 1. Backend Setup
```bash
cd backend
python -m venv .venv
.\.venv\Scripts\activate  # Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 3. Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a project and setup OAuth Credentials.
3. Add `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` to a `.env` file in the `backend` directory.

## How to Push to GitHub

1. Create a new repository on your GitHub account.
2. Open your terminal in the project root.
3. Run the following commands:

```bash
git add .
git commit -m "Initial commit: Unique Classic E-commerce"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```
