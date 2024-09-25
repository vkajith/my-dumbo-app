import React from 'react'
import Image from 'next/image';

type Props = {
    opacity: number;
    dumboClassName?: string
    width?: number;
    height?: number;
}

const DumboImage = ({opacity,dumboClassName, width, height}: Props) => {
  return (
    <div className={dumboClassName}>
        <Image
        src="/dumbo-small.png" // Relative path from public directory
        alt="Dumbo"
        width={width || 300} // Set desired width
        height={height || 500} // Set desired height
        className={`rounded opacity-${opacity}`} // Optional: add classes for styling
      />
    </div>
  )
}

export default DumboImage
