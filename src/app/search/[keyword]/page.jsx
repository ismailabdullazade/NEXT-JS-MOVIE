import Movies from '@/app/components/Movies';
import React from 'react'

const Page = async ({params}) => {
    const keyword = params.keyword;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=52b7aaf2076ea011bb2ebdef1295e7fc&query=${keyword}&language=en-US&include_adult=false`);
    const data = await res.json()
  return (
    <div>
        {
            !data?.results ? 
            <div>Searched item is incorrect</div> :
            <div className="flex justify-center items-center flex-wrap gap-3">{
                data?.results?.map((props,i)=>(
                    <Movies key={i} props={props}/>   
                ))
            }
              
            </div>
               
        }
    </div>
  )
}

export default Page