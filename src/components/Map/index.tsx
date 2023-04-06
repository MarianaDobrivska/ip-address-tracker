import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { IPDataInterface } from "../../types/interface";
import { blackMarker } from "./marker";
import "leaflet/dist/leaflet.css";
import style from "./style.module.scss";

export const Map = ({ IPData }: IPDataInterface) => {
  const {
    location: { lat, lng, country, city, region },
  } = IPData;

  const position = { lat, lng };
  return (
    <div className={style.mapWrapper}>
      <MapContainer center={position} zoom={13} className={style.mapContainer}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; OpenStreetMap contributors"
        />
        <Marker position={position} icon={blackMarker}>
          <Popup>
            {city}, {region}, {country}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
