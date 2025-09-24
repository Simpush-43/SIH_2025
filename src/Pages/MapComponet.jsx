import React from 'react'
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet'
import L from 'leaflet'
// icon creaton
const IconCreation = (color)=>{
return new L.Icon({
  iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
})
}
const icons = {
  Pending: IconCreation('red'),
  'In Progress': IconCreation('yellow'),
  Completed: IconCreation('green')
}
const MapComponet = ({issues}) => {
    // Default center for Indore
  const mapCenter = [22.7196, 75.8577]
  return (
<>
      <MapContainer center={mapCenter} zoom={14} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {issues.map(issue => (
        <Marker 
          key={issue.id} 
          position={[issue.lat, issue.lng]} 
          icon={icons[issue.status] || createIcon('grey')}
        >
          <Popup>
            <strong>{issue.title}</strong><br />
            {issue.description}<br />
            Status: {issue.status}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </>
  )
}

export default MapComponet
