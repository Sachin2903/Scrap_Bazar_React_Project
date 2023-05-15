import { Fragment } from "react";
import styles from "./gallery.module.css";

export function Gallery(){
  return(
    <Fragment>
        <div id="gallery" className={styles.photogallery}>
            <div className={styles.gallery1} ></div>
            <div className={styles.gallery2} ></div>
            <div className={styles.gallery3} ></div>
        </div>


    </Fragment>
  )

}