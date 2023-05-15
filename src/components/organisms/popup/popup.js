import { Fragment,useRef,useEffect } from "react";
import styles from "./popup.module.css";
import offerlogo from "../../../image/popoffer.jpg";
export function Popup() {
    const timetake=useRef(20000);
    const poppop=useRef();
    useEffect(()=>{
        timetake.current=Math.floor((Math.random()*20000)+20000);
        
        const idd=setTimeout(()=>{
            poppop.current.style.display="block";
          
        },timetake.current)

        return ()=>{
             clearTimeout(idd);
        }

    },[])

    function popclose(){
        poppop.current.style.display="none";
    }

    return (
        <Fragment>
            <div className={styles.popback} ref={poppop}>
                <div className={styles.offer}>
                    <img alt="loading" className={styles.offerimg} src={offerlogo} />
                    <div className={styles.content}> <h4 className={styles.head}>Dear valued customer,here's 50% off coupon for you.Offer expires soon</h4>
                        <h6 className={styles.headtext}>Apply <span>TRAVEL2023</span> to enjoy this special discount</h6>
                        <span><button onClick={popclose} className={styles.btn1}>Claim my coupon</button><button onClick={popclose} className={styles.btn2}>No thanks</button></span>
                    </div>
                </div>
            </div>

        </Fragment>

    )

}


