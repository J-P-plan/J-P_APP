import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function Map() {
  return (
    <>
      <MapView
        // provider={PROVIDER_GOOGLE}
        style={{ ...StyleSheet.absoluteFillObject, borderRadius: 16 }}
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
