import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ breakpoints }) => ({
  leaflet: {
    width: "100%",
    height: 400,
    [breakpoints.down("sm")]: {
      height: 300,
    },
  },
}));

export const Map = () => {
  const selectedUsers = useSelector((state) => state.selectedUsers.selected);
  const classes = useStyles();

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

  return (
    <MapContainer
      center={[0, 0]}
      zoom={1}
      scrollWheelZoom={false}
      className={classes.leaflet}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers}
    </MapContainer>
  );
};
