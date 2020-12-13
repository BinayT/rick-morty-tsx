import { useContext } from 'react';
import { Store } from '../../Store';
import { IEpisode } from '../../interfaces';

const Fav = () => {
  const { state } = useContext(Store);

  return (
    <section className='episodes-layout'>
      {state.favorites.map((el: IEpisode) => (
        <section className='episodes-box'>
          <img src={el.image.medium} alt={el.name} />
          <div>Episode Name:{el.name}</div>
          <section style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              Season: {el.season}, Number: {el.number}
            </div>
            <button className='favOn'>Fav</button>
          </section>
        </section>
      ))}
    </section>
  );
};

export default Fav;
