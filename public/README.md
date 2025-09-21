# 🚀 React Dashboard Project

This is my React + MUI + Redux dashboard project.  
I built it as a modern admin dashboard with support for dark/light mode, global state management, and reusable components.
Demo link - [https://dashboard-ui-zzj7.vercel.app/]
---

## 🚀 Setup & Installation

1. **Clone the repository**
   git clone https://github.com/your-username/dashboard-ui.git
   cd dashboard-ui

2. Install dependencies
   npm install

3. npm start
   This will run the app on http://localhost:3000.

---

## 🔑 Key Features
- ✅ **Dark / Light mode toggle** (managed with Redux)  
- ✅ **Material UI design system** for clean & responsive UI  
- ✅ **Reusable components** → Header, Sidebar, StatCard, Order Table  
- ✅ **Charts & Analytics** integrated (Revenue, Growth, Customers, etc.)  
- ✅ **Notifications & History icons** in the header  
- ✅ **Routing setup** → `/` and `/home` point to the same page  
- ✅ **Clean layout** with AppBar, Breadcrumbs, Search bar  

---

## 🎨 Design Decisions
- Used **Redux Toolkit** instead of React Context for theme → easier to scale when adding notifications, orders, or user data later.  
- Default mode is **dark**, because dashboards are mostly used in monitoring / pro setups.  
- Customized **MUI theme overrides** so that Cards, Papers, AppBar match the exact dashboard style.  
- Created **StatCard** component to keep KPI cards consistent and highlight key metrics (light-blue background).  

---

## ⚡ Challenges I Faced
- Dark mode was tricky — MUI’s defaults are too bright, so I had to override `MuiCard`, `MuiPaper`, and `MuiAppBar`.  
- Making charts look good in dark mode (fixed by using transparent background + theme colors).  
- Breadcrumbs needed to be clickable with ripple but still look like plain text (solved with `ButtonBase`).  

---

## 🚀 Improvements Done
- Unified **border radius** and **divider styles** to make the UI cleaner.  
- Separated **theme config** into `ThemeProviderWrapper` for clarity.  
- Combined duplicate routes (`/` and `/home`) into one.  
- Made the project structure modular (Components, Store, Theme).  

---

## 👨‍💻 Author
- Built with using React, MUI, Redux Toolkit  
- Open for feedback and improvements!

