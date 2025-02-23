import "./projectsCard.css"
export default function ProgectCard(){
    return(
        <div className="ProgectCard">
             <img src="Screenshot 2025-01-30 162645.png" alt="err"/>
                  
              <div className="text">
                     <h3 className="title">progect title</h3>
                     <span className="descraption">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ab hic quisq 
                        expedita dolorem repellendus nulla fuga exercitationem ut facere temporibus! Deserunt.</span>
                        <div className="links">
                              <div className="git">
                                         <i class="fa-solid fa-link"></i>
                                         <i class="fa-brands fa-github"></i>
                              </div>
                              <span className="more">more<i class="fa-solid fa-right-long"></i></span>

                        </div>
              </div>
        </div>
    )
}