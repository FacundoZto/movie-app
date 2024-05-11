import React from 'react'
import NavBarItem from './NavBarItems'
import { Suspense } from "react";

const NavBar = () => {
  return (
    <div className='flex gap-8 p-5 lg:text-lg justify-center dark:bg-zinc-700 font-semibold'>
      <Suspense>
        <NavBarItem title="Trending" param="fetchTrending"/>
        <NavBarItem title="Top Rated" param="fetchTopRated"/>
      </Suspense>
    </div>
  )
}

export default NavBar