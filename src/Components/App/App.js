import './App.scss';
import React from "react";
import ListCards from "../List/ListCards";
import data from "../../TectData/TestData";

const App = () => {
  return (
    <div className="App">
      {data.lists.map((list) => {
        return (<ListCards list={list}/>)
      })}
    </div>
  );
}

export default App;
