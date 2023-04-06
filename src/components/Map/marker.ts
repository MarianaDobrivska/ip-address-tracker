import { Icon } from "leaflet";
import marker from "../../assets/icon-location.svg";

export const blackMarker = new Icon({
  iconUrl: marker,
  iconSize: [45, 55],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});
