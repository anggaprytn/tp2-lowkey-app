import React, { memo } from 'react';
import { View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text } from '@/components';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Header = () => {
  const name = useSelector(({ dataSlice }: any) => dataSlice.name);

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text
            type={'medium'}
            size={19}
            numberOfLines={1}
            align="right"
            style={{ width: wp(100) - 32 - 40 - 16 }}>
            {name}
          </Text>
          <Image
            source={require('@/assets/images/img_propic_default.webp')}
            style={styles.img}
          />
        </View>
      </View>
    </>
  );
};

export default memo(Header);
