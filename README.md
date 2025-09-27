# WhatsTask

## Introduction

WhatsTask is a modern task management and collaboration platform designed for teams and organizations to efficiently manage tasks, monitor progress, and streamline communication.

## Project Type

Frontend | Backend (Firebase)

## Deplolyed App

Frontend: https://whats-task.vercel.app/

## Directory Structure

WHATSTASK
├── node_modules
├── src
│   ├── components
│   │   ├── allLinks
│   │   ├── createGroup
│   │   ├── dashboardContent
│   │   ├── newNotification.jsx
│   │   ├── notificationCard.jsx
│   │   ├── taskAssign.jsx
│   │   ├── taskModel.jsx
│   │   ├── userCard.jsx
│   │   ├── taskStatus.jsx
│   │   ├── todayAlert.jsx
│   │   ├── addUser.jsx
│   │   ├── adminDashboard.jsx
│   │   ├── navSection.jsx
│   │   ├── userDashboard.jsx
│   │   └── userContext.jsx
│   ├── firebase
│   │   └── firebaseConfig.js
│   ├── hooks
│   │   └── useTaskNotifications.jsx
│   ├── pages
│   │   ├── about.jsx
│   │   ├── login.jsx
│   │   └── routeProtected.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── vite.config.js
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
└── README.md

## Features

- **Dashboard Content (Kanban Board)**

  - Visualize all tasks in a Kanban-style board with columns: **New → Pending → Completed**
  - Drag-and-drop tasks between columns to automatically update their status
  - Quick overview of total tasks, pending tasks, and completed tasks

- **Task Assign**

  - Assign tasks to users with details: **title, description, due date, and priority**
  - Tasks appear in assigned user’s dashboard under **New**
  - Option to assign tasks to multiple users simultaneously

- **Task Status Monitoring**

  - View all tasks with real-time updates on status
  - Filter or sort tasks by user, priority, or due date
  - Option to manually update task status if needed

- **All Users Management**

  - View all registered users with details: name, email, role, assigned tasks
  - Search, filter, and sort users for easy access
  - Access individual user profiles to see assigned tasks and activity

- **Notifications**

  - Send notifications to individual users or groups
  - Mark notifications as **urgent** or normal priority
  - Notifications appear in the user’s dashboard in real-time

- **Today Alert**

  - Displays urgent tasks or notifications scheduled for the current day
  - Quick action options to mark tasks as complete or review alerts
  - Helps admins prioritize critical tasks

- **Add New User**

  - Create new user accounts with **name, email, role, and password**
  - New users are automatically added to Firebase and appear in **All Users**
  - Supports managing multiple roles for better workflow control

- **My Profile**

  - Update admin account information including name, email, and password
  - Change profile picture to personalize admin account
  - All changes are synced with Firebase authentication and database

- **Responsive Design**

  - Fully responsive layout using **Tailwind CSS**
  - Works seamlessly on desktop, tablet, and mobile devices

- **Real-Time Data**

  - Tasks, notifications, and user updates are synced in real-time using **Firebase Realtime Database or Firestore**

- **Secure Authentication**

  - Admin and users login securely using **Firebase Authentication**
  - Role-based access ensures that only admins can assign tasks and manage users

- **Drag-and-Drop Task Management**
  - Interactive Kanban board for intuitive task handling
  - Automatic status update when tasks are moved between columns

## Installation & Getting started

Detailed instructions on how to install, configure, and get the project running. For BE/FS projects, guide the reviewer how to check mongodb schema etc.

### **1. Prerequisites**

Before you start, make sure you have:

- Node.js >= 18 ([Download Node.js](https://nodejs.org/))
- npm or yarn
- Firebase account ([https://firebase.google.com/](https://firebase.google.com/))

---

### **2. Clone the Repository**

```bash
git clone https://github.com/abhishekverma22/WhatsTask.git
cd whastask



```

### **3. Install Dependencies**

```bash
npm install
# or
yarn install
```

### **4. Firebase Setup**

1 Go to Firebase Console and create a new project.

2 Enable Authentication → Email/Password for admin and users.

3 Create a Firestore Database or Realtime Database for storing tasks, users, and notifications.

4 Copy your Firebase config credentials and replace them in src/firebaseConfig.js:

```
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


```

### **4 Set Firestore rules (development only):**

```bash
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}

```
### **5 5. Start the App**

```bash
npm start
# or
yarn start

```



## Usage

Provide instructions and examples on how to use your project.

```bash
# Example
```

Include screenshots as necessary.

## Credentials
Admin : vermaabhishekabhi22@gmail.com
Password: 123456




## Technology Stack

WhatsTask leverages modern frontend and backend technologies to provide a real-time, responsive, and secure task management platform.

### **Frontend**

React.js – Core library for building dynamic user interfaces.

React Router Dom – Handles client-side routing for multiple pages.

Tailwind CSS – Utility-first CSS framework for responsive and modern UI.

React Hot Toast – Displays interactive toast notifications.

lucide-react – Provides scalable vector icons for the UI.


### **Backend / Database**

Firebase Authentication – Secure login system for admin and users.

Firebase Firestore / Realtime Database – Stores users, tasks, notifications, and other data in real-time.

Firebase Storage (optional) – Stores profile images or other media assets.

### **Development Tools**

Node.js – Backend runtime environment for npm package management.

npm  – Dependency management and scripts.

VS Code – Recommended code editor.

Deployment

Vercel – For deploying frontend and hosting static files.
