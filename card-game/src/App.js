import React from 'react';
import './App.css';
import WordCard from './WordCard';
import { Button } from 'reactstrap';

const word = "Fatoniyah";
function App() {
  return (
    <div>
      <Button outline color="success">my name is ... ?</Button>{' '}
      <WordCard value={word}/>
      <p> Hint : ชื่อของฉันมี 4 พยางค์ </p>
 </div>
  );
}

export default App;
