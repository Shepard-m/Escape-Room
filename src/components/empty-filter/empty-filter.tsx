import './modul-style.css';

export default function EmptyFilter() {
  return (
    <div className='empty'>
      <div className='empty__wrapper'>
        <h2 className='empty__title'>Нет доступных меропритяий</h2>
      </div>
    </div>
  );
}
