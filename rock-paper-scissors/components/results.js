import styles, {rock_gradiant} from "../styles/Home.module.css"
import rock from '../public/images/icon-rock.svg'
import paper from '../public/images/icon-paper.svg'
import scissors from '../public/images/icon-scissors.svg'
import {GAMEOPTIONS} from "../utils/gameOptions";
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
                {/*<button className={ `${styles.circle_button} ${styles.rock_gradiant}`}><span className={styles.inner_circle}><img src={rock} alt="rock"/></span></button>*/}
            </div>
            <div>
                <h1>{props.result}</h1>
                <button onClick={props.playAgain} className={styles.again_button}>Play Again</button>
            </div>
            <div>
                <h2>The House Picked</h2>
                {/*<button className={`${styles.circle_button} ${styles.paper_gradiant}`}><span className={styles.inner_circle}><img src={paper} alt="paper"/></span></button>*/}
                <Circle
                    isButton={false}
                    {...props.machinePick}
                />
            </div>
        </div>
    )
}