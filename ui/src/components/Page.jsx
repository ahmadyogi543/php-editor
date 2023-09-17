import React from 'react';
import {Col, Row} from 'react-bootstrap';

import CodeEditor from './CodeEditor';
import EditorBar from './EditorBar';
import Output from './Output';
import OutputBar from './OutputBar';

export default function Page() {
  return (
    <Row
      className="flex-grow-1 g-0"
      style={{
        backgroundColor: 'var(--bs-border-color)',
      }}
    >
      <Col className="d-flex flex-column border-end" md={8}>
        <EditorBar />
        <div className="flex-grow-1">
          <CodeEditor />
        </div>
      </Col>

      <Col className="d-flex flex-column" md={4}>
        <OutputBar />
        <div className="flex-grow-1">
          <Output />
        </div>
      </Col>
    </Row>
  );
}
