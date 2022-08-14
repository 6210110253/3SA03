import React from 'react';
import _, { attempt } from "lodash";
import CharacterCard from './CharacterCard';
import { useState } from 'react';

const prepareStateFromWord = give_word => {
    let word = give_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1, // เล่นไปกี่ครั้ง
        guess: " ", // คลิ๊กไปกี่ครั้ง
        complete: false // เล่นจบหรือยัง
    }

}

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => { 
        console.log(`${c} has been activated.`) 

        let guess = state.guess + c
        setState({...state, guess: guess})

        if(guess.length == state.word.length){


            
            if(guess == state.word){
                console.log('ถูกต้องแล้วค่ะ ฉันชื่อ Fatoniyah')
                setState({...state, completed: true})
            } else {
                console.log('ลองอีกครั้ง')
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        }

        console.log(guess)
    }

     return (
        <div>
            { 
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                ) 
            }
        </div>
     ); 
}