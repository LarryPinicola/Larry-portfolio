import React, { useEffect, useState } from 'react'
import xmark from '../../public/assets/img/close-line.png'
import burger from '../../public/assets/img/menu-line.png'

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowSidebar(true);
            } else {
                setShowSidebar(false)
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
            setIsOpen(false)
        }
    };

    return (
        <div className='flex border border-green-500'>
            {/* btn */}
            {showSidebar && (
                <button className='cursor-pointer fixed z-50 top-4 right-4 bg-gray-300 py-2 px-3 items-center flex justify-center rounded-full border border-white' onClick={toggleSidebar}>
                    {/* {isOpen ? <i className="fa-solid fa-xmark text-3xl" style={{color:"#8D493A"}}></i> : <i className="fa-solid fa-bars text-3xl" style={{color:"#8D493A"}}></i>} */}
                    {isOpen ? <img src={xmark} alt="xmark" className="" /> : <img src={burger} alt="menu" className="" />}
                </button>
            )}

            <div
                className={`fixed inset-0 z-40 border border-green-600 bg-gray-800 bg-opacity-75 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleSidebar}
            />

            <div className={`fixed inset-y-0 left-0 z-40 w-full bg-gray-400 shadow-xl border border-red-600 duration-700  md:rounded-l-2xl lg:rounded-l-2xl ${isOpen ? 'translate-x-0 md:translate-x-1/3 lg:translate-x-1/2' : 'translate-x-full'}`}>
                {/* <div className="p-3 md:hidden">
                    <h2 className="text-lg font-bold">Menu</h2>
                    <button className='' onClick={toggleSidebar}>close</button>
                </div> */}

                <div className="border border-blue-600 h-full text-gray-100">
                    <nav className='flex flex-col gap-1 font-bold pt-16 p-8 border border-blue-600'>
                        <button onClick={() => scrollToSection('home')} className='uppercase text-5xl text-left'>Home</button>
                        <button onClick={() => scrollToSection('services')} className='uppercase text-5xl text-left'>services</button>
                        <button onClick={() => scrollToSection('works')} className='uppercase text-5xl text-left'>works</button>
                        <button onClick={() => scrollToSection('about')} className='uppercase text-5xl text-left'>about</button>
                        <button onClick={() => scrollToSection('contact')} className='uppercase text-5xl text-left'>contact</button>
                    </nav>

                    <div className="border border-red-600 mt-24 py-5 ps-8">
                        {/* email address */}
                        <div className="leading-5 font-medium tracking-tight text-gray-600">
                            EMAIL ADDRESS
                            <div className="text-gray-100">thelarry1549@gmail.com</div>
                        </div>

                        {/* Social Links */}
                        <div className="border p-1 my-4 border-gray-700 flex gap-2">
                            <div className="border border-gray-300 px-1 rounded-xl">
                                linkedin
                            </div>
                            <div className="border border-gray-300 px-1 rounded-xl">
                                instagram
                            </div>
                            <div className="border border-gray-300 px-1 rounded-xl">
                                facebook
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar