import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";

export const Map = () => {
  const selectedUsers = useSelector((state) => state.selectedUsers.selected);

  console.log(selectedUsers);

  const markers = Object.keys(selectedUsers).map((userId) => {
    const user = selectedUsers[userId];

    if (!user) {
      return null;
    }

    const lat = user?.address?.geo?.lat ?? 0;
    const lng = user?.address?.geo?.lng ?? 0;
    const name = user?.name ?? "Без имени";

    return (
      <Marker position={[lat, lng]} key={user.id}>
        <Popup>{name}</Popup>
      </Marker>
    );
  });

  console.log(markers);

  return (
    <MapContainer
      center={[0, 0]}
      zoom={1}
      scrollWheelZoom={false}
      className="leaflet"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers}
    </MapContainer>
  );
};
