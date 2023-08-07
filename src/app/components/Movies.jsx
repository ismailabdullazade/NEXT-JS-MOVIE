"use client"
import Image from 'next/image';
import React from 'react'

const Movies = ({props}) => {
  return (
    <div className='w-[400px] h-[300]'>
        <Image width={400} height={300} src={`https://image.tmdb.org/t/p/original/${props?.backdrop_path || props?.poster_path}`} />
    </div>
  )
}

export default Movies