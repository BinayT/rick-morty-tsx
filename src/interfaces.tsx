export interface IEpisode {
  id: number;
  image: { medium: string };
  season: number;
  number: number;
  name: string;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IState {
  episodes: Array<any>;
  favorites: Array<any>;
}

export interface IEpisodeProps {
  episodes: Array<IEpisode>;
  toggleFavAction: (episode: IEpisode) => IAction;
  favorites: Array<IEpisode>;
}
