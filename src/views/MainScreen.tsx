import React from "react";
import ListItem from "../components/ListItem";
import ThemeToggle from "../components/ThemeToggle";
import useDarkMode from "../hooks/useDarkMode";

export default function MainScreen() {
  const [darkMode, setDarkMode] = useDarkMode();

  function handleModeChange(): void {
    setDarkMode(!darkMode);
  }

  return (
    <div className="dark:bg-gray-800 min-h-screen flex-col flex align-middle justify-center">
      <ThemeToggle changeMode={handleModeChange} />
      <br />
      <br />
      <ListItem />
    </div>
  );
}
