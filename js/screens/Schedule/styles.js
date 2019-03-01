import { StyleSheet, Dimensions } from 'react-native';
import {
  Container,
  Colors,
  Font,
  FontSize,
  Divider
} from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    // ...Container
  },
  divider: {
    ...Divider
  },
  event: {
    margin: 15,
    width: Dimensions.get('window').width * 0.9
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: Font.reg,
    marginBottom: 4
  },
  location: {
    color: Colors.mediumGrey,
    fontWeight: 'bold',
    fontFamily: Font.reg
  },
  time: {
    backgroundColor: Colors.lightGrey,
    fontWeight: 'bold',
    fontFamily: Font.reg,

    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15
  }
});

export default styles;
