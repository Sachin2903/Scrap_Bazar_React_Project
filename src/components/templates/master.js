import { Fragment } from "react";
import {Nav} from "../organisms/navigatiion/nav.js"
import {Hero} from "../organisms/hero/hero.js"
import {Sliber} from "../organisms/sliber/sliber.js"
import { Popup } from "../organisms/popup/popup.js";
import { Gallery } from "../organisms/gallery/gallery.js";
import {Partners} from "../organisms/partners/partner.js"
export function Master(){
    return(
    <Fragment>

   <Nav/>
   <Hero/>
   <Sliber/>
   <Popup/>
   <Gallery/>
   <Partners/>

    </Fragment>
    )
}