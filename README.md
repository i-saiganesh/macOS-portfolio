# 🍎 macOS Portfolio: Interactive Web Desktop

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Fast%20Build-purple?logo=vite)
![GSAP](https://img.shields.io/badge/GSAP-Animations-green?logo=greensock)
![Status](https://img.shields.io/badge/Status-Live-success)

> **A fully interactive, browser-based operating system simulation. This project bridges the gap between web applications and native desktop experiences using React state management and GSAP for high-performance animations.**

---

## 🚀 Live Experience
**[Click here to launch the System](https://saiganeshs.vercel.app/)**
*(Try dragging the windows, opening apps, and maximizing the terminal!)*

---

## 🧠 The Engineering (How it Works)
This is not a static template. It is a complex **Single Page Application (SPA)** that mimics an OS kernel's window manager.

### 1. Window Management System
Instead of simple routing, I built a custom **Z-Index Layering Engine**.
* **State Management:** Tracks which window is "active," "minimized," or "closed" in real-time.
* **Focus Logic:** Clicking a window dynamically lifts its `z-index` above others, simulating a real desktop environment.

### 2. Draggable & Resizable DOM Elements
I implemented a physics-based drag system without heavy external libraries.
* **Event Listeners:** Uses `onMouseDown`, `onMouseMove`, and `onMouseUp` to calculate delta positions.
* **Boundary Detection:** Prevents windows from being dragged off-screen, ensuring a consistent UX.

### 3. High-Performance Animations (GSAP)
CSS transitions weren't smooth enough for opening/closing apps.
* **GSAP (GreenSock):** Used for the "Dock Magnification" effect and window opening sequences to ensure 60FPS performance, even on lower-end devices.

---

## ✨ Key Features
* **🖥️ Virtual Desktop:** Complete with a working Dock, Menu Bar, and Context Menus.
* **🪟 Window Controls:** Minimize, Maximize, and Close functionalities that preserve app state.
* **📄 Interactive Apps:**
    * **Terminal:** A functional command-line interface simulation.
    * **PDF Viewer:** Custom-built resume previewer.
    * **Safari:** An iframe-based browser simulation within the browser.
* **🎨 Dynamic Theme:** Glassmorphism (Blur effects) and systematic layout using CSS Grid/Flexbox.

---

## 🛠️ Tech Stack
* **Core Framework:** React.js (Functional Components & Hooks)
* **Build Tool:** Vite (Hot Module Replacement for speed)
* **Animation Engine:** GSAP (GreenSock Animation Platform)
* **Styling:** CSS Modules / SCSS (Scoped styling for modularity)
* **Deployment:** Vercel

---

## 💻 How to Run Locally

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/i-saiganesh/macOS-portfolio.git](https://github.com/i-saiganesh/macOS-portfolio.git)
    cd macOS-portfolio
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Start the Development Server**
    ```bash
    npm run dev
    ```

4.  **Access the Desktop**
    Open your browser and go to: `http://localhost:5173`

---

## 📂 Project Structure

```text
macOS-portfolio/
│
├── src/
│   ├── components/        # The OS UI (Dock, Menubar, Windows)
│   ├── apps/              # Individual App Logic (Terminal, Safari, etc.)
│   ├── hooks/             # Custom Hooks for Drag/Resize logic
│   ├── assets/            # Icons and Wallpapers
│   └── App.jsx            # The Window Manager Kernel
│
├── public/                # Static assets (Resume PDF, Favicons)
├── vite.config.js         # Build Configuration
└── README.md              # Documentation
