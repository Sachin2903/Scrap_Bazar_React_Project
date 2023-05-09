import styles from "./price.module.css";
import { Fragment } from "react";
import { useRef } from "react";
export function Price() {
   const box = useRef("");


   function btnprev() {

      let width = box.current.clientWidth;
      box.current.scrollLeft = box.current.scrollLeft + width / 5;

   }
   function btnnext() {
      let width = box.current.clientWidth;
      box.current.scrollLeft = box.current.scrollLeft - width / 5;


   }
   return (
      <Fragment>

         <div id="PRICES" className={styles.price}>
            <h1 className={styles.pricename}>Price</h1>
            <div className={styles.mainslider}>
               <button onClick={btnprev} className={styles.rbtn}>&gt;</button>
               <div ref={box} className={styles.slider}>

                  <div className={styles.s1}>
                     <h5 className={styles.naam}>Newspaper</h5>
                     <p className={styles.kimat}>Rs 17/Kg</p>
                  </div>
                  <div className={styles.s2}>
                     <h5 className={styles.naam}>Iron</h5>
                     <p className={styles.kimat}>Rs 40/Kg</p>
                  </div>
                  <div className={styles.s3}>
                     <h5 className={styles.naam}>Cardboard</h5>
                     <p className={styles.kimat}>Rs 10/Kg</p>
                  </div>
                  <div className={styles.s4}>
                     <h5 className={styles.naam}>Fan</h5>
                     <p className={styles.kimat}>Rs 50/Kg</p>
                  </div>
                  <div className={styles.s5}><h5 className={styles.naam}>Plastic</h5>
                     <p className={styles.kimat}>Rs 10/Kg</p>
                  </div>
                  <div className={styles.s6}><h5 className={styles.naam}>Books</h5>
                     <p className={styles.kimat}>Rs 15/Kg</p>
                  </div>

               </div>
               <button onClick={btnnext} className={styles.lbtn}>&lt;</button>
            </div>
         </div>


      </Fragment>


   )

}
