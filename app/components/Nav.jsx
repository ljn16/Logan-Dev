'use client'
// import React from 'react';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import github from '../images/icons/github-icon.png'
import linkedin from '../images/icons/linkedin-icon.png'



export default function Nav() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (<>
        <nav className={`bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg text-white text-center flex justify-left items-center fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'p-1' : 'p-2'}`}>
            <div className={`flex cursor-pointer relative items-center transition-all duration-400 ${isScrolled ? 'transform scale-75' : ''}`}>
                <code className='text-xl tracking-widest'>Logan<span className='text-cyan-200 opacity-50' >.dev{'('}
                    <a href="https://github.com/ljn16" target="_blank" rel="noopener noreferrer" className='inline-block px-1 hover:scale-150'>
                        <Image src={github} alt="GitHub icon" height='20'/>
                    </a>
                    <a href="https://www.linkedin.com/in/logan-nelsen/" target="_blank" rel="noopener noreferrer" className='inline-block px-1 hover:scale-150'>
                        <Image src={linkedin} alt="LinkedIn icon" height='20'/>
                    </a>
                    {') {'}</span></code>
            </div>
        </nav>
        <div className={`bg-[#222222] ${isScrolled ? 'h-8' : 'h-11'} sticky top-0 left-0`}></div>
        
    </>);
};

