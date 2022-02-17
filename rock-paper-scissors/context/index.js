import {useContext, createContext, useState} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const RulerContext = createContext({
    setResult: () => {}
})

export const RulerFunctions = ({children}) => {
    const [start, setStart] = useState(true);
    const [score, setScore] = useLocalStorage("Score",0);
    const [result, setResult] = useState("");
    const [userPlay, setUserPlay] = useState(0);
    const [machinePlay, setMachinePlay] = useState(0);
    return(
        <RulerContext.Provider
            value={{setStart, start,score, setScore,
                result, setResult, userPlay, setUserPlay, machinePlay, setMachinePlay}}>
            {children}
        </RulerContext.Provider>
    )
}

export const useRulerFunctions = () => useContext(RulerContext);