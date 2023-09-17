import React, {useRef} from 'react';
import {FiFolder, FiSave, FiPlayCircle} from 'react-icons/fi';

import Bar from './Bar';
import BarButton from './BarButton';

import {usePHPWebContext} from '../context/PHPWebContext';
import {saveFile} from '../utils';

export default function EditorBar() {
  const inputRef = useRef();
  const {code, php} = usePHPWebContext();

  const handleOnFileChange = (ev) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => code.set(reader.result), false);

    const file = ev.target.files[0];
    if (file) reader.readAsText(file);
  };

  const handleOnClickRunButton = () => php.execute(code.get());
  const handleOnClickOpenButton = () => inputRef.current.click();
  const handleOnClickSaveButton = () => saveFile(code.get());

  return (
    <Bar icon="editor" title="PHP EDITOR">
      <BarButton
        className="border"
        onClick={handleOnClickOpenButton}
        variant="outline-dark"
      >
        <input
          accept=".php"
          className="d-none"
          onChange={handleOnFileChange}
          ref={inputRef}
          type="file"
        />
        <FiFolder size={20} />
      </BarButton>

      <BarButton
        className="border"
        onClick={handleOnClickSaveButton}
        variant="outline-dark"
      >
        <FiSave size={20} />
      </BarButton>

      <BarButton disabled={php.loading()} onClick={handleOnClickRunButton}>
        <div className="d-flex align-items-center">
          <FiPlayCircle className="me-1" size={20} />
          <span>RUN</span>
        </div>
      </BarButton>
    </Bar>
  );
}
