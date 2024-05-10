import React from 'react'
import NavBarItem from './NavBarItems'

const NavBar = () => {
  return (
    <div className='flex gap-8 p-5 lg:text-lg justify-center dark:bg-gray-600 font-semibold'>
      <NavBarItem title="Trending" param="fetchTrending"/>
      <NavBarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}

export default NavBar