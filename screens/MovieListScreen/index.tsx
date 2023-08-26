import React, {useEffect, useState} from 'react';
import {Text, FlatList} from 'react-native';
import {API_TOKEN} from '../../constants/API';
import styles from './styles';
import MovieCard from '../../components/MovieCard';

const MovieListScreen = (props: any) => {
  const [moviesList, setMoviesList] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch(
      `http://api.themoviedb.org/3/movie/popular?api_key=` + API_TOKEN,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    );

    const movies = await response.json();

    setMoviesList(movies.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return moviesList?.length > 0 ? (
    <FlatList
      data={moviesList}
      renderItem={({item}) => (
        <MovieCard
          item={item}
          navigation={props.navigation}
          navigatable={true}
        />
      )}
      numColumns={2}
      columnWrapperStyle={{justifyContent: 'space-between'}}
    />
  ) : (
    <Text style={styles.noMovieAvailable}>No Movies Available</Text>
  );
};

export default MovieListScreen;
