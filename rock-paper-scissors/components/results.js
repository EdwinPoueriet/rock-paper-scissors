import styles, {rock_gradiant} from "../styles/Home.module.css"

import Circle from "./circle";
export default function Results(props) {
    return(
        <div className={styles.top_triangle_wrap}>
            <div>
                <h2>You Picked</h2>
                <Circle
                    isButton={false}
                    {...props.yourPick}
                    />

            </div>
            <div className={styles.result}>
                <h1>{props.result}</h1>
                <button onClick={props.playAgain} className={styles.again_button}>Play Again</button>
            </div>
            <div>
                <h2>The House Picked</h2>
                <Circle
                    isButton={false}
                    {...props.machinePick}
                />
            </div>
        </div>
    )
}