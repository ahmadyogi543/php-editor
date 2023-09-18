import React from 'react';
import AceEditor from 'react-ace';

import {usePHPWebContext} from '../context/PHPWebContext';

import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-php';
import 'ace-builds/src-noconflict/theme-chrome';

export default function Editor() {
  const {code} = usePHPWebContext();

  return (
    <AceEditor
      fontSize={14}
      height="100%"
      mode="php"
      name="code-editor"
      onChange={(value) => code.set(value)}
      setOptions={{
        fontFamily: 'JetBrainsMonoNL',
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        showLineNumbers: true,
        tabSize: 2,
        useWorker: false,
      }}
      showGutter
      showPrintMargin={false}
      theme="chrome"
      width="100%"
      value={code.get()}
    />
  );
}
