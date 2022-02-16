import styles from '../styles/Home.module.css'
import logo from '../public/images/logo.svg'
import useLocalStorage from "../hooks/useLocalStorage";
import {useState, useEffect} from "react";


export default function Home() {
  const opt = [
      {id: 0, option:"paper", beats: [1]},
      {id: 1, option:"rock", beats:[2]},
      {id: 2, option:"scissors", beats:[0]}
  ]

  const [score, setScore] = useLocalStorage("Score",0);
  const [result, setResult] = useState("")

  const ruler = (entry) => {
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
     {/*{ opt.map((item) =>*/}
     {/*  <Button key={item.id} sx={ { borderRadius: 50, backgroundColor: '#cfe8fc' } } onClick={() => {ruler(item)}}>{item.option}</Button>*/}
     {/*)}*/}
     {/*  score: {score}*/}
     {/*  Result: {result}*/}
     {/*  <button onClick={() => {setScore(0)}}>Restart</button>*/}
       <div className={styles.container}>
           <header className={styles.header}>
               <img className={styles.logo} src={logo} alt="Rock, Paper, Scissors"/>
               <div className={styles.score_container}>
                   <h4 className={styles.score_title}>SCORE</h4>
                   <p className={styles.score}>0</p>
               </div>
           </header>
       </div>
   </>
  )
}


