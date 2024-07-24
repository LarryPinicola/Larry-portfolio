import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <div className='p-1 border border-blue-600'>
            <header className='flex items-center justify-between'>
                {/* Brand */}
                <a href="/" className="">
                    <h3 className="text-lg tracking-tight font-medium text-gray-500">
                        Larry/<span className="text-gray-400">Lemondio</span>
                    </h3>
                </a>

                {/* Navigation Items */}
                <ul className="md:flex items-center">
                    <NavLink to={"/home"}>
                        <li className="">Home</li>
                    </NavLink>

                    <NavLink to={"/services"}>
                        <li className="">Services</li>
                    </NavLink>

                    <NavLink to={"/works"}>
                        <li className="">Works</li>
                    </NavLink>

                    <NavLink to={"/about"}>
                        <li className="">About</li>
                    </NavLink>

                    <NavLink to={"/contact"}>
                        <li className="">Contact</li>
                    </NavLink>
                </ul>
            </header>
        </div>
    )
}

export default Header