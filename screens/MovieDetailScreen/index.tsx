import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import MovieCard from '../../components/MovieCard';

const MovieDetailScreen = (props: any) => {
  const {movieDetails} = props?.route?.params;

  return (
    <ScrollView>
      <View style={styles.headerTitleContainer}>
        <Text style={styles.movieTitleText}>
          {movieDetails?.original_title}
        </Text>
      </View>
      <View style={styles.movieDetailsContainer}>
        <MovieCard
          item={movieDetails}
          navigation={props.navigation}
          navigatable={false}
          width={115}
          height={175}
          containerStyles={{
            marginRight: 24,
          }}
        />
        <View style={styles.movieInfoCard}>
          <View>
            <Text style={styles.movieReleaseDateText}>
              {movieDetails?.release_date?.split('-')[0]}
            </Text>
            <Text style={styles.movieRuntimeText}>120 mins</Text>
          </View>
          <View>
            <Text style={styles.movieRatingText}>
              {movieDetails?.vote_average}/10
            </Text>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.addFavouriteButton}>
              <Text style={styles.addFavouriteText}>Add to Favorite</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.movieDetailsText}>{movieDetails?.overview}</Text>
    </ScrollView>
  );
};

export default MovieDetailScreen;
