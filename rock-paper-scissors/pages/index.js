import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useLocalStorage from "../hooks/useLocalStorage";
import {useState, useEffect} from "react";


// Paper beats Rock
// Rock beats Scissors
// Scissors beats Paper

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
       console.log("tied")
       console.log(score);
       setResult("Tied")
       return
    }
    if(userSelection.beats.some(opt => opt !== machineSelection) ){
        console.log("you lost")
        setScore(score - 1)
        setResult("You Lost")
    }else{
        console.log("you won")
        setScore(score + 1)
        setResult("You Won")
    }
    console.log("score",score)

  }
  return (
   <>
     { opt.map((item) =>
       <button key={item.id} onClick={() => {ruler(item)}}>{item.option}</button>
     )}
       score: {score}
       Result: {result}
       <button onClick={() => {setScore(0)}}>Restart</button>
   </>
  )
}


