import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: { flex: 1, alignItems: 'center' },
  introText: { width: wp(100) - 32, marginTop: 8 },
  welcome: { width: wp(100) - 32, marginTop: 16 },
});
