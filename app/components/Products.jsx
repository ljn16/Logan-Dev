import React from 'react';
import Image from "next/image";
import LoganComputer from '../images/memojis/computer-black.png';

import reactime from '../images/products/Reactime.gif'
import cogntor from '../images/products/Cogntor.png'
import workbrew from '../images/products/Workbrew.png'
import superreader from '../images/products/SuperReader.gif'


export default function Products () {
    return (
        <div className="bio-container flex flex-col w-full bg-gradient-to-b from-black via-[#222222] to-black items-center justify-center p-4 space-y-4">
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
            <div className='border border-red-500 border-opacity-25 w-full flex justify-center space-x-2'>
                {/* <Image src={reactime} alt="Logan Computer" width={200} height={200} /> */}
                <Image src={cogntor} alt="Logan Computer" width={200} height={200} />
                <Image src={workbrew} alt="Logan Computer" width={200} height={200} />
                {/* <Image src={superreader} alt="Logan Computer" width={200} height={200} /> */}
            </div>
        </div>
    );
};