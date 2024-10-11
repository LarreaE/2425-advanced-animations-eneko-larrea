import { API_KEY, GENRES } from "./config";

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;

export const getMovies = async () => {

    try {
        let response = await fetch(API_URL);
        let jsnon = await response.json();

        const movies = jsnon.results.map(
        ({
            id,
            original_title,
            poster_path,
            backdrop_path,
            vote_average,
            overview,
            release_date,
            genre_ids,
        }) => ({
            key: String(id),
            title: original_title,
            posterPath: `https://image.tmdb.org/t/p/w500${poster_path}`,
            backdropPath: `https://image.tmdb.org/t/p/w500${backdrop_path}`,
            rating: vote_average,
            description: overview,
            releaseDate: release_date,
            genres: genre_ids.map((id: string | number) => GENRES[id]),
        })
        );
    
        return movies
    } catch (error) {
        console.error(error);
    }
  }