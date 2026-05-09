import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { useEffect } from "react";

export default function ThemeToggle({theme , setTheme}) {
      useEffect(() => {
        if(theme === "dark"){
          document.documentElement.classList.add("dark");
        } else{
          document.documentElement.classList.remove("dark");
        }
      }, [theme]);
  return (
    <div>
        <button>
            {theme === "dark" ? (<FiSun onClick={()=> setTheme("light")}
             className="size-8.5 p-1.5 border border-gray-500 rounded-full"/>)
             : (<FiMoon onClick={()=> setTheme("dark")}
             className="size-8.5 p-1.5 border border-gray-500 rounded-full" />)}
        </button>
    </div>
  )
}
