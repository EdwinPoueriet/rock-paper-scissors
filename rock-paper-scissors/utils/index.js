import {GAMEOPTIONS} from "../utils/gameOptions";
const opt = GAMEOPTIONS;
export const ruler = (entry, handleStart, setMachinePlay,
                      setUserPlay, setResult,setScore, score) => {

    const userSelection = entry;
    const machineSelection = Math.floor(Math.random() * opt.length);
    setMachinePlay(machineSelection);
    setUserPlay(userSelection.id);

    if(userSelection.id === machineSelection) {
        setResult("Tied")
        handleStart(false)
        return
    }
    if(userSelection.beats.some(opt => opt !== machineSelection) ){
        setScore(score -1)
        setResult("You Lost")

    }else{
        setScore(score +1)
        setResult("You Won")

    }
    handleStart(false)

}