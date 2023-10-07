import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { defaultColors } from '@/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: { flex: 1, backgroundColor: defaultColors.white },
  title: {
    width: wp(100) - 32,
    marginHorizontal: 16,
    marginBottom: 16,
    marginTop: 16,
  },
  btn: {
    borderRadius: 8,
    height: 50,
    width: wp(100) - 32,
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: defaultColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputHobby: {
    width: wp(100) - 32,
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 8,
    fontFamily: 'TTCommons-Regular',
  },
  inputName: {
    width: wp(100) - 32,
    marginHorizontal: 16,
    borderRadius: 8,
    fontFamily: 'TTCommons-Regular',
  },
});
