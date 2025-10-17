# Calculator App

A modern, responsive calculator built with React, TypeScript, and Tailwind CSS. Features a clean interface with dark/light theme support, calculation history, and keyboard shortcuts.

## Features

- **Basic Calculator Operations**: Addition, subtraction, multiplication, and division
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Calculation History**: Keep track of your previous calculations with persistent storage
- **Keyboard Support**: Use your keyboard for faster input
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface built with Tailwind CSS and Radix UI components

## Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

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

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Keyboard Shortcuts

- **Numbers (0-9)**: Input numbers
- **Operators (+, -, \*, /)**: Perform operations
- **Enter or =**: Calculate result
- **Backspace**: Delete last character
- **Escape**: Clear calculator

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── ButtonGrid.tsx    # Calculator button layout
│   ├── Calculator.tsx    # Main calculator logic
│   ├── Display.tsx       # Calculator display
│   ├── History.tsx       # Calculation history
│   └── ThemeToggle.tsx   # Theme switcher
├── lib/
│   └── utils.ts      # Utility functions
└── App.tsx           # Main app component
```

## Features in Detail

### Theme Support

The app automatically detects your system's dark/light mode preference and allows manual toggling. Your preference is saved to localStorage.

### History Management

Up to 10 recent calculations are stored and can be reused by clicking on them. History persists between sessions.

### Error Handling

Division by zero and other edge cases are handled gracefully.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🧠 Project Overview

A weather app built with React and OpenWeather API.  
🌤 **[View Live Demo →](https://weather-app-pi-jet-24.vercel.app/)**
