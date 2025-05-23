import { Link } from "react-router-dom"
import "./projectsCard.css"
export default function ProgectCard(props){
    return(
        <div className="ProgectCard">
             <img src={props.image} alt="err"/>
                  
              <div className="text">
                     <h3 className="title">{props.name}</h3>
                        <div className="links">
                              <div className="git">
                                        <Link to={props.linke}> <i class="fa-solid fa-link"></i></Link>
                                        <Link to={props.git}><i class="fa-brands fa-github"></i></Link>
                              </div>

                        </div>
              </div>
        </div>
    )
}