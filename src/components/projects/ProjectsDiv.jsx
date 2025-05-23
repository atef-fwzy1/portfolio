import"./projectsDiv.css"
import ProgectCard from "./ProjectCard"
import Button from "../Button/Button"
export default function Progects(){

const progects = [
    {
     name:"Movies App ",
     linke:"https://luxory-ecommerce.netlify.app/",
     git:"https://github.com/atef-fwzy1/Movies-.git",
     image:"https://res.cloudinary.com/dfbgnqvbi/image/upload/v1747948627/Screenshot_2025-05-23_001453_zu264i.png"
    },
    {
        name:"bandi App ",
        linke:"https://effortless-duckanoo-c3c952.netlify.app/",
        git:"https://github.com/atef-fwzy1/Bondi.git",
        image:"https://res.cloudinary.com/dfbgnqvbi/image/upload/v1747948907/Screenshot_2025-05-23_002004_wjabq9.png"
       },
    {   name:"games App ",
       linke:"https://games-site114.netlify.app/",
       git:"https://github.com/atef-fwzy1/games-.git",
       image:"https://res.cloudinary.com/dfbgnqvbi/image/upload/v1747949018/Screenshot_2025-05-23_002249_wxywxq.png"
    },{
        name:"coofee App ",
        linke:"https://coffee-office.netlify.app/",
        git:"https://github.com/atef-fwzy1/Coffee_Klang.git",
        image:"https://res.cloudinary.com/dfbgnqvbi/image/upload/v1747949276/Screenshot_2025-05-23_002559_hssmhj.png"
    },
    {
        
            name:"faceBook clone  ",
            linke:"https://face-book-clone-small.netlify.app/",
            git:"https://github.com/atef-fwzy1/faceBook-Clone-front-.git",
            image:"https://res.cloudinary.com/dfbgnqvbi/image/upload/v1747949552/Screenshot_2025-05-23_003100_rzebem.png"
    },{
         name:"Movies app  ",
            linke:"https://movies-site112.netlify.app/",
            git:"https://github.com/atef-fwzy1/Movies-.git",
            image:"https://res.cloudinary.com/dfbgnqvbi/image/upload/v1747950428/Screenshot_2025-05-23_004635_igroke.png"
    }
]
     const showApp = progects.map((ele)=>{
        return(
            <ProgectCard name = {ele.name} linke = {ele.linke} image = {ele.image} git = {ele.git}/>
        )
     })
    return(
            
        <div id="projects">
             <div className="headerBox">
            <i class="fa-regular fa-folder-open"></i>
                <h2 className="header">My Progects</h2>
             </div>
            <div className="ProgBox">
            {showApp}
        </div>
            <Button value={"Show All"} />
        </div>
    )
}