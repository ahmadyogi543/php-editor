import React, {createContext, useContext, useState} from 'react';

import usePHPWeb from '../hooks/usePHPWASM';

const PHPWebContext = createContext();

export function usePHPWebContext() {
  return useContext(PHPWebContext);
}

export function PHPWebContextProvider({children}) {
  const [code, setCode] = useState('<?php\n\n// ketikan kode di sini...');
  const php = usePHPWeb();

  return (
    <PHPWebContext.Provider
      value={{
        code: {
          get: () => code,
          set: (code) => setCode(code),
        },
        php: {
          clear: () => php.clear(),
          execute: (code) => php.execute(code),
          loading: () => php.loading,
          output: () => php.output,
        },
      }}
    >
      {children}
    </PHPWebContext.Provider>
  );
}
