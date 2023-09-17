import React from 'react';

import Footer from './components/Footer';
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
      <Footer />
    </>
  );
}
