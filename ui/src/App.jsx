import React from 'react';

import Page from './components/Page';
import {PHPWebContextProvider} from './context/PHPWebContext';

export default function App() {
  return (
    <>
      <main className="d-flex flex-grow-1">
        <PHPWebContextProvider>
          <Page />
        </PHPWebContextProvider>
      </main>
    </>
  );
}
