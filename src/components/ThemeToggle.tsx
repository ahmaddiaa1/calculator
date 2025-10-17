import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className='p-2 rounded-lg bg-[muted] hover:bg-muted/80 transition-colors'
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}>
      {isDark ? (
        <Sun className='w-5 h-5 text-foreground' />
      ) : (
        <Moon className='w-5 h-5 text-foreground' />
      )}
    </button>
  );
}
