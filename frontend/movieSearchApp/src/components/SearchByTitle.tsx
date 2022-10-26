import { GET_MOVIES_BY_TITLE } from "../queries/getMovies"
import { useQuery } from "@apollo/client";
import { IMovie } from "../interfaces/IMovie";
import SearchBar from "./SearchBar";
import { MovieTableComp } from "./MovieTable";

interface Props {
  title: string;
  offset: number
  setTitle: (value: string) => void;
  setOffset: (value: number) => void;
  setCurrentPage: (value: number) => void;
  PAGE_SIZE: number;
  currentPage: number;
  loadedMoviesList: IMovie[]
}

function SearchByTitle(props: Props) {
  console.log(props.title)
  const { loading, error, data } = useQuery(GET_MOVIES_BY_TITLE, {
    variables: {
      searchString: props.title,
      options: {
        offset: props.currentPage * props.PAGE_SIZE,
        limit: props.PAGE_SIZE,
      }
    }
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (data) {
    console.log(data)
    data.findMovieByTitle.forEach((movie: IMovie) => {
      props.loadedMoviesList.push(movie);
    })
  }

  return (
    <div>
      <SearchBar title={props.title} setTitle={props.setTitle} />
      <MovieTableComp
        movieList={props.loadedMoviesList}
        offset={props.offset}
        setOffset={props.setOffset}
        currentPage={props.currentPage}
        setCurrentPage={props.setCurrentPage}
      />
    </div>
  );

}

export default SearchByTitle;