// import '../styles/section.scss'
// import Salutation from './salutation.jsx'
import technologies from '../styles/technologies.css'

import Image from 'next/image'
// 
import typescript from '../images/icons/typescript-icon.png'
import python from '../images/icons/python-icon.png'

import nodejs from '../images/icons/nodejs-icon.png'
import express from '../images/icons/express-icon.png'
import next from '../images/icons/nextjs-icon.png'
import react from '../images/icons/react-icon.png'
import redux from '../images/icons/redux-icon.png'
import svelte from '../images/icons/svelte-icon.png'
import sass from '../images/icons/sass-icon.png'
// import tailwind from '../images/icons/tailwinds-icon.png'
import git from '../images/icons/git-icon.png'
// import aws from '../images/icons/aws-icon.png'
import fastAPI from '../images/icons/fastapi-icon.svg'
import keras from '../images/icons/keras-icon.svg'




export default function Technologies() {


  return (
    <>
      {/* <div className='md:rounded-lg mt-52 md:mt-20 md:min-w-[300px]'> */}
        {/* <h2 className='text-green-500'>Favorite Technologies</h2> */}
        {/* <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4 border border-blue-400"> */}
        <div className="flex space-x-4 p-4 items-center justify-center flex-wrap">
          <span className="tech">
            <Image src={typescript} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={python} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={nodejs} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={express} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech ">
            <Image src={next} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={react} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={redux} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={svelte} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={sass} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={git} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={fastAPI} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={keras} alt="Typescript icon" width={30} height={30} />
          </span>

        </div>
      {/* </div> */}
    </>
  )
}

