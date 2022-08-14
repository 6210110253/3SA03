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
      <p> คำใบ้ : ชื่อของฉันมี 4 พยางค์ ขึ้นต้นด้วยตัวย F ลงท้ายด้วย H </p>
      
 </div>
  );
}

export default App;
