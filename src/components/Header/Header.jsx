import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div className='header border border-red-600'>
            <div className="head border border-green-600">
                <h3 className="border larry w-full leading-6">
                    Larry
                    <div className="">Lemondio</div>
                </h3>
                <nav className="border">
                    <ul className="nav-list lg:flex gap-3">
                        <li className="nav-item">
                            <a href="#services" className="">SERVICES,</a>
                        </li>
                        <li className="nav-item">
                            <a href="#works" className="">WORKS,</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="">ABOUT,</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="">CONTACT</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header