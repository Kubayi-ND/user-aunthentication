# User Authentication Web App
This is a custome user Authenication web application for the purpose of learning user Authentication 

# App Architecture 
  **Frontend** 
  - (React + TS) → Handles signup, login, OTP verification, profile page, admin dashboard

  **Backend**
  
  - (Node.js + Express) → Manages authentication logic, OTP generation, JWT issuing, password hashing

  - **Database** -> MongoDB (Atlas) → Stores users, OTPs, refresh tokens

  **Auth**
  - Flow (JWT, OTP) → Core security logic: token issuing, validation, OTP verification, and refresh tokens