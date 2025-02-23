import "./hero.css"
import { useContext } from "react"
import Lottie from "lottie-react";
import DeveloperAnimation from"../../animation/DeveloperAnimation .json"
import { Mode } from "../../context/contextMode"
export default function Hero(){
    const ModePage = useContext(Mode)
    return(
        <div className="hero" id="hero">
         <div className="left-section">
              <div className="image-con">
                      <img className="avatar" src="./me-icon.png" alt="error"/>
                      <img className="virifyed" src="./verified.png" alt="error"/>
                       <span className="outer"><span className="iner"></span>Online</span>
               </div> 
                <div className="text-cont" style={{padding:"0px 9px"}}>
                     <h1>Software Engineer , Mern Stack Developer .</h1>
                     <span>I’m Atef, a Software Engineer  and Mern Stack Dev  based in EGYPT. Countact Us To More Information</span>
                </div>
                <ul className="linkes">
                    {
                        ModePage.mode ==="light"?
                    <> <li><a src="#"><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a src="#"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a src="#"><i class="fa-brands fa-square-whatsapp"></i></a></li>
                    <li><a src="#"><i class="fa-brands fa-github"></i></a></li>
                    <li><a src="#"><i class="fa-brands fa-linkedin"></i></a></li></>
                    :
                    <>
               
                    <li><a src="#"><img src="./icons/icons8-facebook.svg" alt="icon"/></a></li>
                    <li><a src="#"><img src="./icons/icons8-instagram.svg" alt="icon"/></a></li>
                    <li><a src="#"><img src="./icons/icons8-whatsapp.svg" alt="icon"/></a></li>
                    <li><a src="#"><img src="./icons/icons8-github.svg" alt="icon"/></a></li>
                    <li><a src="#"><img src="./icons/icons8-linkedin.svg" alt="icon"/></a></li>
                    </>
                    }

                </ul>
              
         </div>
         <div className="right-section">
             <Lottie style={{width:"90%"}} animationData={DeveloperAnimation} /> 
         </div>
        </div>
    )
}