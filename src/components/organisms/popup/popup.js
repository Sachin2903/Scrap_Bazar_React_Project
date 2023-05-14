import { Fragment } from "react";
import styles from "./popup.module.css";
import offerlogo from "../../../image/popoffer.jpg";
export function Popup() {
    return (
        <Fragment>
            <div className={styles.popback}>
                <div className={styles.offer}>
                    <img className={styles.offerimg} src={offerlogo} />
                    <div className={styles.content}> <h4 className={styles.head}>Dear valued customer,here's 50% off coupon for you.Offer expires soon</h4>
                        <h6 className={styles.headtext}>Apply <span>TRAVEL2023</span> to enjoy this special discount</h6>
                        <span><button className={styles.btn1}>Claim my coupon</button><button className={styles.btn2}>No thanks</button></span>
                    </div>
                </div>
            </div>

        </Fragment>

    )

}


