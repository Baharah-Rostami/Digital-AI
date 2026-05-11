import { FiSun , FiMoon} from "react-icons/fi";
import { useContext } from "react";
import { ThemeContext } from "../Context/themeContext";

export default function ThemeToggle() {
    const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
        <button>
            {theme === "dark" ? (<FiSun onClick={()=> setTheme("light")}
             className="size-8.5 p-1.5 border border-gray-500 rounded-full 
            text-white hover:bg-white/10 transition-all cursor-pointer"
            />
          ) : (<FiMoon onClick={()=> setTheme("dark")}
             className="size-8.5 p-1.5 border border-gray-500 rounded-full 
            text-black hover:bg-black/10 transition-all cursor-pointer" />)}
        </button>
    </div>
  )
}
