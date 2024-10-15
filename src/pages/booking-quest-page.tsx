import { useEffect } from 'react';
import Container from '../components/container';
import { MainPageClass } from '../const';
import { useAppDispatch, useAppSelector } from '../hooks/indexStore';
import { bookingSelectors } from '../store/slice/booking/booking';
import { fetchBookingQuest, fetchQuest } from '../store/api-action';
import { useParams } from 'react-router-dom';
import { questSelectors } from '../store/slice/quest/quest';
import Map from '../components/map';
import FormBooking from '../components/form-booking';
import { TBooking } from '../types/booking';
import { TQuest } from '../types/quest';

export default function BookingQuestPage() {
  const dispatch = useAppDispatch();
  const selectors = useAppSelector;

  const { bookingId } = useParams();

  useEffect(() => {
    Promise.all([
      dispatch(fetchBookingQuest(bookingId as string)),
      dispatch(fetchQuest(bookingId as string)),
    ]);
  }, []);

  const questsBooking = selectors(bookingSelectors.bookings) as TBooking[];
  const selectQuestBooking = selectors(bookingSelectors.selectQuestBooking);
  const quest = selectors(questSelectors.currentQuest) as TQuest;
  if (questsBooking === undefined || quest === undefined) {
    return <span></span>;
  }
  const currentQuest = questsBooking.find((item) => item.id === selectQuestBooking) as TBooking;

  return (
    <Container mainClass={MainPageClass.BOOKING}>
      <div>
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" />
            <img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" width={1366} height={768} alt={''} />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">{quest.title}</p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <div className="map__container">
                  <Map quests={questsBooking} selectedQuestId={selectQuestBooking as string} />
                </div>
              </div>
              <p className="booking-map__address">{`Вы выбрали:${currentQuest.location.address}`}</p>
            </div>
          </div>
          <FormBooking currentQuest={currentQuest} countPeople={quest.peopleMinMax} questId={quest.id} />
        </div>
      </div>

    </Container>
  );
}
