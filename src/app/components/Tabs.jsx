"use client"
import React from 'react'
import Link from 'next/link'
import {useSearchParams} from "next/navigation"

const Tabs = () => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
    const tabs = [
        {
            name:"Most famous",
            url:"popular"
        },
        {
            name:"The latest",
            url:"latest"
        },
        {
            name:"Soon",
            url:"upcoming"
        },
    ]
  return (
    <div className='p-5 my-3 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7'>
        {
            tabs.map((tab,i)=>(
                <Link key={i} href={`/?genre=${tab.url}`} className={`cursor-pointer hover:opacity-75 transition-opacity ${tab.url === genre ? "underline underline-offset-8 text-amber-600": ""}`}>{tab.name}</Link>
            ))
        }
    </div>
  )
}

export default Tabs