"use client";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Switch
        size="lg"
        color="success"
        startContent={<FaSun />}
        endContent={<FaMoon />}
        onValueChange={(isChecked) => {
          isChecked ? setTheme("light") : setTheme("dark");
        }}
      >
        {theme === "light" ? "Tema escuro" : "Tema claro"}
      </Switch>
    </div>
  );
};
