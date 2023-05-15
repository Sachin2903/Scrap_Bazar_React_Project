import { Fragment} from "react";
import styles from "./gallery.module.css";
import post from "../../../image/heroimg.jpg"
import img1 from "../../../image/gallery/aa.jpg";
import img2 from "../../../image/gallery/bb.jpg";
import img3 from "../../../image/gallery/cc.jpg";
import img4 from "../../../image/gallery/dd.jpg";
import img5 from "../../../image/gallery/ee.jpg";
import img6 from "../../../image/gallery/ff.jpg";

import img8 from "../../../image/gallery/hh.jpg";
import img9 from "../../../image/gallery/ii.jpg";
import img10 from "../../../image/gallery/jj.jpg";
import img11 from "../../../image/gallery/kk.jpg";
import img12 from "../../../image/gallery/ll.jpg";
import img13 from "../../../image/gallery/mm.jpg";
import img14 from "../../../image/gallery/nn.jpg";
import img15 from "../../../image/gallery/oo.jpg";
import vedio from "../../../image/webvedio.mp4"
export function Gallery() {
  

  return (
    <Fragment>
      <div id="gallery" className={styles.photogallery}>
        <div className={styles.gallery1} >
          <img alt="Loading..." src={img1} className={styles.gall1img} />
          <img alt="Loading..." src={img2} className={styles.gall1img} />
          <img alt="Loading..." src={img3} className={styles.gall1img} />
          <img alt="Loading..." src={img4} className={styles.gall1img} />
          <img alt="Loading..." src={img13} className={styles.gall1img} />
        </div>
        <div className={styles.gallery2} >
          <img alt="Loading..." src={img5} className={styles.gall1img1} />
          <img alt="Loading..." src={img6} className={styles.gall1img1} />
         
          <video controls  className={styles.vedio1} loop poster={post} >
            <source src={vedio} type="Video/mp4" />
          </video>
       
          
          <img alt="Loading..." src={img8} className={styles.gall1img1} />
          <img alt="Loading..." src={img14} className={styles.gall1img1} />
        </div>
        <div className={styles.gallery3} >
          <img alt="Loading..." src={img9} className={styles.gall1img2} />
          <img alt="Loading..." src={img10} className={styles.gall1img2} />
          <img alt="Loading..." src={img11} className={styles.gall1img2} />
          <img alt="Loading..." src={img12} className={styles.gall1img2} />
          <img alt="Loading..." src={img15} className={styles.gall1img1} />
        </div>
      </div>


    </Fragment>
  )

}