import React from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";
import PointMark from '../../../assets/pointMark.png';
import { MapProps } from "./Map.types";
import { RealEstateLists } from "../../../utils/slices/generalSlice.types";
import CardGeneral from "../cardGeneral/CardGeneral";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setDetails } from "../../../utils/slices/generalSlice";

const MapComponent: React.FC<MapProps> = ({
  realEstateLists,
  style = { height: 400, padding: 0 },
  handleMarkerHover,
  infoWindowOpen,
  infoWindowPosition,
  setInfoWindowOpen
}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "",
  });

  if (loadError) return null; // Cambia "Error" a null
  if (!isLoaded) return null; // Cambia "Maps" a null

  const details = (property: RealEstateLists) => {
    dispatch(setDetails(property));
    navigate('/details');
  }

  return (
    <GoogleMap
      mapContainerStyle={style}
      center={{ lat: realEstateLists[0].lat + 0.01, lng: realEstateLists[0].lng }}
      zoom={13}
    >
      {realEstateLists.map((property: RealEstateLists, i: number) => (
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
          <CardGeneral type="short" onClick={() => {infoWindowPosition && details(infoWindowPosition)}} realEstate={infoWindowPosition} />
        </InfoWindowF>
      )}
    </GoogleMap>
  );
};

export default MapComponent;
