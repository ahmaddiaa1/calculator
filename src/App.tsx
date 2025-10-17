import { useState, useEffect } from "react";
import Calculator from "@/components/Calculator";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldBeDark = saved ? saved === "dark" : prefersDark;
    setIsDark(shouldBeDark);
    updateTheme(shouldBeDark);
  }, []);

  const updateTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    updateTheme(newDark);
  };

  return (
    <main className='min-h-screen bg-background flex items-center justify-center p-4'>
      <div className='w-full max-w-sm'>
        <div className='flex justify-end mb-6'>
          <ThemeToggle
            isDark={isDark}
            onToggle={toggleTheme}
          />
        </div>
        <Calculator />
      </div>
    </main>
  );
}
