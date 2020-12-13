import Axios from 'axios';
import { Fragment, lazy, Suspense, useContext, useEffect } from 'react';

import { IAction, IEpisode, IEpisodeProps } from '../../interfaces';
import { Store } from '../../Store';

const EpisodeList = lazy<any>(() => import('../EpisodeList'));

const HomePage = () => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const { data } = await Axios.get(URL);
    return dispatch({
      type: 'FETCH_DATA',
      payload: data._embedded.episodes,
    });
  };

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favorites.includes(episode);
    let dispatchObj = {
      type: 'ADD_FAV',
      payload: episode,
    };

    if (episodeInFav) {
      const favWithoutEpisodes = state.favorites.filter(
        (favorite: IEpisode) => favorite.id !== episode.id
      );
      dispatchObj = { type: 'REMOVE_FAV', payload: favWithoutEpisodes };
    }

    return dispatch(dispatchObj);
  };

  const props: IEpisodeProps = {
    episodes: state.episodes,
    toggleFavAction: toggleFavAction,
    favorites: state.favorites,
  };
  console.log(state);

  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <section className='episodes-layout'>
          <EpisodeList {...props} />
        </section>
      </Suspense>
    </Fragment>
  );
};

export default HomePage;
