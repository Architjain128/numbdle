import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Block({ letterPos, attemptVal,flag=false,value="",color="" }) {
  const { board,correctEquation,currentRow } = useContext(AppContext);
  let blockText = board[attemptVal][letterPos];
  let blockState = "";
  let blockClass = "block";
  if(flag){
    blockClass="block-rule";
    blockState=color;
    blockText=value;
  }
  else{
    const rightplace=correctEquation.charAt(letterPos)===blockText;
    const almost= !rightplace && correctEquation.charAt(letterPos)!=="" && correctEquation.includes(blockText);
    blockState= currentRow>attemptVal && ( rightplace ? "rightplace":almost?"almostrightplace":"wrongplace");
  }
  return (
    <div className={blockClass} id={blockState}>
      {blockText}
    </div>
  );
}

export default Block;