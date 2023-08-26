import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';

const styles = StyleSheet.create({
  headerTitleContainer: {backgroundColor: Colors.Primary.main, padding: 16},
  movieTitleText: {
    fontSize: 20,
    color: Colors.Primary.white,
    fontWeight: '700',
  },
  movieDetailsContainer: {
    flexDirection: 'row',
    margin: 24,
  },
  movieDetailsText: {
    fontSize: 14,
    color: Colors.Primary.textColor,
    fontWeight: '700',
    lineHeight: 24,
    paddingHorizontal: 24,
  },
  movieImageCard: {
    width: 115,
    height: 175,
    marginRight: 24,
  },
  movieInfoCard: {
    flex: 1,
    justifyContent: 'space-between',
  },
  movieReleaseDateText: {
    fontSize: 20,
    color: Colors.Primary.background,
  },
  movieRatingText: {
    fontSize: 13,
    color: Colors.Primary.background,
    fontWeight: '700',
  },
  addFavouriteButton: {
    paddingVertical: 16,
    backgroundColor: Colors.Primary.main,
    marginTop: 12,
  },
  addFavouriteText: {
    fontSize: 13,
    color: Colors.Primary.white,
    fontWeight: '700',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
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
