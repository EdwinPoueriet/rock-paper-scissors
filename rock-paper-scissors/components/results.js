import styles from "../styles/Home.module.css"
import {GAMEOPTIONS} from "../utils/gameOptions";
import { useRulerFunctions} from "../context";
import Circle from "./circle";
export default function Results(props) {
    const opt = GAMEOPTIONS;
    const {result, userPlay, machinePlay} = useRulerFunctions()
    console.log(result, "cda")
    return(
        <div className={styles.top_triangle_wrap}>
            <div>
                <h2>You Picked</h2>
                <Circle
                    isButton={false}
                    {...opt[userPlay]}
                    />

            </div>
            <div className={styles.result}>
                <h1>{result}</h1>
                <button onClick={props.playAgain} className={styles.again_button}>Play Again</button>
            </div>
            <div>
                <h2>The House Picked</h2>
                <Circle
                    isButton={false}
                    {...opt[machinePlay]}
                />
            </div>
        </div>
    )
}