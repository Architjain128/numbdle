import React, { useCallback, useEffect, useContext } from "react";
import KeyBlock from "./keyblock";
import { AppContext } from "../App";

function KeyboardComponent() {
  const keys1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const keys2 = ["+", "-", "*", "/", "="];

  const {
    board, onDelete, onEnter, onSelectLetter
  } = useContext(AppContext);

  const handleKeyPress = useCallback((e)=>{
    if(e.key === "Backspace")onDelete();
    else if(e.key === "Enter")onEnter();
    else{
      keys1.forEach(key=>{
        if(e.key === key){
          onSelectLetter(key);
        }
      });
      keys2.forEach(key=>{
        if(e.key === key){
          onSelectLetter(key);
        }
      });
    }
  })

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="keyboard" onKeyDown={handleKeyPress}>
      <div className="line1">
        {keys1.map((key) => {
          return <KeyBlock keyVal={key} />;
        })}
      </div>
      <div className="line2">
        <KeyBlock keyVal={"ENTER"} bigKey />
        {keys2.map((key) => {
          return <KeyBlock keyVal={key} />;
        })}
        <KeyBlock keyVal={"DELETE"} bigKey />
      </div>
    </div>
  );
}

export default KeyboardComponent;