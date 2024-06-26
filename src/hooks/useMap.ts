import { useEffect, useState, useRef, MutableRefObject } from 'react';
import { TileLayer, Map } from 'leaflet';
import { MapOptions } from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {

      const instance = new Map(mapRef.current, {
        center: {
          lat: MapOptions.CITY_LOCATION.lat,
          lng: MapOptions.CITY_LOCATION.lng,
        },
        zoom: MapOptions.CITY_LOCATION.zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);
      setMap(instance);
    }

    isRenderedRef.current = true;
  }, [mapRef]);

  return map;
}

export default useMap;
