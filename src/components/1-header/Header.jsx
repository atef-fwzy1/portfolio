import { useState } from "react"
import "./header.css"
import { useContext } from "react"
import { Mode } from "../../context/contextMode"
import { NavLink } from "react-router-dom";
export default function Header(){
    const changeMode = useContext(Mode);
   const[isOPen,setIsOpen]=useState(false)
    const[mode ,setMode] = useState("light")
    function chaingeMode(){
      const bodyElement =   document.getElementsByTagName("body")
      if(mode === "night"){
  bodyElement[0].classList.remove("light")
          setMode("light")
      }
    else{
    bodyElement[0].classList.add("light")
        setMode("night")
    } 
    }
    changeMode.setMode(mode);
    function ListOpen(ele){
      if(ele === "none")
        setIsOpen(false)
    else
    setIsOpen(true)

    }
    return(
         <div className="header">
          <ul className="lageDevice">
            <li><NavLink  to="#" >about</NavLink> </li>
            <li><NavLink  to="#">Articles</NavLink> </li>
            <li><NavLink  to="#">Projects</NavLink> </li>
          
            <li><NavLink  to="#" >users</NavLink> </li>
            <li><NavLink to="#">contact </NavLink></li>
          </ul>
          
          <div onClick={()=>ListOpen("open")}  className="list">

            <i  onClick={()=>ListOpen("open")} className=" fa-solid fa-list"></i>
          </div>
            <div onClick={()=>ListOpen("none")} style={{display:isOPen?"block ":"none"}} className="mobileCont">
          <ul   className="smaillDevice">
            
           <li>   <i onClick={()=>ListOpen("none")} className="hidenList fa-regular fa-circle-xmark"></i></li>
            <li><NavLink  to="rate" >about</NavLink> </li>
            <li><NavLink  to="#">Articles</NavLink> </li>
            <li><NavLink  to="#">Projects</NavLink> </li>
          
            <li><NavLink  to="#" >users</NavLink> </li>
            <li><NavLink to="#">contact </NavLink></li>
          </ul>
            </div>

          <div className="modes" onClick={chaingeMode}>
              <div className={`icon ${mode}`}>
                    <i class="fa-solid fa-moon"></i>
                    <i class="fa-solid fa-sun"></i>
              </div>
          </div>
         </div>
    )
}