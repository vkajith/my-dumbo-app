// components/ImageGallery.js

"use client";
import React from 'react';
import Image from "next/image";
import DumboImage from '../components/dumboImage';

// pages/diet.js
export default function ElephantDiet() {
    return (
        <div className="container mx-auto p-8">
            {/* Header Section */}
            <div className="text-center mb-8">
                <h1 className="text-5xl font-arialRounded text-white-700 drop-shadow-lg tracking-wide">
                    🐘 Elephant Diet 🥗
                </h1>
                <p className="text-lg font-poppins text-white-800">
                    Discover the tasty treats of our favorite giants!
                </p>
            </div>

            {/* Main Content */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-green-600 mb-4">Diet Overview</h2>
                <p className="text-gray-700 mb-4">
                    Elephants are herbivores, munching on a variety of plants to fuel their majestic bodies! They can consume up to 300 pounds of food a day—wow!
                </p>

                {/* Diet Sections with Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-green-100 p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-green-700 mb-2">🌾 Grasses</h3>

                        <div className='w-full h-60 relative overflow-hidden mb-4'>
                            <Image
                                src="https://plus.unsplash.com/premium_photo-1661902239020-aeb5b51c8d33?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Grass"
                                layout="fill"
                                objectFit="cover"
                                className="object-cover mb-2 rounded-lg"
                            />
                        </div>
                        <p className="text-gray-600">
                            Grasses are a staple in an elephant's diet, especially during the rainy season.
                        </p>
                    </div>

                    <div className="bg-yellow-100 p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-yellow-700 mb-2">🍉 Fruits</h3>

                        <div className='w-full h-60 relative overflow-hidden mb-4'>
                            <Image
                                src="https://plus.unsplash.com/premium_photo-1661824826532-553582b3ef00?q=80&w=2982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Fruits"
                                layout="fill"
                                objectFit="cover"
                                className="object-cover mb-2 rounded-lg"
                            />
                        </div>
                        <p className="text-gray-600">
                            Elephants love fruits like bananas and melons. They’re known to raid orchards for these sweet delights!
                        </p>
                    </div>

                    <div className="bg-brown-100 p-4 rounded-lg shadow-lg ">
                        <h3 className="text-xl font-bold text-green-700 mb-2">🌳 Tree Bark</h3>
                        <div className='w-full h-60 relative overflow-hidden mb-4'>
                            <Image
                                src="https://images.unsplash.com/photo-1511282491208-d9b80e3deaee?q=80&w=2723&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tree Bark"
                                layout="fill"
                                objectFit="cover"
                                className="object-cover mb-2 rounded-lg"
                            />
                        </div>
                        <p className="text-gray-600">
                            Tree bark provides essential nutrients and roughage for digestion.
                        </p>
                    </div>

                    <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-blue-700 mb-2">🥔 Roots</h3>

                        <div className='w-full h-60 relative overflow-hidden mb-4'>
                            <Image
                                src="https://plus.unsplash.com/premium_photo-1664303873778-ca655bc2aa7f?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Roots"
                                layout="fill"
                                objectFit="cover"
                                className="object-cover mb-2 rounded-lg"
                            />
                        </div>
                        <p className="text-gray-600">
                            In dry seasons, elephants dig up roots for hydration and nutrition.
                        </p>
                    </div>
                </div>

                {/* Fun Fact Section */}
                <div className="mt-8 p-6 bg-indigo-100 rounded-lg">
                    <h3 className="text-2xl font-semibold text-indigo-700 mb-2">✨ Fun Fact!</h3>
                    <p className="text-gray-600">
                        Elephants can communicate through infrasound, which can travel over long distances. They’re not just big; they’re clever too!
                    </p>
                </div>
            </div>
            <DumboImage opacity={100} dumboClassName='flex justify-end' width={100} height={100}/>
        </div>
    );
}

