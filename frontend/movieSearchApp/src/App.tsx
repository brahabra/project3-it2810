import "./style/App.css";
import { useQuery, gql } from "@apollo/client";

function App() {
  const GET_MOVIES = gql`
    query getMovies {
      movies {
        Poster_Link
        Series_Title
        IMDB_Rating
      }
    }
  `;

  function DisplayLocations() {
    const { loading, error, data } = useQuery(GET_MOVIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return data.movies.map(
      ({
        Poster_Link,
        Series_Title,
        IMDB_Rating,
      }: {
        Poster_Link: string;
        Series_Title: string;
        IMDB_Rating: string;
      }) => (
        <div>
          <h3>{Series_Title}</h3>
          {/* <img width="450" height="450" alt="location-reference" src={`${Poster_Link.substring(0, 116)}`} /> */}
          <img
            width="50"
            height="50"
            alt="location-reference"
            src={`${Poster_Link}`}
          />
          <br />
          <p>IMDB Rating: {IMDB_Rating}</p>
          <br />
        </div>
      )
    );
  }

  return (
    <div className="App">
      <h3>Movies</h3>
      <DisplayLocations />
    </div>
  );
}

export default App;
