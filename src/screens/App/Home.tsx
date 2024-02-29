import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

const HomeScreen = () => {
  const [location, setLocation] = useState<Location.LocationObject>(null);

  useEffect(() => {
    (async () => {
      try {
        console.log({ hi: 'trying' });
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission to access location was denied');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (err) {
        console.log({ err });
      }
    })();
  }, []);

  console.log({ location });

  return (
    <MapView
      mapType='hybrid'
      style={{
        height: '100%',
        width: '100%',
      }}
      initialRegion={{
        latitude: -23.7656962,
        longitude: -46.6895046,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      showsUserLocation
      onPress={(e) => console.log({ coordinate: e.nativeEvent.coordinate })}
      showsMyLocationButton={false}
      showsPointsOfInterest={false}
      showsIndoorLevelPicker={false}
    >
      <Marker
        coordinate={{ latitude: -23.7309534, longitude: -46.6966934 }}
        title={'Título do Marcador'}
        description={'Descrição do Marcador'}
      />
    </MapView>
  );
};

export default HomeScreen;
