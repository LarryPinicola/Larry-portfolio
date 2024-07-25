import React, { useEffect, useState } from 'react'

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true)
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
                <button className='md:hidden fixed z-50 top-4 left-4 bg-gray-400 text-white' onClick={toggleSidebar}>
                    {isOpen ? 'close' : 'menu'}
                </button>
            )}

            <div className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-75 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <div className="p-3 flex justify-between items-center md:hidden">
                    <h2 className="text-lg font-bold">Menu</h2>
                    <button onClick={toggleSidebar}>close</button>
                </div>

                <nav className='flex flex-col space-y-2 p-2'>
                    <button onClick={() => scrollToSection('home')} className='text-gray-800'>Home</button>
                    <button onClick={() => scrollToSection('about')} className='text-gray-800'>about</button>
                    <button onClick={() => scrollToSection('services')} className='text-gray-800'>services</button>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar