import styles from "../styles/Home.module.css";
import logo from "../public/images/logo.svg";

export default function Header(props){
    return(
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="Rock, Paper, Scissors"/>
            <div className={styles.score_container}>
                <h4 className={styles.score_title}>SCORE</h4>
                <p className={styles.score}>{props.score}</p>
            </div>
        </header>
    )
}