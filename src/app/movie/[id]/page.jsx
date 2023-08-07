import React from 'react'
import Image from 'next/image';

const getMovie = async(id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=52b7aaf2076ea011bb2ebdef1295e7fc`);
    return await res.json();
}

const Page = async ({params}) => {
    const id = params.id;
    const movieDetail = await getMovie(id);

    console.log(movieDetail,"movieDetail");
  return (
    <div className='relative p-7 min-h-screen'>
        <Image style={{objectFit:"cover"}} fill src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`}/>
        <div className="absolute">
            <div className="text-4xl text-white font-bold my-3">{movieDetail?.title}</div>
            <div className="w-1/2 text-white">{movieDetail?.overview}</div>
            <div className="my-3 text-white">{movieDetail?.release_date}-{movieDetail?.vote_average}</div>
            <div className="my-2 border text-white w-32 hover:bg-black hover:text-white p-2 rounded-md text-center text-lg cursor-pointer">Trial</div>
        </div>
    </div>
  )
}

export default Page