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
           <a href="#home"><FaHome/></a>
           <a href="#gallery"><TfiGallery/></a>
           <a href="#sliders"><TfiLayoutSlider/></a>
           <a href="mailto: email@example.com" target="_blank"><AiOutlinePhone/></a>
        </div>


    </Fragment>
  )

}