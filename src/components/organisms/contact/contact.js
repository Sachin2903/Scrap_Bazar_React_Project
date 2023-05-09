import { Fragment } from "react";
import styles from "./contact.module.css";
import so from "../../../image/social.png"
import play from "../../../image/playstore.png"
import logo from "../../../image/ScrapLogo.png"
export function Contact() {
    return (
        <Fragment>
            <div id="detail" className={styles.contactbox}>
                <div className={styles.contact}>
                    <h4>Contact US</h4>
                    <p>+916742890052<br /> team@ScrapBazar.in<br />Customer Support available<br />from 10am - 7pm<br />Find Us On</p>
                    <img className={styles.social} alt="Loading.." src={so} />
                </div>
                <div className={styles.download}>
                    <h4>Download the ScrapBazar App</h4>
                    <img className={styles.playstore} alt="Loading.." src={play} />
                </div>
                <div className={styles.extra}>
                    <img className={styles.logo} alt="Loading.." src={logo} />
                    <h4>SELL YOUR SCRAP HERE !</h4>



                </div>


            </div>

        </Fragment>
    )



}