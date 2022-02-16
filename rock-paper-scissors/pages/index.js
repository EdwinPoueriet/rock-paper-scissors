import styles from '../styles/Home.module.css'
import logo from '../public/images/logo.svg'
import useLocalStorage from "../hooks/useLocalStorage";
import {useState, useEffect} from "react";
import ChoiceSelector from "../components/choiceSelector"
import Header from "../components/header";
import {GAMEOPTIONS} from "../../utils/gameOptions";
export default function Home() {

  const [score, setScore] = useLocalStorage("Score",0);
  const [result, setResult] = useState("")

  const ruler = (entry) => {
    const opt = GAMEOPTIONS
    const userSelection = entry
    const machineSelection = Math.floor(Math.random() * opt.length)

    if(userSelection.id === machineSelection) {
       setResult("Tied")
       return
    }
    if(userSelection.beats.some(opt => opt !== machineSelection) ){
        setScore(score - 1)
        setResult("You Lost")

    }else{
        setScore(score + 1)
        setResult("You Won")

    }
  }

  return (
   <>
       <div className={styles.container}>
           <Header score={score}/>
           <ChoiceSelector ruler={ruler}/>
       </div>
         <button onClick={() => {setScore(0)}}>Restart</button>
   </>
  )
}

{/*{ opt.map((item) =>*/}
{/*  <Button key={item.id} sx={ { borderRadius: 50, backgroundColor: '#cfe8fc' } } onClick={() => {ruler(item)}}>{item.option}</Button>*/}
{/*)}*/}
{/*  score: {score}*/}
{/*  Result: {result}*/}
{/*  <button onClick={() => {setScore(0)}}>Restart</button>*/}
