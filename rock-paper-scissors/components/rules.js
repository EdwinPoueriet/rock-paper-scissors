import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from "../styles/Home.module.css";
import RulesImg from "../public/images/image-rules.svg";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid black',
    borderRadius: '15px',
    boxShadow: 24,
    p: 4,
};
export default function Rules(props){
    return(
    <>
        <Modal
            open={props.show}
            onClose={props.handleClose}
        >

            <Box sx={style}>
                <div className={styles.rules_header}>
                    <h1 className={styles.rules_title}>RULES</h1>
                    <button
                        onClick={props.handleClose}
                        className={styles.close_rules}
                    >&times;
                    </button>
                </div>
                <div  className={styles.rules_img}>
                    <img src={RulesImg} alt={"props.option"}/>
                </div>

            </Box>
        </Modal>
    </>
    )
}