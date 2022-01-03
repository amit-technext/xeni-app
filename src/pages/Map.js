/* eslint-disable @typescript-eslint/explicit-function-return-type */
// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer } from 'react-leaflet';

// import 'leaflet/dist/leaflet.css';

// import L from 'leaflet';

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: iconC,
//   iconUrl: iconC,
//   shadowUrl: null
// });

// import { hotelSearchResult as data } from '../data/b2c-desktop/hotelSearchData.js';

// const Maps = () => {
//   const position = [39.5, -98.35];

//   // const fillRedOptions = { fillColor: 'red' };
//   // const greenOptions = { color: 'green', fillColor: 'green' };
//   // const fillBlueOptions = { fillColor: 'blue' };
//   // const purpleOptions = { color: 'purple' };

//   const [map, setMap] = useState(null);

//   // console.log(map);

//   useEffect(() => {
//     if (!map) return;

//     const parksGeoJson = new L.GeoJSON(data, {
//       onEachFeature: (feature = {}, layer) => {
//         const { properties = {} } = feature;
//         const { Name } = properties;

//         if (!Name) return;

//         layer.bindPopup(`<p>${Name}</p>`);
//       }
//     });

//     console.log(parksGeoJson);
//     // console.log(data);

//     parksGeoJson.addTo(map);
//   }, [map]);

//   return (
//     <div className="my-3">
//       <h1>React Leaflet</h1>

//       <MapContainer
//         whenCreated={setMap}
//         center={position}
//         zoom={2}
//         scrollWheelZoom={false}
//         style={{ height: '100vh', width: '100%' }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//       </MapContainer>
//     </div>
//   );
// };

// export default Maps;

import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import { Map, TileLayer } from 'react-leaflet'
import { data } from '../data/national-parks.geojson.js'
import iconC from '../assets/icon/map-marker-solid.svg'
// import './App.css';
import 'leaflet/dist/leaflet.css'

// import nationalParks from './national-parks.json';

// delete L.Icon.Default.prototype._getIconUrl;

// Importing images from locally stored assets to address a bug
// in CodeSandbox: https://github.com/codesandbox/codesandbox-client/issues/3845

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('./images/marker-icon-2x.png'),
//   iconUrl: require('./images/marker-icon.png'),
//   shadowUrl: require('./images/marker-shadow.png')
// });

// When importing into your own app outside of CodeSandbox, you can import directly
// from the leaflet package like below
//
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
	iconRetinaUrl: iconC,
	iconUrl: iconC,
	shadowUrl: null
})
const App = function App() {
	const mapRef = useRef()

	useEffect(() => {
		const { current = {} } = mapRef
		const { leafletElement: map } = current

		if (!map) return

		const parksGeoJson = new L.GeoJSON(data, {
			// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
			// eslint-disable-next-line default-param-last
			onEachFeature: (feature = {}, layer) => {
				const { properties = {} } = feature
				const { Name } = properties

				if (!Name) return

				layer.bindPopup(`<p>${Name}</p>`)
			}
		})

		parksGeoJson.addTo(map)
	}, [])

	return (
		<div className='App'>
			<Map
				style={{ height: '100vh', width: '100%' }}
				ref={mapRef}
				center={[39.5, -98.35]}
				zoom={4}
			>
				<TileLayer
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
			</Map>
		</div>
	)
}

export default App
