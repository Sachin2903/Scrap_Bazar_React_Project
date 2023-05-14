import { Fragment ,useEffect,useRef,useState} from "react"
import {BsFillTelephoneOutboundFill} from 'react-icons/bs';


import styles from "./hero.module.css"
const cityname=["DELHI","LUCKNOW","JAMMU & KASHMIR","RAJASTHAN","TAMIL NADU","MUMBAI","GUJARAT","KERALA","HIMACHAL PRADESH"]
export function Hero(){
  const [changeStae,setChangeState]=useState("MUMBAI");
  const count=useRef(0);

  useEffect(()=>{
       let id=setTimeout(()=>{
        setChangeState(cityname[count.current]);
        count.current=(count.current+1)%cityname.length;

       },2000)

 return ()=>{
  clearTimeout(id)
 }
  },[changeStae])

    return(
        <Fragment>
          <div id="home" className={styles.herodiv}>

          <h1 className={styles.slogon}>You Choose We Plan</h1>
          <h1 className={styles.animation}> DO COME & VISIT <span className={styles.city}>{changeStae}</span></h1>
          <h3 className={styles.quotes}>"Visit India Once Is Not Enough"</h3>
         <span>
         <a> <button className={styles.learn}>LEARN MORE</button> </a>
          <a><button className={styles.talk}> TALK TO US <BsFillTelephoneOutboundFill/></button></a></span>
          </div>

        </Fragment>
    )

}