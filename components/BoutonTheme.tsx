import React from "react";
import { useTheme } from "next-themes";

function BoutonTheme() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <button></button>
      <label className="switch">
        <input
          id="icon_prefix"
          type="checkbox"
          className=""
          onClick={changeTheme}
        />
        <span className="slider"></span>
      </label>
    </>
  );
}

export default BoutonTheme;
