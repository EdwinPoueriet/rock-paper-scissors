import styles, {circle_button,} from "../styles/Home.module.css";

export default function Circle(props){

    return(
        <button className={ circle_button  +" "+ `${props.css}` }>
                   <span className={styles.inner_circle}>
                       <img src={props.img} alt={props.type}/>
                   </span>
        </button>
    )
}