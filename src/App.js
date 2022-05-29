import "./App.css";
import React, { useState, createContext, useEffect } from "react";
import { emptyBoard } from "./files/emptyBoard";
import BoardComponent from "./files/board";
import KeyboardComponent from "./files/keyboard";
import Modal from 'react-modal';
export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(emptyBoard);
  const [currentRow, setCurrentRow] = useState(0);
  const [currentColumn, setCurrentColumn] = useState(0);
  const [currentEquation, setCurrentEquation] = useState("");
  const [correctEquation, setCorrectEquation] = useState("1+8+2=11");
  const [gameRun, setGameRun] = useState(true);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState("");

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };


  const copy=(e)=>{
    e.target.innerText="Url Copied";
    var inp =document.createElement('input');
    document.body.appendChild(inp)
    inp.value = e.target.value;
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
  }

  const LoseScreen=()=>{
    return(
      <div className="modal-content">
        <h1 >Game Ended</h1>
        <h2>You Lose!</h2>
        <h3>{modalData.split(":")[1]}</h3>
        <p>The correct equation was: {correctEquation}</p>
        <div class="modal-button" >
          <button class="modal-button-b" onClick={()=>{window.location.reload()}}>Play Again</button>
          <button class="modal-button-b" onClick={()=>{closeModal()}}>Close</button>
          <button class="modal-button-b" value="archit jain" onClick={(e)=>{copy(e)}}>Share</button>
        </div>
      </div>
    )
  }

  const WinScreen=()=>{
    return(
      <div className="modal-content">
        <h1>Game Ended</h1>
        <h2>You Won!</h2>
        <h3>{modalData.split(":")[1]}</h3>
        <p>The correct equation was: {correctEquation}</p>
        <div class="modal-button">
          <button class="modal-button-b" onClick={()=>{window.location.reload()}}>Play Again</button>
          <button class="modal-button-b" onClick={()=>{closeModal()}}>Close</button>
          <button class="modal-button-b" value="archit jain" onClick={(e)=>{copy(e)}}>Share</button>
        </div>
      </div>
    )
  }
  
  const Footer = () => (
    <div class="footer" style={{position:'fixed',backgroundColor:"rgb(176,203,232)",bottom:0,width:"100%",height:"auto",color:"black",fontSize:"20px",paddingLeft:"10px",paddingRight:"10px"}}>
      <p style={{position:'fixed',backgroundColor:"rgb(176,203,232)",bottom:0,left:0,padding:'5px'}}class="love">Made with ❤️ by <a href="https://architjain128.github.io" style={{textDecoration: 'none',fontWeight:"bolder"}} >Archit Jain</a></p>
      <p style={{position:'fixed',backgroundColor:"rgb(176,203,232)",bottom:0,right:0,padding:'5px'}}><a href="https://architjain128.github.io" style={{textDecoration: 'none',fontWeight:"bolder"}} >Vist my website</a></p>
    </div>
  );
  
  const openModal=(value)=>{
    setModalData(value);
    setIsOpen(true);
  }

  const closeModal=()=>{
    setIsOpen(false);
  }

  const generativeComutativeEquation=(eq,rhs)=>{
    let arr=[]
    let eq1=eq.replaceAll("*"," * ").replaceAll("+"," + ").replaceAll("-"," - ").replaceAll("/"," / ").split(" ");
    let val=[]
    let op=[]
    for(let i=0;i<eq1.length;i++){
      if(eq1[i]!==""){
        if(eq1[i]==="*" || eq1[i]==="/" || eq1[i]==="+" || eq1[i]==="-"){
          op.push(eq1[i])
        }else{
          val.push(parseInt(eq1[i]))
        }
      }
    }
    console.log(val,op)
    if(op.length===0){
      arr.push(eq);
    }
    else if(op.length===1){
      if(op[0]==="+"||op[0]==="*"){
        arr.push(val[0].toString()+op[0]+ val[1].toString())
        arr.push(val[1].toString()+op[0]+ val[0].toString())
      }else{
        arr.push(val[0].toString()+op[0]+ val[1].toString())
      }
    }
    else if(op.length===2){
      let tarr=[]
      tarr.push(val[0].toString()+op[0]+ val[1].toString()+op[1]+ val[2].toString())
      tarr.push(val[0].toString()+op[0]+ val[2].toString()+op[1]+ val[1].toString())
      tarr.push(val[1].toString()+op[0]+ val[2].toString()+op[1]+ val[0].toString())
      tarr.push(val[1].toString()+op[0]+ val[0].toString()+op[1]+ val[2].toString())
      tarr.push(val[2].toString()+op[0]+ val[1].toString()+op[1]+ val[0].toString())
      tarr.push(val[2].toString()+op[0]+ val[0].toString()+op[1]+ val[1].toString())
      tarr.push(val[0].toString()+op[1]+ val[1].toString()+op[0]+ val[2].toString())
      tarr.push(val[0].toString()+op[1]+ val[2].toString()+op[0]+ val[1].toString())
      tarr.push(val[1].toString()+op[1]+ val[2].toString()+op[0]+ val[0].toString())
      tarr.push(val[1].toString()+op[1]+ val[0].toString()+op[0]+ val[2].toString())
      tarr.push(val[2].toString()+op[1]+ val[1].toString()+op[0]+ val[0].toString())
      tarr.push(val[2].toString()+op[1]+ val[0].toString()+op[0]+ val[1].toString())
      tarr.forEach(eqq => {if(eval(eqq)===rhs){arr.push(eqq)}});
    }
    console.log(arr)
    return arr;
  }

  const checkCommutative = (eq1,eq2,val) => {
    let comStatus=false;
    let allCom = generativeComutativeEquation(eq1,val);
    console.log(allCom)
    if(allCom.includes(eq2))comStatus=true;
    return comStatus;
  }

  const verifyEquation = () => {
    let  equation = "";
    for (let i = 0; i < 8; i++) {
      equation += board[currentRow][i];
    }
    let commutativeStatus=false;
    let correct=false;
    if(equation===correctEquation){
      correct=true;
    }
    else{
      equation=equation.split("=");
      let corEquation=correctEquation.split("=");
      let lhs=equation[0];
      let rhs=equation[1];
      let lhsCorrect=corEquation[0];
      let rhsCorrect=corEquation[1];
      let lhsArr=lhs.replaceAll('+', ' ').replaceAll('-', ' ').replaceAll('*', ' ').replaceAll('/', ' ').split(' ');
      let lhsCorrectArr=lhsCorrect.replaceAll('+', ' ').replaceAll('-', ' ').replaceAll('*', ' ').replaceAll('/', ' ').split(' ');
      if(rhs===rhsCorrect && eval(lhs)===eval(lhsCorrect)){
        commutativeStatus=checkCommutative(lhs,lhsCorrect,parseInt(rhs));
      }
    }
    let response={};
    response["vanilla"]=correct;
    response["Commutative"]=commutativeStatus;
    return response;
  }

  const validateEquation = () => {
    let  equation = "";
    for (let i = 0; i < 8; i++) {
      equation += board[currentRow][i];
    }
    let leadingZeroStatus=false;
    let mathCorrectStatus=false;
    let multipleArgumentStatus=false;
    equation=equation.split("=");
    let lhs=equation[0];
    let rhs=equation[1];
    let rhsArr=rhs.replaceAll('+', ' ').replaceAll('-', ' ').replaceAll('*', ' ').replaceAll('/', ' ').split(' ');
    if(rhsArr.length!==1){
      multipleArgumentStatus=true;
    }

    let lhsArr=lhs.replaceAll('+', ' ').replaceAll('-', ' ').replaceAll('*', ' ').replaceAll('/', ' ').split(' ');
    lhsArr.push(rhsArr[0]);
    for(let i=0;i<lhsArr.length;i++){
      // check leading zeros and negative numbers
      if(lhsArr[i]==="" || lhsArr[i][0]==="0"){
        leadingZeroStatus=true;
      }
    }

    try{
      if(eval(lhs)!==eval(rhs)){
        mathCorrectStatus=true;
      }
    }
    catch(e){
      console.log(e);
      leadingZeroStatus=true;
    }
    let response={};
    response["Status"]=!(leadingZeroStatus || mathCorrectStatus || multipleArgumentStatus);
    response["leadingZeroStatus"]={status:leadingZeroStatus,message:"Leading zeros are not allowed"};
    response["mathCorrectStatus"]={status:mathCorrectStatus,message:"Equation is mathematically incorrect"};
    response["multipleArgumentStatus"]={status:multipleArgumentStatus,message:"Multiple arguments on RHS are not allowed"};
    return response;
  }

  const onSelectLetter = (keyVal) =>{
    if(gameRun===false)return;
    if(currentColumn>7)return;
    const newBoard = [...board];
    newBoard[currentRow][currentColumn]=keyVal;
    setBoard(newBoard);
    setCurrentColumn(currentColumn+1);
  }

  const onDelete = () =>{
    if(gameRun===false)return;
    if(currentColumn === 0 )return;
    else{
      const newBoard = [...board];
      newBoard[currentRow][currentColumn-1] = "";
      setBoard(newBoard);
      setCurrentColumn(currentColumn-1);
    }
  }

  const onEnter = () =>{
    if(gameRun===false)return;
    if(currentColumn !== 8){
      alert("Please enter a valid equation");
      return;
    }
    else{
      const validation=validateEquation();
      if(validation.Status===true){
        let verdict=verifyEquation();

        if(verdict.vanilla===true){
          setCurrentColumn(0);
          setCurrentRow(currentRow+1);
          setGameRun(false);
          openModal("Win:You guessed the equation correctly");
          // alert("Win");
        }
        else if(verdict.Commutative===true)
        {
          setCurrentColumn(0);
          setCurrentRow(currentRow+1);
          setGameRun(false);
          openModal("Win:Your guessed equation is commutatively correctly");
          // alert("Win by commutative property");
        }
        else{
          setCurrentColumn(0);
          setCurrentRow(currentRow+1);
          if(currentRow===5){
            setGameRun(false);
            openModal("Lose:You have reached the maximum number of attempts");
            // alert("Lose");
          }
        }
      }
      else{
        let errorMessage="Please enter a valid equation";
        if(validation.leadingZeroStatus.status===true){
          errorMessage+="\n"+validation.leadingZeroStatus.message;
        }
        if(validation.mathCorrectStatus.status===true){
          errorMessage+="\n"+validation.mathCorrectStatus.message;
        }
        if(validation.multipleArgumentStatus.status===true){
          errorMessage+="\n"+validation.multipleArgumentStatus.message;
        }
        alert(errorMessage);
      }
    }
  }

  return (
    <div className="App">
      <nav><h1>Archit's NERDLE</h1></nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentRow,
          setCurrentRow,
          currentColumn,
          setCurrentColumn,
          currentEquation,
          setCurrentEquation,
          correctEquation,
          setCorrectEquation,
          onDelete,
          onEnter,
          onSelectLetter,
        }}
      >
        <div class="board">
          <BoardComponent />
          <KeyboardComponent />
          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <div class="modal-data">
                {modalData.split(":")[0]==="Win"?WinScreen():LoseScreen()}
            </div>
        
      </Modal>
        </div>
      </AppContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;
