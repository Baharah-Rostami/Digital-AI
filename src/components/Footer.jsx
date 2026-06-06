import { useContext } from "react";
import { FaInstagram, FaLinkedin, } from "react-icons/fa";
import { SiX } from "react-icons/si";
import images from "../Images/Images";
import { ThemeContext } from "../Context/themeContext";

export default function Footer() {
    const {theme} = useContext(ThemeContext);

  return (
    <footer className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
        <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
            <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400 ">
                <img src={theme === "dark" ? images.darkLogo : images.lightLogo} alt="website logo"
                className="w-32 sm:w-44" />
                <p className="max-w-md">From strategy to execution, we craft digital solutions that move your business forward.</p>
               
                <ul className="flex gap-8">
                    <li><a className="hover:text-primary" href="#hero">Home</a></li>
                    <li><a className="hover:text-primary" href="#services">Services</a></li>
                    <li><a className="hover:text-primary" href="#work"></a>Our Work</li>
                    <li><a className="hover:text-primary" href="#contact">Contact Us</a></li>
                </ul>
            </div>

            <div className="text-gray-600 dark:text-gray-400">
                <h3 className="font-semibold">Subscribe to our newsletter</h3>
                <p className="text-sm mt-2 mb-6">The latest news, articles, and resources sent to your inbox weekly</p>
                
                <div className="flex gap-2 text-sm">
                    <input type="email" placeholder="Enter your email" 
                    className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500" />
                    
                    <button className="bg-sky-600 text-white rounded px-6">Subscribe</button>
                </div>
            </div>
        </div>
        <hr className="border-gray-300 dark:border-gray-600 my-6" />

        <div className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
            <p>© {new Date().getFullYear()} Digital AI. All rights reserved.</p>
            <div className="flex items-center justify-between gap-4">
              <FaInstagram/>
              <SiX/>
              <FaLinkedin/>
            </div>
        </div>
    </footer>
  )
}
