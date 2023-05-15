import { Fragment } from "react";
import styles from "./slidelist.module.css";
import { FiPhoneCall } from 'react-icons/fi';


export function Slidelist(props){
    return(
      <Fragment>
        <div id="slider" className={styles.list}>
          <h2 className={styles.listh}>{props.detail.naam}</h2>
        <img alt="Loading..." className={styles.sliderimg} src={props.detail.imgsrc}/>
        <a rel="noreferrer" href="mailto: email@example.com" target="_blank"><button className={styles.btn}><FiPhoneCall/></button></a>
        
        </div>
            


      </Fragment>


    )
}


