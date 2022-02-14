import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


// Paper beats Rock
// Rock beats Scissors
// Scissors beats Paper

export default function Home() {
  const ruler = (entry) => {
    const opt = ["paper","rock","scissors"]
    const userSelection = entry
    const machineSelection = Math.floor(Math.random() * opt.length)
    console.log(opt[entry],"====>", opt[machineSelection])
    if(userSelection === machineSelection){
      console.log("tied")
      return
    }
    if(userSelection < machineSelection && userSelection !== opt.length ){
      console.log("you won")
      return
    }
    if(userSelection > machineSelection || userSelection !== opt.length){
      console.log("you lost")

    }

  }
  return (
   <>
      <button onClick={() => {ruler(1)}}>play</button>
   </>
  )
}
