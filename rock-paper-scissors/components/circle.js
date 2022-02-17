import styles, {circle_button,} from "../styles/Home.module.css";
import {useRulerFunctions} from "../context";
import {ruler} from "../utils"
export default function Circle(props){
    const {setStart, setMachinePlay, setUserPlay, setResult, setScore, score} = useRulerFunctions()
    return(
        <button
            className={ circle_button  +" "+ `${props.css}`}
            onClick={props.isButton ?
                () => ruler(props.gameOption, setStart, setMachinePlay, setUserPlay, setResult, setScore, score)
                : undefined}
        >
                   <span className={styles.inner_circle}>
                       <img src={props.img} alt={props.option}/>
                   </span>
        </button>
    )
}