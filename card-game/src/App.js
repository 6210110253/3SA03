import React from 'react';
import './App.css';
import WordCard from './WordCard';


const word = "Fatoniyah";
function App() {
  return (
    <div>
      <h1>ให้ทายฉันชื่ออะไร</h1>
      <WordCard value={word}/>
      <p> คำใบ้ : ชื่อของฉันมี 4 พยางค์ ขึ้นต้นด้วยตัวย F ลงท้ายด้วย H </p>
      
 </div>
  );
}

export default App;
