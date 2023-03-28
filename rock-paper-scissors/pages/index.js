import styles from '../styles/Home.module.css'
import {useState} from "react";
import ChoiceSelector from "../components/choiceSelector"
import Header from "../components/header";
import Results from "../components/results";
import Rules from "../components/rules";
import {RulerFunctions, useRulerFunctions} from "../context";

export function Home() {
  const {setStart, start,setScore} = useRulerFunctions()
  const [showRules, setShowRules] = useState(false);
  const handlePlayAgain = () => {
      setStart(!start)
  }
  return (
   <>
       <div className={styles.container}>
           <Header/>
           {start ? (
               <ChoiceSelector/>
           ) : (
               <Results
                   playAgain={handlePlayAgain}
                />
           )}
           <button onClick={() => {setScore(0); handlePlayAgain()}} className={styles.reset_button}>Restart</button>
           <button onClick={() => {setShowRules(true)}} className={styles.rules_button}>RULES</button>
       </div>
       <Rules show={showRules} handleClose={() => setShowRules(false)} />
   </>
  )
}

export default function Module(){
    return(
        <RulerFunctions><Home /></RulerFunctions>
    )
}

