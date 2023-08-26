import {StyleSheet} from 'react-native';
import Layout from '../../constants/Layout';

const styles = StyleSheet.create({
  imageCardContainer: {
    width: Layout.window.width / 2,
    height: 300,
  },
  noMovieAvailable: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 24,
  },
});

export default styles;
