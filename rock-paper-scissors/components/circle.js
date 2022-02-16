import styles, {circle_button,} from "../styles/Home.module.css";
import {GAMEOPTIONS} from "../../utils/gameOptions";

export default function Circle(props){

    return(
        <button
            className={ circle_button  +" "+ `${props.css}`}
            onClick={() => props.selection(props.gameOption)}
        >
                   <span className={styles.inner_circle}>
                       <img src={props.img} alt={props.type}/>
                   </span>
        </button>
    )
}