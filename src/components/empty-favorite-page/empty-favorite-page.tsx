import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import './modul-style.css';

export default function EmptyFavoritePage() {
  return (
    <div className='empty'>
      <div className='empty__wrapper'>
        <h2 className='empty__title'>Нет избранных меропритяий</h2>
        <Link className='empty__link' to={AppRoute.INDEX_PAGE}>Добавить</Link>
      </div>
    </div>
  );
}
