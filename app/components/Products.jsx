import React from 'react';
import Image from "next/image";
import LoganComputer from '../images/memojis/computer-black.png';
import CardSlider from './CardSlider';

import reactime from '../images/products/reactime2.png'
import cogntor from '../images/products/Cogntor.png'
import workbrew from '../images/products/Workbrew.png'
import superreader from '../images/products/super-reader.png'


export default function Products () {
    return (
        <div className="bio-container flex flex-col w-full bg-gradient-to-b  from-white via-[#221a1a] to-white dark:from-black dark:via-[#9d7d7d69] dark:to-black items-center justify-center p-4 space-y-4">
            <div className="bio-content text-center">
                <h1 className='font-bold text-4xl'>Products</h1>
                <Image src={LoganComputer} alt="Logan Computer" width={200} height={200} />
            </div>

            {/* <div className='border border-red-500 border-opacity-25 w-full flex items-center justify-center'>
                <span className='h-[200px]'><Image src={reactime} alt="Logan Computer" width={200} height={200} /></span>
                <span className='h-[200px]'><Image src={cogntor} alt="Logan Computer" width={200} height={200} /></span>
                <span className='h-[200px]'><Image src={workbrew} alt="Logan Computer" width={200} height={200} /></span>
                <span className='h-[200px]'><Image src={superreader} alt="Logan Computer" width={200} height={200} /></span>
            </div> */}
            {/* <div className='border border-red-500 border-opacity-25 w-full flex justify-center space-x-2'>
                <Image src={reactime} alt="Logan Computer" width={200} height={200} />
                <Image src={cogntor} alt="Logan Computer" width={200} height={200} />
                <Image src={workbrew} alt="Logan Computer" width={200} height={200} />
                <Image src={superreader} alt="Logan Computer" width={200} height={200} />
            </div> */}
            < CardSlider />
        </div>
    );
};