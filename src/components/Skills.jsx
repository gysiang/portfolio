import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import ReactImg from '../assets/react.png';
import Mongo from '../assets/mongo.png';
import Github from '../assets/github.png';
import Javascript from '../assets/javascript.png'
import Postgres from '../assets/postgresql.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div>
          <img src={HTML} className='w-20 mx-auto' alt='HTML icon'/>
          <p className='my-4'>HTML</p>

        </div>
        <div>
          <img src={CSS} className='w-20 mx-auto' alt='CSS icon'/>
          <p className='my-4'>CSS</p>

        </div>
        <div>
          <img src={Javascript} className='w-20 mx-auto' alt='Javascript icon'/>
          <p className='my-4'>Javascript</p>

        </div>
        <div>
          <img src={ReactImg} className='w-20 mx-auto' alt='React icon'/>
          <p className='my-4'>React</p>

        </div>
        <div>
          <img src={Github} className='w-20 mx-auto' alt='Github icon'/>
          <p className='my-4'>Github</p>

        </div>
        <div>
          <img src={Mongo} className='w-20 mx-auto' alt='Mongo icon'/>
          <p className='my-4'>Mongo</p>

        </div>
        <div>
          <img src={Postgres} className='w-20 mx-auto' alt='Postgres icon'/>
          <p className='my-4'>PostgreSQL</p>

        </div>
      </div>
 
      </div>
    </div>
  )
}

export default Skills