import { LatLngTuple } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';

export default function Map() {
  // Required for Gatsby's build process
  if (typeof window === 'undefined') return null;

  const position: LatLngTuple = [43.65, -110.83];

  return (
    <main>
      <h1>Tyler's Map</h1>
      <MapContainer center={position} zoom={12} style={{ height: '80vh' }}>
        <TileLayer
          attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
          url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </main>
  );
}
