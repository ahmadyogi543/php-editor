import React from 'react';
import {FiTrash2} from 'react-icons/fi';

import Bar from './Bar';
import BarButton from './BarButton';
import {usePHPWebContext} from '../context/PHPWebContext';

export default function OutputBar() {
  const {php} = usePHPWebContext();

  const handleOnClickClearButton = () => php.clear();

  return (
    <Bar className="border-bottom" icon="output" title="OUTPUT">
      <BarButton
        className="border"
        onClick={handleOnClickClearButton}
        variant="outline-dark"
      >
        <FiTrash2 size={20} />
      </BarButton>
    </Bar>
  );
}
