import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 group">
      {/* Tooltip */}
      <div
        className="
          absolute bottom-full mb-3 -left-5 -translate-x-1/2
          whitespace-nowrap rounded-md px-3 py-1.5
          text-sm font-medium
          bg-black text-white
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          pointer-events-none
        "
      >
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </div>

      {/* Button */}
      <button
        onClick={toggleTheme}
        className={cn(
          "p-3 rounded-full",
          "bg-background/90 dark:bg-slate-900/80 backdrop-blur-md",
          "border border-border",
          "shadow-lg",
          "transition-all duration-300",
          "hover:scale-110"
        )}
      >
        {isDarkMode ? (
          <Sun className="h-5 w-5 text-yellow-400" />
        ) : (
          <Moon className="h-5 w-5 text-gray-800 dark:text-white" />
        )}
      </button>
    </div>
  );
}