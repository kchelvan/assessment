import React, {ComponentProps} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styles from './styles';

interface MovieCardProps extends ComponentProps<'input'> {
  item: any;
  navigation: any;
  navigatable: boolean;
  width?: number;
  height?: number;
  containerStyles?: any;
}

const MovieCard = ({
  item,
  navigation,
  navigatable,
  width,
  height,
  containerStyles,
}: MovieCardProps) => {
  return (
    <TouchableOpacity
      disabled={!navigatable}
      onPress={() =>
        navigation?.navigate('MovieDetailScreen', {
          movieDetails: {...item},
        })
      }
      activeOpacity={0.5}>
      <Image
        style={[
          styles.imageCardContainer,
          containerStyles || {},
          !!width || !!height ? {width: width, height: height} : {},
        ]}
        source={{
          uri: 'https://image.tmdb.org/t/p/w185' + item.poster_path,
        }}
      />
    </TouchableOpacity>
  );
};

export default MovieCard;
