import styles, {rock_gradiant,paper_gradiant,scissors_gradiant} from "../styles/Home.module.css";
import rock from '../public/images/icon-rock.svg'
import paper from '../public/images/icon-paper.svg'
import scissors from '../public/images/icon-scissors.svg'
import {GAMEOPTIONS} from "../utils/gameOptions";
import Circle from "./circle";

export default function ChoiceSelector(){
    return(
        <main className={styles.main}>
            <div className={styles.top_triangle_wrap}>
                <Circle
                    isButton={true}
                    gameOption={GAMEOPTIONS[1]}
                    option={"Rock"}
                    img={rock}
                    css={rock_gradiant}/>
                <Circle
                    isButton={true}
                    gameOption={GAMEOPTIONS[0]}
                    option={"Paper"}
                    img={paper}
                    css={paper_gradiant}/>
            </div>
            <div className={styles.bottom_triangle_wrap}>
                <Circle
                    isButton={true}
                    gameOption={GAMEOPTIONS[2]}
                    option={"Scissors"}
                    img={scissors}
                    css={scissors_gradiant}/>
            </div>
        </main>
    )
}