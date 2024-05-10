import { Movie } from "@/interfaces/movie"
import Card from "./Card"
const Cards = ({results}: {results: Movie[]}) => {
  return (
    <section className="sm:grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-7xl mx-auto p-4">
      {results?.map((movie: Movie) => (
        <Card key={movie.id} movie={movie}/>
      ))}
    </section>
  )
}

export default Cards