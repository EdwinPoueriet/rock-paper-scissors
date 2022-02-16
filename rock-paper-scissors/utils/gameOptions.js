import rock from '../public/images/icon-rock.svg'
import paper from '../public/images/icon-paper.svg'
import scissors from '../public/images/icon-scissors.svg'
import {rock_gradiant,paper_gradiant,scissors_gradiant} from "../styles/Home.module.css";
export const GAMEOPTIONS = [
    {id: 0, option:"paper", beats: [1], img:paper, css: paper_gradiant},
    {id: 1, option:"rock", beats:[2], img:rock, css: rock_gradiant},
    {id: 2, option:"scissors", beats:[0], img: scissors, css: scissors_gradiant}
]