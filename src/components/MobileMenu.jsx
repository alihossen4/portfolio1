import { useEffect } from 'react';

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (

    <div className={`fixed top-0 w-full bg-[rgba(10,10,10,0.0)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
    
            ${
                menuOpen 
                ? 'h-screen opacity-100 pointer-events-auto'
                : 'h-0 opacity-0 pointer-events-none'
            }
        `}
    >
        <button onClick={() => setMenuOpen(false)} className='absolute top-6 right-6 text-white text-3xl focus:Outline-none cursor-pointer'
            aria-label='Close Menu'
            >
            &times;
        </button>

        <a href="#home"
            onClick={() => setMenuOpen(false)}    
        className={`text-gray-300 my-2 hover:text-white transform transition-transform duration-300
            ${menuOpen? "opacity-100 translate-y-0": "opacity-0 translate-y-5"}
            `}
        >
            Home
        </a>

        <a href="#about" className={`text-gray-300 my-2 hover:text-white transform transition-transform duration-300
            ${menuOpen? "opacity-100 translate-y-0": "opacity-0 translate-y-5"}
            `}>
            About
        </a>
                        
        <a href="#projects" className={`text-gray-300 my-2 hover:text-white transform transition-transform duration-300
            ${menuOpen? "opacity-100 translate-y-0": "opacity-0 translate-y-5"}
            `}>
            Projects
        </a>
        
        <a href="#contact" className={`text-gray-300 hover:text-white transform my-2 transition-transform duration-300
            ${menuOpen? "opacity-100 translate-y-0": "opacity-0 translate-y-5"}
            `}
        >
            Contact
        </a>
    </div>
);
};
