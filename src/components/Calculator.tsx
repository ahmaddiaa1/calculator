import { useState, useEffect } from "react";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";
import History from "./History";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);
  const [history, setHistory] = useState<
    Array<{ expression: string; result: string }>
  >([]);

  // Load history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("calculatorHistory");
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load history:", e);
      }
    }
  }, []);

  // Save history to localStorage
  useEffect(() => {
    localStorage.setItem("calculatorHistory", JSON.stringify(history));
  }, [history]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (/[0-9.]/.test(e.key)) {
        handleNumberClick(e.key);
      } else if (["+", "-", "*", "/"].includes(e.key)) {
        handleOperationClick(e.key === "*" ? "×" : e.key === "/" ? "÷" : e.key);
      } else if (e.key === "Enter" || e.key === "=") {
        e.preventDefault();
        handleEquals();
      } else if (e.key === "Backspace") {
        e.preventDefault();
        handleBackspace();
      } else if (e.key === "Escape") {
        handleClear();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [display, previousValue, operation, waitingForNewValue]);

  const handleNumberClick = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleDecimal = () => {
    if (waitingForNewValue) {
      setDisplay("0.");
      setWaitingForNewValue(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleOperationClick = (op: string) => {
    const currentValue = Number.parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setOperation(op);
    setWaitingForNewValue(true);
  };

  const calculate = (prev: number, current: number, op: string): number => {
    switch (op) {
      case "+":
        return prev + current;
      case "-":
        return prev - current;
      case "×":
        return prev * current;
      case "÷":
        return current === 0 ? 0 : prev / current;
      default:
        return current;
    }
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const currentValue = Number.parseFloat(display);
      const result = calculate(previousValue, currentValue, operation);
      const expression = `${previousValue} ${operation} ${currentValue}`;

      setDisplay(String(result));
      addToHistory(expression, String(result));

      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  };

  const addToHistory = (expression: string, result: string) => {
    setHistory([{ expression, result }, ...history.slice(0, 9)]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const useHistoryItem = (result: string) => {
    setDisplay(result);
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(true);
  };

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-card rounded-2xl shadow-lg p-6 border border-border'>
        <Display value={display} />
        <ButtonGrid
          onNumberClick={handleNumberClick}
          onOperationClick={handleOperationClick}
          onEquals={handleEquals}
          onClear={handleClear}
          onDecimal={handleDecimal}
          onBackspace={handleBackspace}
        />
      </div>
      {history.length > 0 && (
        <History
          history={history}
          onUseItem={useHistoryItem}
          onClear={clearHistory}
        />
      )}
    </div>
  );
}
