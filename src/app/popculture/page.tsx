"use client";
import React from 'react';
import Image from 'next/image';
import DumboImage from '../components/dumboImage';

const popularCultureReferences = [
  {
    title: 'Dumbo',
    description: 'A classic Disney animated film about a young elephant who can fly.',
    imageUrl: '/dumbo.jpg', // Replace with a valid image URL
    link: 'https://en.wikipedia.org/wiki/Dumbo_(film)',
  },
  {
    title: 'Babar the Elephant',
    description: 'A beloved children\'s book series featuring Babar, the king of elephants.',
    imageUrl: '/babar.jpg', // Replace with a valid image URL
    link: 'https://en.wikipedia.org/wiki/Babar',
  },
  {
    title: 'Elephant in the Room',
    description: 'A phrase used to describe an obvious problem that is being ignored.',
    imageUrl: '/elephantroom.jpg', // Replace with a valid image URL
    link: 'https://en.wikipedia.org/wiki/Elephant_in_the_room',
  },
];

export default function PopularCultureReferences() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-arialRounded mb-8">Humpty Dumpty!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularCultureReferences.map((reference) => (
          <div key={reference.title} className="border rounded-lg bg-white overflow-hidden shadow-lg">
            <a href={reference.link} target="_blank" rel="noopener noreferrer">
              <div className="relative h-48">
                <Image
                  src={reference.imageUrl}
                  alt={reference.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl text-purple-700 font-poppins">{reference.title}</h2>
                <p className='text-purple-700'>🐘! {reference.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      <DumboImage opacity={100} dumboClassName='flex justify-end' width={100} height={100}/>
    </div>
  );
}
