import Cards from "@/components/Cards";

const API_KEY = process.env.API_KEY;
const SearchMovie = async ({params}: {params: {movie: string}}) => {
  const {movie} = params;
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}&language=en-US&page=1`)
  const data = await res.json();
  const results = data.results

  return (
    <section>
      {
        results && results.length === 0 ? 
        <h1 className="text-center font-bold text-3xl pt-6">No results found</h1> :
        <Cards results={results}/>
      }
    </section>
  )
}

export default SearchMovie