import styles, {circle_button, rock_gradiant,paper_gradiant,scissors_gradiant} from "../styles/Home.module.css";
import rock from '../public/images/icon-rock.svg'
import paper from '../public/images/icon-paper.svg'
import scissors from '../public/images/icon-scissors.svg'
import Circle from "./circle";
export default function ChoiceSelector(){

    return(
        <main className={styles.main}>
            <container className={styles.top_triangle_wrap}>
                <Circle type={"Rock"} img={rock} css={rock_gradiant}/>
                <Circle type={"Paper"} img={paper} css={paper_gradiant}/>
            </container>
            <container className={styles.bottom_triangle_wrap}>
                <Circle type={"Scissors"} img={scissors} css={scissors_gradiant}/>
            </container>
        </main>
    )
}