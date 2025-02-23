import Coment from "./Coment"
import"./ComentsDiv.css"
import AlertDev from "../alertMessage/Alert"
import { use, useState } from "react"
export default function ComentsDiv(){
    const[alert,setalert] = useState(true);
    return(
    <div id="coments">
                 <div className="headerBox">
            <i class="fa-solid fa-comment"></i>
                <h2 className="header">Commens</h2>
             </div>
            <div className="ComentsDiv">
                <div className="comentBox">
                    
                 <Coment name={"atef Fawzy"} message={"Thanks everyone ❤️"}/>
                 <Coment name={"Mohamed ali "} message={"Delivery on time "}/>
                 <Coment  name={"amina gallyan "} message={"Great person"}/>
                 <Coment name={"علي جمال "} message={"الله ينور ياغالي "}/>
                 <Coment name={"كاريزما "} message={"شغل يا باشا "}/>
                 <Coment name={".......؟ "} message={"بالتوفيق يا هندسه "}/>
                 <Coment name={"سالي جمال الدين "} message={".....👍😁"}/>
                </div>
                   <div className="space"></div>
                        <div className="addcoment" onClick={()=> setalert(false)}> 
                              <i class="fa-solid fa-plus"></i>
                        </div>
        </div>
        <AlertDev open={alert} setIsopen={setalert}/>
    </div> 
    )
}