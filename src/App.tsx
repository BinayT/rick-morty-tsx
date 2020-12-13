import React, { Fragment, useContext } from 'react';
import { Link } from '@reach/router';

import { Store } from './Store';

function App(props: any) {
  const { state } = useContext(Store);

  return (
    <Fragment>
      <header className='header'>
        <Link to='/' className='anchor'>
          <h1>Rick and Morty</h1>
        </Link>
        {state.favorites.length === 0 ? (
          <p>Pick your favorite episode</p>
        ) : (
          <Link to='/favorites' className='anchor'>
            <p>Check Fav Here: {state.favorites.length}</p>
          </Link>
        )}
      </header>
      {props.children}
    </Fragment>
  );
}

export default App;
