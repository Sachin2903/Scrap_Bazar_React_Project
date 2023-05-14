import { Fragment,useEffect,useRef } from 'react';
import './App.css';
import { Master } from './components/templates/master';
function App() {
   const load =useRef();
   const loadsecond =useRef();
   const main =useRef();
   useEffect(()=>{
const clear=setTimeout(()=>{
  loadsecond.current.style.display="none";
      load.current.style.display="none";
      main.current.style.display="block";
    },5000)
 return ()=>{
  clearTimeout(clear)
 }
   },[])

  return (
    <Fragment>
    <div ref={load} className="App">
      <div className="loader">
        <div className='toploader'></div>
        <div ref={loadsecond} className='loaderbox'>
          <div className='a'><div className='green'></div></div>
          <div className='b'><div className='red'></div></div>
          <div className='c'><div className='orange'></div></div>
          <div className='d'><div className='white'></div></div>
        </div>
      </div>
    </div>
    <div ref={main} className='secondpart'>
    <Master/>
    </div>
    
    </Fragment>
  );
}

export default App;
