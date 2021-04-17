import preloader from "./../../../assets/images/Spinner.svg";
import styles from "./../../Users/users.module.css";

let Preloader = (props) => {
    return <img src={preloader} className={styles.preloader} alt="preloader" />
}

export default Preloader;