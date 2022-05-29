import React, { useContext } from "react";
import { AppContext } from "../App";
import Block from "./block";

function BoardComponent() {
  return (
    <div className="board-component">
      <div className="row">
        <Block letterPos={0} attemptVal={0} />
        <Block letterPos={1} attemptVal={0} />
        <Block letterPos={2} attemptVal={0} />
        <Block letterPos={3} attemptVal={0} />
        <Block letterPos={4} attemptVal={0} />
        <Block letterPos={5} attemptVal={0} />
        <Block letterPos={6} attemptVal={0} />
        <Block letterPos={7} attemptVal={0} />
      </div>
      <div className="row">
        <Block letterPos={0} attemptVal={1} />
        <Block letterPos={1} attemptVal={1} />
        <Block letterPos={2} attemptVal={1} />
        <Block letterPos={3} attemptVal={1} />
        <Block letterPos={4} attemptVal={1} />
        <Block letterPos={5} attemptVal={1} />
        <Block letterPos={6} attemptVal={1} />
        <Block letterPos={7} attemptVal={1} />
      </div>
      <div className="row">
        <Block letterPos={0} attemptVal={2} />
        <Block letterPos={1} attemptVal={2} />
        <Block letterPos={2} attemptVal={2} />
        <Block letterPos={3} attemptVal={2} />
        <Block letterPos={4} attemptVal={2} />
        <Block letterPos={5} attemptVal={2} />
        <Block letterPos={6} attemptVal={2} />
        <Block letterPos={7} attemptVal={2} />
      </div>
      <div className="row">
        <Block letterPos={0} attemptVal={3} />
        <Block letterPos={1} attemptVal={3} />
        <Block letterPos={2} attemptVal={3} />
        <Block letterPos={3} attemptVal={3} />
        <Block letterPos={4} attemptVal={3} />
        <Block letterPos={5} attemptVal={3} />
        <Block letterPos={6} attemptVal={3} />
        <Block letterPos={7} attemptVal={3} />
      </div>
      <div className="row">
        <Block letterPos={0} attemptVal={4} />
        <Block letterPos={1} attemptVal={4} />
        <Block letterPos={2} attemptVal={4} />
        <Block letterPos={3} attemptVal={4} />
        <Block letterPos={4} attemptVal={4} />
        <Block letterPos={5} attemptVal={4} />
        <Block letterPos={6} attemptVal={4} />
        <Block letterPos={7} attemptVal={4} />
      </div>
      <div className="row">
        <Block letterPos={0} attemptVal={5} />
        <Block letterPos={1} attemptVal={5} />
        <Block letterPos={2} attemptVal={5} />
        <Block letterPos={3} attemptVal={5} />
        <Block letterPos={4} attemptVal={5} />
        <Block letterPos={5} attemptVal={5} />
        <Block letterPos={6} attemptVal={5} />
        <Block letterPos={7} attemptVal={5} />
      </div>
    </div>
  );
} 

export default BoardComponent;