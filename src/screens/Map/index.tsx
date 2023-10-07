import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Header } from '@/components';
import { useMap } from './_hooks';

const Map = () => {
  const { mapViewRef } = useMap();

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Header />
        <MapView
          ref={mapViewRef}
          provider={PROVIDER_GOOGLE}
          showsMyLocationButton
          showsUserLocation
          initialRegion={{
            latitude: -6.1753924,
            longitude: 106.8271528,
            latitudeDelta: 0.0025,
            longitudeDelta: 0.0025,
          }}
          style={styles.container}
        />
      </View>
    </View>
  );
};

export default Map;
