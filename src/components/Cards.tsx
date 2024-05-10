import { Movie } from "@/interfaces/movie"
const Cards = ({results}: {results: Movie[]}) => {
  return (
    <div>
      {results?.map(movie => (
        <div>
          <h2>{movie.original_title}</h2>
        </div>
      ))}
    </div>
  )
}

export default Cards