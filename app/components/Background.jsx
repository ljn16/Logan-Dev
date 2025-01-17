// import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import LoganBusiness from '../images/memojis/business-blue.png'
import LoganAcademic from '../images/memojis/academic-face.png'
import LoganCasual from '../images/memojis/casual-green.png'

export default function Background () {
    return (
        <div className="background-container flex flex-col w-full bg-gradient-to-r from-[#000000c6] via-[#5b777060] to-[#000000c6] items-center justify-center p-4 space-y-4">
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
            <div className='w-full flex flex-col md:flex-row justify-center space-y-2 md:space-x-10 p-2'>
                <div className='w-full md:w-1/5 bg-white bg-opacity-5 dark:bg-gray-400 dark:bg-opacity-5 rounded-lg p-2'> 
                    <h2 className='text-2xl text-center'>Professional</h2>
                    <p>
                        <ul className='flex justify-around mt-1'>
                            <li>Sales</li>
                            <li>Medical devices</li>
                            <li>Software</li>

                        </ul>
                    </p>
                </div>
                <div className='w-full md:w-1/5 bg-white bg-opacity-5 dark:bg-gray-400 dark:bg-opacity-5 rounded-lg p-2'>
                    <h2 className='text-2xl text-center'>Academic</h2>
                    <p>
                        <ul className='flex justify-around mt-1'>
                            <li>Wartburg College - Neuroscience</li>
                        </ul>
                    </p>
                </div>
                <div className='w-full md:w-1/5 bg-white bg-opacity-5 dark:bg-gray-400 dark:bg-opacity-5 rounded-lg p-2'>
                    <h2 className='text-2xl text-center'>Casual</h2>
                    <p>
                    <p>
                        <ul className='flex justify-around mt-1'>
                            <li>Pets</li>
                            <li>Photography</li>
                            <li>Paddleboarding</li>
                        </ul>
                    </p>
                    </p>
                </div>
            </div>
        </div>
    );
};