// components/ImageGallery.js

"use client";
import React from 'react';
import { useState } from "react";
import Image from "next/image";

const images = [
    { src: "/bbe9b7d9-0e05-46cb-875e-2c929c646a84.jpeg" },
    { src: "/c80fe925-6ed2-4521-9554-3a11b4023697.jpeg" },
    { src: "/felix-m-dorn-nizP9Lwl2rM-unsplash.jpg" },
    { src: "/marcus-lofvenberg-FgW0M1ybeh8-unsplash.jpg" },
    { src: "/tobin-rogers-Ca9cHrLqYj0-unsplash.jpg" },
    { src: "/hu-chen--9JAqVxg3vs-unsplash.jpg" }
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<{ src: string }>({ src: '' });

    return (
        <div className="container mx-auto p-4">
            {/* Image Grid */}
            <div className="text-4xl m-8">
                🌟🐘 Dumbo Gallery
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="cursor-pointer hover:shadow-xl hover:scale-105"
                        onClick={() => setSelectedImage(image)}
                    >
                        <Image
                            src={image.src}
                            alt={`Gallery Image ${index + 1}`}
                            width={800}
                            height={800}
                            className="w-full h-48 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                ))}
            </div>
            <div className='flex justify-end'>
                <div>
                    <Image
                        src={'/dumbo-small.png'}
                        alt={`Gallery Image`}
                        width={200}
                        height={200}
                        className="object-cover"
                    />
                    <div className='font-bold drop-shadow-lg tracking-widest'>
                        Check out my Photo lab!
                    </div>
                </div>

            </div>

            {/* Modal */}
            {selectedImage && selectedImage.src && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
                    onClick={() => setSelectedImage({ src: '' })}
                >
                    <div className="relative">
                        <button
                            className="absolute top-2 right-2 text-white text-3xl"
                            onClick={() => setSelectedImage({ src: '' })}
                        >
                            &times;
                        </button>
                        <Image
                            src={selectedImage.src}
                            alt="Selected"
                            width={800}
                            height={800}
                            className="max-w-full max-h-screen rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
