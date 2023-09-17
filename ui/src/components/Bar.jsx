import React from 'react';
import {BiCode, BiTerminal} from 'react-icons/bi';

export default function Bar({icon = '', children, title = ''}) {
  return (
    <div className="align-items-center bg-white border-bottom d-flex justify-content-between px-3 py-2">
      <div className="align-items-center d-flex text-primary">
        {getIcon(icon)}
        <span className="d-block fw-semibold" style={{marginTop: '2px'}}>
          {title}
        </span>
      </div>
      <div className="d-flex gap-2">{children}</div>
    </div>
  );
}

function getIcon(name) {
  if (name === 'editor') {
    return <BiCode className="me-2" size={24} />;
  } else if (name === 'output') {
    return <BiTerminal className="me-2" size={24} />;
  } else {
    return null;
  }
}
