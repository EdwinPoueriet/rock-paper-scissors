import {ruler } from '../utils'
import {GAMEOPTIONS} from "../utils/gameOptions";

test('ruler test', () => {
    const handleStart = (v)=>{
        expect(v).toBe(false)
        return v
    }
    let selector = Math.floor(Math.random() * 3);
    let score = 0 ;
    let computedScore = 0
    const setScore = (v)=>{
        return computedScore = v
    }
    const setUserPlay = (v) => {
        expect(v).toBe(selector)

    }
    const setMachinePlay = (v) =>{
        expect(v).toBeLessThanOrEqual(2)
        expect(v).toBeGreaterThanOrEqual(0)
    }
    ruler(GAMEOPTIONS[selector], handleStart, setMachinePlay,setUserPlay,(value)=>{
        console.log(score, computedScore)
        if(value === "Tied") expect(score).toBe(computedScore)
        if(value === "You Lost" || value === "You Won") expect(score).not.toBe(computedScore)

    },setScore, score )
});