import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { defaultColors } from '@/themes';

const statusBarHeight = getStatusBarHeight();

export const styles = StyleSheet.create({
  img: {
    marginLeft: 16,
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
  },
  header: {
    width: wp(100),
    height: 55,
    backgroundColor: defaultColors.white,
    marginTop: statusBarHeight,
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  container: {
    width: wp(100),
    height: statusBarHeight + 55,
    backgroundColor: defaultColors.white,
    elevation: 3,
  },
});
