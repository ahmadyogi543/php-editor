import React from 'react';

import {usePHPWebContext} from '../context/PHPWebContext';

export default function Output() {
  const {php} = usePHPWebContext();

  return (
    <div className="d-flex flex-column h-100 w-100">
      <textarea
        className="border-0 h-100 p-3 w-100"
        placeholder="Output akan tampil di sini..."
        readOnly
        style={{
          backgroundColor: '#f7f7f7',
          fontFamily: 'JetBrainsMonoNL',
          fontSize: '13px',
          resize: 'none',
          outline: 'none',
        }}
        value={php.output()}
      ></textarea>
    </div>
  );
}
