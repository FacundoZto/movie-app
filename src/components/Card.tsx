import React from 'react'
import { Movie } from "@/interfaces/movie"
import Link from 'next/link'
import Image from 'next/image'
import { FiThumbsUp } from 'react-icons/fi'

const Card = ({movie}: {movie: Movie}) => {
  return (
    <div className='group p-2 cursor-pointer transition-transform duration-500 hover:scale-105'>
      <Link href={`/movie/${movie.id}`}>
        <Image 
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} 
          alt={movie.title} 
          width={500} 
          height={400}
          className='h-52 object-cover object-center sm:rounded-t-lg group-hover:brightness-110 transition-brightness duration-300' />
      </Link>
      <div className='p-2'>
        <p className='line-clamp-2 font-normal text-sm'>{movie.overview}</p>
        <h2 className='text-lg font-bold truncate'>{movie.title || movie.name}</h2>
        <p className='flex items-center font-light text-sm'>
          {movie.release_date || movie.first_air_date}
          <FiThumbsUp className='h-5 mr-1 ml-3'/>
          {movie.vote_count}
        </p>
      </div>
    </div>
  )
}

export default Card