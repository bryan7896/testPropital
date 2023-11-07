import React, { useEffect } from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";
import PointMark from '../../../assets/pointMark.png';
import { MapProps } from "./Select.types";
import { realEstateLists } from "../../../utils/slices/generalSlice.types";
import CardGeneral from "../../atoms/cardGeneral/CardGeneral";
import { useNavigate } from "react-router";

const MapComponent: React.FC<MapProps> = ({ realEstateLists: list, style = { height: 400 } }) => {
  const [infoWindowOpen, setInfoWindowOpen] = React.useState<boolean>(false);
  const [infoWindowPosition, setInfoWindowPosition] = React.useState<realEstateLists | undefined>(undefined);

  const navigate = useNavigate();

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "",
  });

  if (loadError) return null; // Cambia "Error" a null
  if (!isLoaded) return null; // Cambia "Maps" a null

  const handleMarkerHover = (marker: realEstateLists) => {
    if (marker) {
      console.log(marker)
      setInfoWindowPosition(marker);
      setInfoWindowOpen(true);
    }
  };

  return (
    <GoogleMap
      mapContainerStyle={style}
      center={{ lat: list[0].lat + 0.01, lng: list[0].lng }}
      zoom={14}
    >
      {list.map((property: realEstateLists, i: number) => (
        <MarkerF key={`map-${i}`}
          position={{ lat: property.lat, lng: property.lng }}
          icon={PointMark}
          onMouseOver={() => handleMarkerHover(property)}
        />
      ))}
      {infoWindowOpen && (
        <InfoWindowF
          zIndex={2}
          options={{ maxWidth: 200 }}
          position={infoWindowPosition}
          
          onCloseClick={() => setInfoWindowOpen(false)}
        >
          <CardGeneral type="short" onClick={() => navigate('/details')} />
        </InfoWindowF>
      )}
    </GoogleMap>
  );
};

export default MapComponent;