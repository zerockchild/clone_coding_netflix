import { atom } from 'recoil';

const nowPlayingMovies = atom({
  key: 'nowPlayingMovies',
  default: '',
});

const popularMovies = atom({
    key: 'popularMovies',
    default: '',
  });

  const upcomingMovies = atom({
    key: 'upcomingMovies',
    default: '',
  });

  const weeklyTVMovies = atom({
    key: 'weeklyTVMovies',
    default: '',
  });

  const headerMovieState = atom({
      key: 'recoilHeaderMovie',
      default: '',
  });

export { nowPlayingMovies, popularMovies, upcomingMovies, weeklyTVMovies, headerMovieState };