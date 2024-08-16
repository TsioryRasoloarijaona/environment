interface BoundingBox {
  minLat: string;
  maxLat: string;
  minLon: string;
  maxLon: string;
}

interface Address {
  name: string;
  suburb?: string;
  neighbourhood?: string;
  road?: string;
  city: string;
  state: string;
  postcode?: string;
  country: string;
  country_code: string;
}

export default interface Place {
  place_id: string;
  osm_id: string;
  osm_type: string;
  licence: string;
  lat: number;
  lon: number;
  boundingbox: BoundingBox;
  class: string;
  type: string;
  display_name: string;
  display_place: string;
  display_address: string;
  address: Address;
}



