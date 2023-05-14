import { Fragment } from "react";
import styles from "./nav.module.css";
import { FaHome } from 'react-icons/fa';
import { TfiGallery } from 'react-icons/tfi';
import { TfiLayoutSlider} from 'react-icons/tfi';
import { AiOutlinePhone} from 'react-icons/ai';


export function Nav(){
  return(
    <Fragment>
        <div className={styles.navbar}>
           <a href=""><FaHome/></a>
           <a href=""><TfiGallery/></a>
           <a href=""><TfiLayoutSlider/></a>
           <a href=""><AiOutlinePhone/></a>
        </div>


    </Fragment>
  )

}