import React from 'react'
import type { NextPage } from 'next'
import DumboImage from './components/dumboImage'

const Home: NextPage = () => {
  return (
    <div className='flex items-center justify-center h-screen w-screen min-h-screen'>
      <DumboImage opacity={35}/>
    </div>
  )
}

export default Home
