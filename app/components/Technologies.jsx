import technologies from '../styles/technologies.css'

import Image from 'next/image'
// 
import typescript from '../images/icons/typescript-icon.svg'
import python from '../images/icons/python-icon.svg'

import nodejs from '../images/icons/node-icon.svg'
import express from '../images/icons/express-icon.svg'
import next from '../images/icons/next-icon.svg'
import react from '../images/icons/react-icon.svg'
import redux from '../images/icons/redux-icon.svg'
import svelte from '../images/icons/svelte-icon.svg'
import sass from '../images/icons/sass-icon.svg'
import tailwind from '../images/icons/tailwind-icon.svg'
import git from '../images/icons/git-icon.svg'

import fastAPI from '../images/icons/FastAPI-icon.svg'
import keras from '../images/icons/Keras-icon.svg'

import aws from '../images/icons/aws-icon.svg'
import css from '../images/icons/css-icon.svg'
import html from '../images/icons/html-icon.svg'
import flask from '../images/icons/flask-icon.svg'
import javascript from '../images/icons/javascript-icon.svg'
import jest from '../images/icons/jest-icon.svg'
import mongodb from '../images/icons/mongodb-icon.svg'
import mongoose from '../images/icons/mongoose-icon.svg'
import mysql from '../images/icons/mysql-icon.svg'
import postgres from '../images/icons/postgres-icon.svg'
import selenium from '../images/icons/selenium-icon.svg'
import tensorflow from '../images/icons/tensorflow-icon.svg'

import numpy from '../images/icons/numpy-icon.svg'
import pandas from '../images/icons/pandas-icon.svg'
import sklearn from '../images/icons/sklearn-icon.svg'

// import ________ from '../images/icons/_______-icon.svg'





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
          <span className="tech">
            <Image src={tailwind} alt="Typescript icon" width={30} height={30} />
          </span>

          <span className="tech">
            <Image src={aws} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={css} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={html} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={flask} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={javascript} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={jest} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={mongodb} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={mongoose} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={mysql} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={postgres} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={selenium} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={tensorflow} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={numpy} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={pandas} alt="Typescript icon" width={30} height={30} />
          </span>
          <span className="tech">
            <Image src={sklearn} alt="Typescript icon" width={30} height={30} />
          </span>
        </div>
      {/* </div> */}
    </>
  )
}

