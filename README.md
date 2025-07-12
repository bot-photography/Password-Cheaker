# 🔐 Password Strength Checker

A simple, responsive web application built using **HTML, CSS, and JavaScript** that evaluates the strength of a password and provides feedback to the user. It also includes functionality to generate a secure password and toggle visibility.

## 🚀 Features

- Real-time password strength evaluation
- Show/hide password toggle
- Password generator (secure, randomized 12-character password)
- Strength criteria display (length, uppercase, lowercase, number, special character)
- Clear/reset functionality
- Responsive design

## 💻 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

## 📸 Screenshot

> Add a screenshot here to showcase the UI (optional but recommended)

## 🧠 How It Works

The app checks for the following requirements:
- Minimum of **8 characters**
- At least **one uppercase** letter
- At least **one lowercase** letter
- At least **one digit**
- At least **one special character** (`!@#$%^&*`)

Based on how many criteria are met, the password is labeled as:
- ⚠️ Weak (≤ 2 requirements)
- ⚠️ Medium (3–4 requirements)
- ✅ Strong (all 5 requirements)

The generator ensures all character types are included and then randomizes the order to improve security.

## 📦 Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/password-checker.git
   cd password-checker
