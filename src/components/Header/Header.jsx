import React from 'react'
import "./Header.css"

const Header = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    };

    return (
        <div className='header border border-red-600'>
            <div className="head border border-green-600">
                <h3 className="border larry w-full leading-6">
                    Larry
                    <div className="">Lemondio</div>
                </h3>
                <nav className="border border-green-500">
                    <ul className="nav-list leading-4 lg:flex lg:gap-3">
                        <li className="nav-item">
                            <h3 className="uppercase" onClick={() => scrollToSection('home')}>home,</h3>
                        </li>
                        <li className="nav-item">
                            <h3 className="uppercase" onClick={() => scrollToSection('services')}>services,</h3>
                        </li>
                        <li className="nav-item">
                            <h3 className="uppercase" onClick={() => scrollToSection('works')}>works,</h3>
                        </li>
                        <li className="nav-item">
                            <h3 className="uppercase" onClick={() => scrollToSection('about')}>about,</h3>
                        </li>
                        <li className="nav-item">
                            <h3 className="uppercase" onClick={() => scrollToSection('contact')}>contact</h3>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header