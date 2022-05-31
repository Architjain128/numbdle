import React, { useContext } from "react";
import { AppContext } from "../App";

function KeyBlock({ keyVal, bigKey, disabled }) {
  const { onDelete,onEnter,onSelectLetter } = useContext(AppContext);
  
  const selectLetter =()=>{
    console.log(keyVal);
    if(keyVal === "DELETE"){
      onDelete();
    }
    else if(keyVal === "ENTER"){
      onEnter();
    }
    else{
      onSelectLetter(keyVal);
    }
  }

  return (
    <div
      className="key"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick= {selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default KeyBlock;