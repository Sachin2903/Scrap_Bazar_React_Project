import { Fragment ,useState } from "react";
import styles from "./schedule.module.css";

export function Schedule(){
    const [lmess,setLmess]=useState("");

    function erase(){
        setTimeout(()=>{
         setLmess("");
        },2000)
    }
    

 return(
<Fragment>
    <div id="schedule" className={styles.senddata}>
        <h2>Schedule a Pickup NOW !</h2>
      <div className={styles.databox}>
          <input type="number" placeholder="Enter Your Number" className={styles.number}/>
          <input type="text"placeholder="Enter Your Address" className={styles.address}/>
          <button onClick={()=>{
            setLmess("Will Connect You Soon");
            erase();
          }} className={styles.databtn}>Proceed</button>
        <h5 className={styles.lamess}>{lmess}</h5>
      </div>




    </div>



</Fragment>

 )


}