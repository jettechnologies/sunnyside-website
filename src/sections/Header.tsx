import { logo, hamburgerIcon } from "../assets";
import { useState } from "react";

const Header = () => {

    const [navToggle, setNavToggle] = useState(false);

  return (
    <header className="w-full h-[--header-height] bg-hero-section sticky top-0 px-8 flex justify-between z-50">
        <nav className="w-full h-full py-2 lg:flex justify-between">
            <a href="#" className="self-center">
                <img src={logo} alt="logo icon" />
            </a>
            <ul 
                 className={`main-nav w-full lg:w-fit h-[15rem] gap-y-5 ${navToggle ? "flex" : "hidden"} lg:flex flex-col lg:flex-row lg:h-full items-center justify-evenly lg:justify-between`}>
                <li className="">
                    <a href="#about" className="">About</a>
                </li>
                <li>
                    <a href="#services" className="">Services</a>
                </li>
                <li>
                    <a href="#projects" className="">Projects</a>
                </li>
                <li className="min-h-10 max-md:ml-[-1.5rem] flex items-center px-6 rounded-md bg-yellow lg:bg-text-white">
                    <a href="#" className="font-barlow text-size-500 text-text-blue-400">Contact</a>
                </li>
            </ul>
        </nav>
        <button 
            className="lg:hidden w-4 aspect-square cursor-pointer ml-[-10rem]"
            onClick={() => setNavToggle(!navToggle)}
        >
            <img src={hamburgerIcon} alt="hamburger icon"/>
        </button>
    </header>
  )
}

export default Header