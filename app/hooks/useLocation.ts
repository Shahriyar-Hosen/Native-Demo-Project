import Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';

interface Location {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
}

const useLocation = () => {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
    error: null,
  });

  const getLocation = async () => {
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (status === 'granted') {
      Geolocation.getCurrentPosition(
        position => {
          const latitude = Number(JSON.stringify(position.coords.latitude));
          const longitude = Number(JSON.stringify(position.coords.longitude));

          setLocation({
            latitude,
            longitude,
            error: null,
          });
        },
        error =>
          setLocation({
            latitude: null,
            longitude: null,
            error: error.message,
          }),
      );
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
export default useLocation;
