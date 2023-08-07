import React from 'react'
import Movies from './components/Movies';

const Page = async ({searchParams}) => {
  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre?"movie/"+searchParams.genre:"trending/all/day"}?api_key=52b7aaf2076ea011bb2ebdef1295e7fc&language=en-US&page=1 {next:{revalidate:10000}}`)

  const data = await res.json()
  return (
    <div>
      {
        data?.results?.map((dt,i)=>(
          <Movies key={i} props={dt}/>
        ))
      }
    </div>
  )
}

export default Page