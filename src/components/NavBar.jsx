import {NavLink} from "react-router-dom";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs"
import { FaBarsStaggered } from 'react-icons/fa6';
import {NavLinks} from "./Navlinks";
import {useEffect, useState} from "react";

const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'about', text: 'about' },
  { id: 3, url: 'products', text: 'products' },
  { id: 4, url: 'cart', text: 'cart' },
  { id: 5, url: 'checkout', text: 'checkout' },
  { id: 6, url: 'orders', text: 'orders' },
];
const themes = {
    light: "light", 
    dark: "dark"
}

export const NavBar = () => {
    const localStorageTheme = localStorage.getItem("theme");
    const [ theme, setTheme ] = useState( localStorageTheme? localStorageTheme: themes.light);

    const handleTheme = () => {
        const newTheme = theme === themes.light? themes.dark : themes.light;
        setTheme(newTheme)
    }
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem("theme", theme)
    },[theme])
    return <nav className="bg-base-200">
        <div className="navbar align-element">
            <div className="navbar-start">
                {/* TITLE */}
                 <NavLink to="/" className="hidden  lg:flex btn btn-primary text-3xl items-center"> C </NavLink>
                {/* DROPDOWN */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FaBarsStaggered className="h-6 w-6"/>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                        <NavLinks links={links} />
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul tabIndex={0} className="flex flex-row menu menu-sm mt-3 p-2 shadow bg-base-200">
                    <NavLinks links={links} />
                </ul>
            </div>
            <div className="navbar-end">
                {/** THEME SETUP */}
                <label className="swap swap-rotate">
                    <input type="checkbox" onChange={handleTheme} />
                    <BsSunFill className="swap-off h-4 w-4" />
                    <BsMoonFill className="swap-on h-4 w-4" />
                </label>
                {/** CART LINK */}
                <NavLink to="/cart" className="btn btn-gohst btn-circle btn-md ml-4">
                    <div className="indicator">
                        <BsCart3 className="h-6 w-6" />
                        <span className="badge badge-sm badge-primary indicator-item">
                            8
                        </span>
                    </div>
                </NavLink>
            </div>
        </div>
    </nav>
}