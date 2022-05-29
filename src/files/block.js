import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Block({ letterPos, attemptVal }) {
  const { board,correctEquation,currentRow } = useContext(AppContext);
  const blockText = board[attemptVal][letterPos];
  
  const rightplace=correctEquation.charAt(letterPos)===blockText;
  const almost= !rightplace && correctEquation.charAt(letterPos)!=="" && correctEquation.includes(blockText);
  const blockState= currentRow>attemptVal && ( rightplace ? "rightplace":almost?"almostrightplace":"wrongplace");
  
  return (
    <div className="block" id={blockState}>
      {blockText}
    </div>
  );
}

export default Block;