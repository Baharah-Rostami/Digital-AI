import { useState, useContext } from "react";
import { GrFormNextLink } from "react-icons/gr"
import { MdClose } from "react-icons/md";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Im500Px } from "react-icons/im";
import images from "../Images/Images";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "../Context/themeContext";

export default function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4
sticky top-0 z-20 backdrop-blur-md border-b border-gray-200/20
bg-white/70 dark:bg-black">

      <img
        src={theme === "dark" ? images.darkLogo : images.lightLogo}
        alt="Digital AI Logo"
        className="w-34 sm:w-40 object-contain cursor-pointer"
      />

      <div className={`text-gray-700 dark:text-white sm:text-sm
       ${!sideBar ? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10"}
       max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-sky-500 
      max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

        <MdClose className="w-5 absolute right-4 top-4 sm:hidden"
          onClick={() => setSideBar(false)} />

        <a onClick={() => setSideBar(false)} href="#home" className="sm:hover:border-b">Home</a>
        <a onClick={() => setSideBar(false)} href="#services" className="sm:hover:border-b">Services</a>
        <a onClick={() => setSideBar(false)} href="#work" className="sm:hover:border-b">Our Work</a>
        <a onClick={() => setSideBar(false)} href="#contact" className="sm:hover:border-b">Contact Us</a>

      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggle />

        <AiOutlineMenuFold
          className="text-3xl sm:hidden cursor-pointer"
          onClick={() => setSideBar(true)}
        />

        <a href="#contact" className="text-sm max-sm:hidden flex items-center gap-2 bg-sky-500 
        text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all">
          Connect <GrFormNextLink /></a>
      </div>
    </div>
  )
}
