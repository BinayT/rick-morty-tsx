import React, { Fragment, useContext } from 'react';
import { Link } from '@reach/router';

import { Store } from './Store';

function App() {
  const { state } = useContext(Store);

  return (
    <Fragment>
      <header className='header'>
        <Link to='/'>
          <h1>Rick and Morty</h1>
        </Link>
        {state.favorites.length === 0 ? (
          <p>Pick your favorite episode</p>
        ) : (
          <Link to='/favorites'>
            <p>Fav Episodes: {state.favorites.length}</p>
          </Link>
        )}
      </header>
    </Fragment>
  );
}

export default App;
