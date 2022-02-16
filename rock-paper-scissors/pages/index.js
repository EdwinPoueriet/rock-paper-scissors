import styles from '../styles/Home.module.css'
import useLocalStorage from "../hooks/useLocalStorage";
import {useState, useEffect} from "react";
import ChoiceSelector from "../components/choiceSelector"
import Header from "../components/header";
import {GAMEOPTIONS} from "../utils/gameOptions";
import Results from "../components/results";
import Rules from "../components/rules";
export default function Home() {

  const [score, setScore] = useLocalStorage("Score",0);
  const [result, setResult] = useState("");
  const [start, setStart] = useState(true);
  const [userPlay, setUserPlay] = useState(0);
  const [machinePlay, setMachinePlay] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const handlePlayAgain = () => {
      setStart(!start)
  }
    const opt = GAMEOPTIONS
  const ruler = (entry) => {

    const userSelection = entry;
    const machineSelection = Math.floor(Math.random() * opt.length);
    setMachinePlay(machineSelection);
    setUserPlay(userSelection.id);

    if(userSelection.id === machineSelection) {
       setResult("Tied")
        console.log(result)
        setStart(false)
       return
    }
    if(userSelection.beats.some(opt => opt !== machineSelection) ){
        setScore(score - 1)
        setResult("You Lost")

    }else{
        setScore(score + 1)
        setResult("You Won")

    }
      console.log(result)
    setStart(false)
  }

  return (
   <>
       <div className={styles.container}>
           <Header score={score}/>
           {start ? (
               <ChoiceSelector ruler={ruler}/>
           ) : (
               <Results
                   playAgain={handlePlayAgain}
                   result={result}
                   yourPick={opt[userPlay]}
                   machinePick={opt[machinePlay]}/>
           )}
           <button onClick={() => {setScore(0)}} className={styles.reset_button}>Restart</button>
           <button onClick={() => {setShowRules(true)}} className={styles.rules_button}>RULES</button>
       </div>
       <Rules show={showRules} handleClose={() => setShowRules(false)} />
   </>
  )
}

{/*{ opt.map((item) =>*/}
{/*  <Button key={item.id} sx={ { borderRadius: 50, backgroundColor: '#cfe8fc' } } onClick={() => {ruler(item)}}>{item.option}</Button>*/}
{/*)}*/}
{/*  score: {score}*/}
{/*  Result: {result}*/}
{/*  <button onClick={() => {setScore(0)}}>Restart</button>*/}
