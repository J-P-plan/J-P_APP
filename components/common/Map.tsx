import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

interface Props {
  isRounded?: boolean;
}

export default function Map({ isRounded = false }: Props) {
  return (
    <>
      <MapView
        // provider={PROVIDER_GOOGLE}
        style={{
          ...StyleSheet.absoluteFillObject,
          borderRadius: isRounded ? 16 : 0,
        }}
        region={{
          latitude: 37.5519,
          longitude: 126.9918,
          latitudeDelta: 0.07,
          longitudeDelta: 0.1,
        }}
      />
    </>
  );
}
