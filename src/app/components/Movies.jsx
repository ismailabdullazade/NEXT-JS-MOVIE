"use client"
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import React from 'react'

const Movies = ({props}) => {
  const router = useRouter();
  console.log(props);
  return (
    <div onClick={()=>router.push(`/movie/${props?.id}`)} className='min-w-[470px] relative cursor-pointer imgContainer'>
        <Image width={450} height={300} src={`https://image.tmdb.org/t/p/original/${props?.backdrop_path || props?.poster_path}`} />
        <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
          <div className="text-2xl text-white font-bold">{props.title}</div>
          <div className='text-white'>{props.release_date}-{props.vote_average}</div>
        </div>
    </div>
  )
}

export default Movies