import React from 'react'
import type { FC } from 'react'
import Image from 'next/image';

const About: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen min-h-screen ">
      <div>
      <Image
        src="/dumbo-small.png" // Relative path from public directory
        alt="Dumbo"
        width={500} // Set desired width
        height={300} // Set desired height
        className="rounded" // Optional: add classes for styling
      />
      <div className='w-[600px] md-[20px] p-4 text-2xl'>
      <div>
      🌟🐘 Hey there, little explorers! I’m Ellie the Elephant, your friendly guide to the amazing world of elephants! Join me on a fun adventure filled with exciting facts, games, and stories about my fellow elephants. Let’s discover how they live, play, and protect our planet together! Ready? Let’s go! 🌍✨
      </div>
      </div>
      </div>
    </div>
  )
}

export default About
