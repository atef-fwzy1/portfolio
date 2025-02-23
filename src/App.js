import { useEffect, useState } from "react";
import"./all.min.css"
import"./components/Button/button.css"
import './App.css';
import Header from"./components/1-header/Header"
import Hero from './components/2-hrro/Hero';
import AllSkiles from "./components/animation/AllSkills";
import AnimationPage from "./components/animation/AnimatonPage";
import Progects from "./components/projects/ProjectsDiv";
import ComentsDiv from "./components/ComentsSection/ComentsDiv";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/footer/Footer";
function App() {

// useEffect(()=>{
  window.addEventListener("scroll",()=>{
    if(window.scrollY >= 1200)
      document.querySelector(".scroll").classList.add("see")
      else{
        document.querySelector(".scroll").classList.remove("see")

      }
   
    
  })
// },[])

  const [handelSkiles,sethandelSkiles]=useState(true);
  return (
    <div className="App containetr" id="contact">
          <Header/>
          <Hero/>
          <div className='sections-end'></div>
          {
            handelSkiles? <AnimationPage/>:<AllSkiles/>
            
           
          }
          <div className='sections-end' style={{padding:"0",margin:"0"}}></div>
             <button class="btn btn-2"  onClick={()=>sethandelSkiles((prev)=>prev?false:true)}>{handelSkiles?"more":"less"}</button>

        
         <div className="ComentProgectBox">
         
           <Progects/>
             
          <ComentsDiv/>
         </div>
          <div className='sections-end'></div>
          <ContactUs/>
          <div className='sections-end'></div>
          <Footer/>
          <a href="#hero">  <button className="scroll"><i class="fa-solid fa-chevron-down"></i></button></a>
    </div>
  );
}

export default App;
