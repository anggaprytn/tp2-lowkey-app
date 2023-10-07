import React, { useMemo } from 'react';
import { View } from 'react-native';
import { Text, Header } from '@/components';
import LottieView from 'lottie-react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styles } from './styles';

const Home = () => {
  const renderText = useMemo(() => {
    return (
      <View style={styles.introText}>
        <Text type="regular" size={18}>
          Apa yang bisa Anda lakukan?
          {'\n'}
          {'\n'}
          <Text type="semibold" size={18}>
            📝 Isi Data Diri
          </Text>
          {'\n'}Tambahkan dan kelola informasi pribadi Anda untuk pengalaman
          yang lebih personalisasi.
          {'\n'}
          {'\n'}
          <Text type="semibold" size={18}>
            🗺️ Google Maps Integration
          </Text>
          {'\n'}Temukan dan simpan lokasi penting dengan mudah, langsung dari
          aplikasi ini.
        </Text>
      </View>
    );
  }, []);

  const renderLottie = useMemo(() => {
    return (
      <LottieView
        style={{ width: wp(80), height: wp(60) }}
        autoPlay
        loop
        resizeMode={'contain'}
        source={require('@/assets/lottie/welcome.json')}
      />
    );
  }, []);

  const renderWelcome = useMemo(() => {
    return (
      <View style={styles.welcome}>
        <Text type="medium" size={18}>
          Selamat datang di Tugas Personal 2! 🌟
        </Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header />
        {renderWelcome}
        {renderLottie}
        {renderText}
      </View>
    </View>
  );
};

export default Home;
