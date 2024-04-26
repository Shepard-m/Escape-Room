import leaflet, { marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { memo, useEffect, useRef } from 'react';
import { IconPinMap, MapOptions } from '../const';
import useMap from '../hooks/useMap';
import { TBooking } from '../types/booking';
import { useAppDispatch } from '../hooks/indexStore';
import { bookingActions } from '../store/slice/booking/booking';

type MapProps = {
  quests: TBooking[];
  selectedQuestId: string;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: IconPinMap.DEFAULT,
  iconSize: [23, 42],
});

const activeCustomIcon = leaflet.icon({
  iconUrl: IconPinMap.ACTIVE,
  iconSize: [23, 42],
});

function Map({ quests, selectedQuestId }: MapProps): JSX.Element {
  const dispatch = useAppDispatch();
  const mapRef = useRef(null);
  const map = useMap(mapRef);
  useEffect(() => {
    if (map) {
      const markerLayer = leaflet.layerGroup().addTo(map);
      quests.forEach((quest) => {
        const point = leaflet.marker({
          lat: quest.location.coords[0],
          lng: quest.location.coords[1],
        }, {
          icon: selectedQuestId === quest.id ?
            activeCustomIcon :
            defaultCustomIcon,
        },).addTo(markerLayer);

        point.on('click', () => {
          dispatch(bookingActions.selectBooking({ booking: quest.id }));
        });
      });

      return () => {
        map.removeLayer(markerLayer);
        mapRef.current = null;
      };
    }
  }, [map, quests, selectedQuestId]);


  return (
    <div
      ref={mapRef}
      style={{ width: MapOptions.WIDTH, height: MapOptions.HEIGHT }}
      data-testid={'map'}
    >

    </div>
  );
}

export default memo(Map);
