// import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import LoganBusiness from '../images/memojis/business-blue.png'
import LoganAcademic from '../images/memojis/academic-face.png'
import LoganCasual from '../images/memojis/casual-green.png'

export default function Background () {
    return (
        <div className="background-container flex flex-col w-full bg-gradient-to-r from-black via-[#5b777060] to-black items-center justify-center p-4 space-y-4">
            <div className="background-content text-center">
                <h1 className='font-bold text-4xl'>Background</h1>
                <div className='flex pt-6'>
                    <Image src={LoganBusiness} alt="Logan Computer" width={100} height={100} />
                    <Image src={LoganAcademic} alt="Logan Computer" width={100} height={100} />
                    <Image src={LoganCasual} alt="Logan Computer" width={100} height={100} />
                </div>

            </div>

            {/* <div className='border border-red-500 border-opacity-25 w-full flex items-center justify-center'>
                <span className='h-[200px]'><Image src={reactime} alt="Logan Computer" width={200} height={200} /></span>
                <span className='h-[200px]'><Image src={cogntor} alt="Logan Computer" width={200} height={200} /></span>
                <span className='h-[200px]'><Image src={workbrew} alt="Logan Computer" width={200} height={200} /></span>
                <span className='h-[200px]'><Image src={superreader} alt="Logan Computer" width={200} height={200} /></span>
            </div> */}
            <div className='border border-red-500 border-opacity-25 w-full flex justify-center space-x-2'>
                ...
            </div>
        </div>
    );
};