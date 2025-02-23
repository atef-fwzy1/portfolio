import"./projectsDiv.css"
import ProgectCard from "./ProjectCard"
import Button from "../Button/Button"
export default function Progects(){
    return(
            
        <div id="projects">
             <div className="headerBox">
            <i class="fa-regular fa-folder-open"></i>
                <h2 className="header">My Progects</h2>
             </div>
            <div className="ProgBox">
            <ProgectCard/>
            <ProgectCard/>
            <ProgectCard/>
            <ProgectCard/>
        </div>
            <Button value={"Show All"}/>
        </div>
    )
}