import { useEffect, useState } from "react";
import"./all.min.css"
import"./components/Button/button.css"
import './App.css';
import Header from"./components/1-header/Header"
import Hero from './components/2-hrro/Hero';
import AllSkiles from "./components/animation/AllSkills";
import AnimationPage from "./components/animation/AnimatonPage";
import Progects from "./components/projects/ProjectsDiv";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/footer/Footer";
import Skills from"./components/skills/skills.jsx"
import About from "./components/about/about.jsx";
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


  return (
    <div className="App containetr" id="contact">
          <Header/>
          <Hero/>
          <About />
          <div className='sections-end'></div>
          <Skills/>
        
     <AnimationPage/>
            
           
        
          <div className='sections-end' style={{padding:"0",margin:"0"}}></div>

        
         <div className="ComentProgectBox">
         
           <Progects/>
             
    
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
