import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IEpisode } from '../interfaces';

const EpisodeList = (props: any): Array<JSX.Element> => {
  const { episodes, toggleFavAction, favorites } = props;

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className='episodes-box'>
        <LazyLoadImage
          effect='blur'
          src={episode.image.medium}
          alt={`Rick and Morty: ${episode.name}`}
        />
        <div>Episode Name: {episode.name}</div>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            Season: {episode.season}, Number: {episode.number}
          </div>
          <button
            type='button'
            onClick={() => toggleFavAction(episode)}
            className={favorites.includes(episode) && 'favOn'}
          >
            Fav
          </button>
        </section>
      </section>
    );
  });
};

export default EpisodeList;
