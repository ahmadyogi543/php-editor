import React from 'react';
import {Col, Row} from 'react-bootstrap';

import EditorBar from './EditorBar';
import EditorTabs from './EditorTabs';
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
        <EditorTabs />
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
