import React, { useEffect } from "react";
import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { get } from "@/app/helper/fecth/get";
import L, { LatLng } from "leaflet";
import Place from "@/app/interfaces/Place";
import { TfiTarget } from "react-icons/tfi";
import { MdOutlineDirections } from "react-icons/md";
import { position } from "@chakra-ui/react";

const customIcon = new L.Icon({
  iconUrl: "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function Map() {
  const accessToken: string = "pk.68aa71aa1e47fd27d196d84bd2428b61";
  const [location, setLocation] = useState<L.LatLng>();
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Place[]>();
  const [pos, setPos] = useState<L.LatLng>();
  const [hide, setHide] = useState(true);

  const handleGetCoordinates = async () => {
    const position = await getCoordinates();
    if (position) {
      const { latitude, longitude } = position;
      setLocation(L.latLng(latitude, longitude));
    }
    console.log(location);
  };

  const findPlace = async () => {
    try {
      const autocomplete: [] = await get(
        `https://api.locationiq.com/v1/autocomplete?key=${accessToken}&q=${query}&limit=5&dedupe=1`
      );
      setResult(Array.isArray(autocomplete) ? autocomplete : []);
    } catch (error) {
      setError("Failed to fetch places");
    }
  };

  useEffect(() => {
    setHide(result?.length == 0);
  }, [result]);

  const clickPlace = (lat: number, lngt: number) => {
    const position = new L.LatLng(lat, lngt);
    setPos(position);
    console.log(pos);
  };

  return (
    <>
      <div className=" absolute z-30 right-2 bottom-20  space-x-3">
        <button
          className="p-2 border border-gray-500 rounded-md bg-white"
          onClick={handleGetCoordinates}
        >
          <TfiTarget className="text-3xl font-bold text-black text-center" />
        </button>
        <button
          className="p-2 border border-gray-500 rounded-md bg-white"
          onClick={handleGetCoordinates}
        >
          <MdOutlineDirections className="text-3xl font-bold text-black text-center" />
        </button>
      </div>
      <div className=" absolute z-30 right-2 top-4  w-[300px]">
        <input
          type="text"
          placeholder="search a place here"
          className=" bg-white px-3 py-3 border border-gray-500 outline-none text-sm w-full rounded-sm "
          onChange={(e) => {
            setQuery(e.target.value);
            setTimeout(() => {
              findPlace();
            }, 1500);
          }}
        />

        <div className="bg-white mt-2 text-sm w-full">
          <ul
            className={` ${
              query.length > 0 ? "block" : "hidden"
            } px-3 py-2 space-y-2`}
          >
            {result?.length === 0 ? (
              <p className="font-semibold text-center">no result found</p>
            ) : (
              result?.map((el, index) => (
                <li
                  key={index}
                  className="hover:bg-slate-100 cursor-pointer px-2 py-2 "
                  onClick={() => clickPlace(el.lat, el.lon)}
                >
                  <p className="font-bold text-gray-600">{el.address.name}</p>
                  <p>{el.display_name}</p>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      <MapContainer
        center={[-18.914371, 47.510706]}
        zoom={15}
        scrollWheelZoom={false}
        className="w-full h-[90vh] z-0"
      >
        <TileLayer
          attribution='&amp;copy <a href="https://locationiq.com/attribution">LocationIQ</a>'
          url={`https://{s}-tiles.locationiq.com/v2/obk/r/{z}/{x}/{y}.png?key=${accessToken}`}
        />
        {location && (
          <Marker position={location} icon={customIcon} draggable={true}>
            <Popup>You are here</Popup>
          </Marker>
        )}
        {pos && <LocationMarker lat={-18.8792} lng={47.5079}></LocationMarker>}
        <Marker position={new L.LatLng(-22.400, 46.1167)} />
        <Marker position={new L.LatLng(-18.8792, 47.5079)} />
        <Marker position={new L.LatLng(-25.0314, 46.1167)} />
        <Marker position={new L.LatLng(-18.8792, 47.5079)} />
      </MapContainer>
    </>
  );
}

function LocationMarker({ lat, lng }: { lat: number; lng: number }) {
  const position = new L.LatLng(lat, lng);
  const map = useMap();
  map.setView(position);
  map.flyTo(position, map.getZoom());
  return (
    <Marker position={position} icon={customIcon} draggable={true}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export async function getCoordinates() {
  try {
    const position = await new Promise<{
      latitude: number;
      longitude: number;
    }>((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(`Erreur de localisation : ${error.message}`);
          }
        );
      } else {
        reject("La géolocalisation n'est pas supportée par ce navigateur.");
      }
    });
    return position;
  } catch (error) {
    console.error(error);
    return null;
  }
}
