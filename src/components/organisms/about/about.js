import styles from "./about.module.css"
import { Fragment } from "react"
export function About() {
    return (
        <Fragment>
            <div id="ABOUT" className={styles.aboutcomp} data-aos="fade-up">
                <p className={styles.start}>How it works</p>
                <div className={styles.why}>
                    <div data-aos="fade-up-right" className={styles.schedule}>
                        <h2 className={styles.whytxt}>Schedule a pickup</h2>
                    </div>
                    <div data-aos="zoom-in"className={styles.pick}>
                        <h2 className={styles.whytxt}>Pickup at your address</h2>
                    </div>
                    <div data-aos="fade-up-left" className={styles.payment}>
                        <h2 className={styles.whytxt}>Receive payment</h2>
                    </div>

                </div>

            </div>


        </Fragment>

    )
}