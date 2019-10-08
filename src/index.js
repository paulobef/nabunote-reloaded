import React from "react";
import ReactDOM from "react-dom";
import Editor from "./components/editor";
import "./css/styles.css";

class App extends React.Component {
  render() {

    return <Editor />;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Nabunote" />, mountNode);
