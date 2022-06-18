import './App.scss';
import { useState, useEffect } from 'react';

function App() {
  const [display, setDisplay] = useState("");
    console.log(typeof(display))

  const operadores = [ "+" , "-" , "/" , "*", ];

  const agregarDigito = (num) =>{
    if((operadores.includes(num) && display === "") || 
      (operadores.includes(num) && operadores.includes(display.slice(-1))) || 
      (num === "0" && display === "0"))
      {
      return;
    }else{
      setDisplay(display + num);
    }
  }
  const imprimirResultado = () =>{
    if(!operadores.includes(display.slice(-1))){
      setDisplay(eval(display).toString())
    }
  }
  const allClear = () =>{
    setDisplay("")
  }
  const deleteLast = () => {
    var valorRecortado = display.slice(0,-1);
    if(display === 'Infinity' || display === 'Syntax Error'){
      setDisplay("")
    }else{
      setDisplay(valorRecortado.toString())
    }
  }
  var digitos = [];
  const botones = () =>{
    for (let i = 9; i > -1; i--) {
      digitos.push(
        <button key={i} onClick={() => agregarDigito(i.toString())}>{i}</button>
      )
      
    }
    return digitos;
  }
  useEffect(() =>{
    if(display.length > 13){
      document.querySelector('.pantalla').style.fontSize = '1rem';
    }else{
      document.querySelector('.pantalla').style.fontSize = '2rem';
    }
    if(display === 'NaN'){
      setDisplay('Syntax Error');
    }
  },[display])


  return (
    <div className="App">
      <div className="contenedorCalculadora">
        <div className="pantalla">
          {display ? display : '0'}
        </div>
        <div className="operadores">
          <button onClick={() => agregarDigito("+")}>+</button>
          <button onClick={() => agregarDigito("-")}>-</button>
          <button onClick={() => agregarDigito("*")}>*</button>
          <button onClick={() => agregarDigito("/")}>/</button>
          <button onClick={() => deleteLast()}>DEL</button>
          <button onClick={() => allClear()}>AC</button>
        </div>
        <div className="botones">
      {botones()}
      <button onClick={() => agregarDigito(".")}>.</button>
      <button onClick={() => imprimirResultado()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
