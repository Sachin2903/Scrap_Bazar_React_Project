import { Fragment } from "react";
import {Nav} from "../organisms/navigatiion/nav.js"
import {Hero} from "../organisms/hero/hero.js"
import {Sliber} from "../organisms/sliber/sliber.js"
export function Master(){
    return(
    <Fragment>

   <Nav/>
   <Hero/>
   <Sliber/>

    </Fragment>
    )
}