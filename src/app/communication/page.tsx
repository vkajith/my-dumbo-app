"use client";
import React from 'react';
import Image from 'next/image';
import DumboImage from '../components/dumboImage';

const elephantCommunicationMethods = [
  {
    title: 'Trumpeting',
    description: 'Elephants use loud trumpet sounds when they are excited, angry, or scared!',
    imageUrl: '/trumpetting.webp', // Replace with a fun image URL
  },
  {
    title: 'Rumbling',
    description: 'They make deep, low sounds called rumbles to chat with other elephants!',
    imageUrl: '/rumble.webp', // Replace with a fun image URL
  },
  {
    title: 'Touch',
    description: 'Elephants hug each other with their trunks to show love and friendship!',
    imageUrl: '/touch.jpg', // Replace with a fun image URL
  },
  {
    title: 'Seismic Signals',
    description: 'They can feel vibrations in the ground with their feet! Super cool, right?',
    imageUrl: '/signal.avif', // Replace with a fun image URL
  },
  {
    title: 'Body Language',
    description: 'Elephants wave their big ears and swing their trunks to show how they feel!',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1664303582022-f24400a6b437?q=80&w=3012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with a fun image URL
  },
];

export default function ElephantCommunication() {
  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-5xl font-arialRounded mb-6 text-center animate-bounce">
        How Elephants Talk!
      </h1>

      <p className="font-poppins text-lg text-center mb-8 animate-pulse">
        Elephants are amazing! They talk to each other in many fun ways! Let’s explore how.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {elephantCommunicationMethods.map((method) => (
          <div key={method.title} className="bg-white border-4 border-yellow-400 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="relative h-48 rounded-t-xl overflow-hidden">
              <Image
                src={method.imageUrl}
                alt={method.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-arialRounded text-purple-600 text-center mb-2">{method.title}</h2>
              <p className="font-poppins text-pink-500 text-center">{method.description}</p>
            </div>
            <div className="text-center pb-4">
              <span role="img" aria-label="elephant" className="text-6xl">🐘</span>
            </div>
          </div>
        ))}
      </div>
      <DumboImage opacity={100} dumboClassName='flex justify-end' width={100} height={100}/>
    </div>
  );
}
