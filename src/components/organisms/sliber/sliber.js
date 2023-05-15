import { Fragment } from "react";
import styles from "./sliber.module.css";
import logo1 from "../../../image/background/a.jpg"
import logo2 from "../../../image/background/redfort.jpg"
import logo3 from "../../../image/background/c.jpg"
import logo4 from "../../../image/background/Goa.jpg"
import logo5 from "../../../image/background/e.jpg"
import logo6 from "../../../image/background/f.jpg"
import logo7 from "../../../image/background/g.jpg"
import logo8 from "../../../image/background/h.jpg"
import logo9 from "../../../image/background/i.jpg"
import logo10 from "../../../image/background/j.jpg"
import logo11 from "../../../image/background/k.jpg"
import logo12 from "../../../image/background/l.jpg"
import logo13 from "../../../image/background/z.jpg"

import { Slidelist } from "../../molecules/slidelist/slidelist";
const sliderdata=[{imgsrc:logo1,naam:"Ladakh"},{imgsrc:logo2,naam:"Delhi"},{imgsrc:logo3,naam:"Gujarat"},{imgsrc:logo4,naam:"Goa"},{imgsrc:logo5,naam:"Agra"},{imgsrc:logo6,naam:"Tamil Nadu"},{imgsrc:logo7,naam:"Mumbai"},{imgsrc:logo8 ,naam:"Rajasthan"},{imgsrc:logo9,naam:"Kerala"},{imgsrc:logo10,naam:"Delhi"},{imgsrc:logo11,naam:"Ladakh"},{imgsrc:logo12,naam:"Panjab"},{imgsrc:logo13,naam:"Ladakh"}]
export function Sliber(){
    
   return(
    <Fragment>
        <div className={styles.sliderdiv}>
            <h1 id="sliders"className={styles.trend}>Trending destinations</h1>
            <h3 >Most popular choices for travellers</h3>
            <div className={styles.sliderbox}>
            {
                sliderdata.map((e,i)=> <Slidelist key={i*10} detail={e}/> )
              }
            

            </div>
             

        </div>
    </Fragment>
   )

}

