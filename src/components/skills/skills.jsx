import "./skilss.css"
export default function Skills(){
  const skills = [

  {
    aria_valuenow:"99%",
    name:"HTML",
  },
  {
    aria_valuenow:"89%",
    name:"CSS",
  },
  {
    aria_valuenow:"88%",
    name:"JS",
  },
  {
    aria_valuenow:"85%",
    name:"BOOTSTRAP",
  }, {
    aria_valuenow:"70%",
    name:"JAVA",
  }, {
    aria_valuenow:"85%",
    name:"C++",
  },{
    aria_valuenow:"90%",
    name:"NODE",
  },{
    aria_valuenow:"95%",
    name:"EXPRESS",
  },{
    aria_valuenow:"90%",
    name:"MOBGOO DB",
  },{
    aria_valuenow:"95%",
    name:"TAILWIND ",
  },{
    aria_valuenow:"70%",
    name:"PYTHON ",
  },
  

  ]

  let therd = [];
  const showSkills = skills.map((ele,ind)=>{
   therd.push(
      <div class="progress">
                <span class="skill"><span>{ele.name}</span> <i class="val">{ele.aria_valuenow}</i></span>
                <div class="progress-bar-wrap">
                  <div style={{width:ele.aria_valuenow}} class="progress-bar" role="progressbar" aria-valuenow={ele.aria_valuenow} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
    )
    if(ind % 3 == 0 || ind == skills.length - 1  ){
         therd = []
      return(
        <div class="col-lg-6">
          {therd}
        </div>
      )
    }
  })
    return(
        <section id="skills" class="skills section light-background" style={{backgrounDcolor:"#f4fafd",padding:"7px"}}>

        <div class="container section-title" data-aos="fade-up">
          <h2 className="frist">Skills</h2>
          <p className="secound">These are not all the skills. There are other skills, libraries, and helpful things.</p>
        </div>
  
        <div class="container" data-aos="fade-up" data-aos-delay="100">
  
          <div class="row skills-content skills-animation">
  
            
  
          {showSkills}
  
          </div>
  
        </div>
  
      </section>
    )
}