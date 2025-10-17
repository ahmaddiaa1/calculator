# Calculator App

A modern and responsive calculator application built with React, TypeScript, and Vite. Features a clean interface with dark/light theme support and calculation history.

## Features

- 🔢 Basic calculator operations (add, subtract, multiply, divide)
- 🌙 Dark/light theme toggle with system preference detection
- 📜 Calculation history with persistent storage
- ⌨️ Full keyboard support for faster input
- 📱 Responsive design that works on all devices
- 🎨 Modern UI with Tailwind CSS and smooth animations
- ⚡ Fast development with Vite
- 🔧 TypeScript for better development experience

## Tech Stack

- **React 19** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible UI components
- **Lucide React** - Beautiful icons
- **React Icons** - Additional icon library

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd calculator
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint to check for code issues
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── ButtonGrid.tsx  # Calculator button layout
│   ├── Calculator.tsx  # Main calculator logic
│   ├── Display.tsx     # Calculator display
│   ├── History.tsx     # Calculation history
│   └── ThemeToggle.tsx # Theme switcher
├── lib/
│   └── utils.ts        # Utility functions
├── App.tsx             # Main app component
└── main.tsx            # App entry point
```

## Usage

1. **Perform Calculations**: Use the number buttons and operators to perform calculations
2. **View History**: Previous calculations are automatically saved and displayed below the calculator
3. **Use Keyboard**: Use your keyboard for faster input (numbers, operators, Enter for equals, Escape to clear)
4. **Toggle Theme**: Click the theme toggle button to switch between dark and light modes
5. **Reuse Results**: Click on any item in the history to use that result in a new calculation

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🧠 Project Overview
A Calculator app built with React.  
🌤 **[View Live Demo →](https://calculator-86en.vercel.app/)**
