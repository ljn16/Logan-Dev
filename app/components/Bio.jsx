import React from 'react';
import Image from "next/image";
import LoganWave from '../images/memojis/hello-black.png';
import Technologies from './Technologies';


export default function Bio () {
    return (
        <div className="bio-container flex flex-col w-full bg-gradient-to-r from-black via-[#626554] to-black items-center justify-center p-4 space-y-4">
            <div className="bio-content text-center">
                <h1 className='font-bold text-4xl'>Hi, I&apos;m Logan</h1>
                <Image src={LoganWave} alt="Logan Image" width={200} height={200} />
            </div>
            
            <div className='border border-red-500 border-opacity-25 w-full flex flex-col items-center justify-center font-thin'>
                <p>I'm a full-stack developer from the midwest.</p>
                < Technologies />
            </div>
        </div>
    );
};