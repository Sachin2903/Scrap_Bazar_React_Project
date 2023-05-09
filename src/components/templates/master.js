import {About} from "../organisms/about/about"
import {Main} from "../organisms/main/main"
import { Navbar } from '../organisms/navbar/navbar';
import { Price } from "../organisms/price/price";
import { Fragment,useEffect } from "react";
import {Schedule} from "../organisms/schedule/schedule.js"
import {Contact} from "../organisms/contact/contact.js"
import Aos from "aos";
import "aos/dist/aos.css";

export function Master(){

    useEffect(()=>{
           Aos.init({duration:2000});
    },[])
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