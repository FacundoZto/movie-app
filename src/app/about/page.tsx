import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col max-w-6xl mx-auto p-3 gap-3'>
      <h2 className='text-2xl font-semibold text-teal-500'>About</h2>
      <p>
        This is a movie database website that uses the themoviedb API to fetch movie data. 
        It is designed to provide you with a comprehensive database of
        movies from all around the world, along with the latest news, reviews,
        and trailers. The movie database is constantly updated with new
        releases, ensuring that you have access to the latest and greatest in
        the world of cinema. You can search for movies by title, director,
        actor, genre, or release date, making it easy to find the perfect movie
        for any occasion.
      </p>

      <p>
        This website was made with Next.js and deployed with Vercel.
        The API is used to fetch movie data from the <a href="https://www.themoviedb.org/" className='text-teal-500'>The Movie Database</a>.
        The technology used in the project was: <a href="https://nextjs.org/">Next.js</a>, <a href="https://www.typescriptlang.org/">Typescript</a> and <a href="https://tailwindcss.com/">Tailwind CSS</a>.
      </p>

      <p>
        Github: https://github.com/FacundoZto/movie-app
      </p>

    </div>
  )
}

export default About