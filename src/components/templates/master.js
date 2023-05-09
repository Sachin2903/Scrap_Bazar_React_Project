import {About} from "../organisms/about/about"
import {Main} from "../organisms/main/main"
import { Navbar } from '../organisms/navbar/navbar';
import { Price } from "../organisms/price/price";
import { Fragment } from "react";
import {Schedule} from "../organisms/schedule/schedule.js"
import {Contact} from "../organisms/contact/contact.js"
export function Master(){
return (
<Fragment>
    <Navbar/>
    <Main/>
    <About/>
    <Price/>
   <Schedule/>
   <Contact/>
   


</Fragment>

)

}