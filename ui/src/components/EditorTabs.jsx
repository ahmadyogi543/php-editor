import React from "react";
import { Tab, Tabs } from "react-bootstrap";

import Editor from "./Editor";

export default function EditorTabs() {
  return (
    <Tabs className="bg-white pt-1" defaultActiveKey="index">
      <Tab
        className="flex-grow-1"
        eventKey="index"
        title={<span className="text-muted small">index.php</span>}
      >
        <Editor />
      </Tab>
      {/* TODO: will do it later... */}
      {/* <Tab disabled eventKey="plus" title={<FiPlus size={18} />}></Tab> */}
    </Tabs>
  );
}
