import { useRef, useEffect, useState } from "react";
import "./animation.css"
export default function Card({cardName,type="defaule"}) {
  return (
    <div  className="bubble">
        {
            type==="animation-sec"?<><img src={`./skillsIcons/${cardName[0]}`} alt="err"/>
            <span className="skile_name">{cardName[1]}</span></>:<div attr={cardName[1]}  className="box-logo"><img src={`./skillsIcons/${cardName[0]}`} alt="err"/></div>
        }
            
    </div>
  );
}