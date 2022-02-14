import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


// Paper beats Rock
// Rock beats Scissors
// Scissors beats Paper

export default function Home() {
  const opt = [
      {id: 0, option:"paper", beats: [1]},
      {id: 1, option:"rock", beats:[2]},
      {id: 2, option:"scissors", beats:[0]}
  ]
  const ruler = (entry) => {
    const userSelection = entry
    const machineSelection = Math.floor(Math.random() * opt.length)
    console.log(userSelection.beats)
    console.log(userSelection.option,"->", opt[machineSelection].option)

    if(userSelection.id === machineSelection) {
       console.log("tied")
       return
    }
    if(userSelection.beats.some(opt => opt !== machineSelection) ){
      console.log("you lost")
    }else{
       console.log("you won")
    }

  }
  return (
   <>
     { opt.map((item) =>
       <button key={item.id} onClick={() => {ruler(item)}}>{item.option}</button>
     )}

   </>
  )
}


