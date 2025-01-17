import React from 'react';

export default function Footer() {
    return (
        <footer className=" w-full p-1 px-3 bg-black bg-opacity-75 text-white text-center flex justify-left items-center mt-4">
            <div className="">
                <p className="text-cyan-200 opacity-50">{'}'}</p>
            </div>
            <span className='mx-auto text-gray-700'>
                <span className='font-bold'>Contact me </span>
                <a href="mailto:loganjnelsen@gmail.com">loganjnelsen@gmail.com</a>
            </span>
        </footer>
    );
};