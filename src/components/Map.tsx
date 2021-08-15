import { LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Box } from './Box';

type PropsType = {
  center: LatLngTuple;
  zoom?: number;
  height?: string;
};

export function Map({ center, zoom = 12, height = '50rem' }: PropsType) {
  // Required for Gatsby's build process
  const domIsAvailable = () =>
    typeof window !== 'undefined' && !!window.document && !!window.document.createElement;

  if (!domIsAvailable()) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <h1>Tyler's Map</h1>
      <MapContainer center={center} zoom={zoom} style={{ height }}>
        <TileLayer
          attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
          url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Box>
  );
}
