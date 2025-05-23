import "./about.css"
import image from "../../assets/images/٢٠٢٥٠٥١٥ss_٢١٣٦٢٧.jpg"
export default function About(){
    return(

    <section id="about" class="about section" style={{margin:"60px 0px"}}>


      <div class="container section-title" data-aos="fade-up">
        <h2  className="frist">About</h2>
        <p className="secound" style={{padding:"10px 0px "}}>

        I'm a FullStck dev (Mern) Developer with a strong passion for building modern, user-friendly web applications. I specialize in React.js, and I have hands-on experience with JavaScript (ES6+), SCSS, React Router, Axios, and Context API.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4 justify-content-center align-items-center"  style={{textAlign:"center"}}>
          <div class="col-lg-4" style={{width:"fit-content"}}>
            <img src={image}className="img-fluid" alt="" />
          </div>
          <div class="col-lg-8 content">
            <h2 className="frist">FullStck dev (Mern) &amp; Web Developer.</h2>
            <p className="fst-italic py-3 secound">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div class="row edit ">
              <div class="col-lg-6" style={{width: "fit-content"}}>
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong className="frist">Birthday:</strong> <span className="secound">3 March 2003</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong className="frist"> Website:</strong> <span className="secound">lafwzy@gmail.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong className="frist">Phone:</strong> <span className="secound">+20 01143659774</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong className="frist">City:</strong> <span className="secound">Sohag, Egypt</span></li>
                </ul>
              </div>
              <div class="col-lg-6"  style={{width: "fit-content"}}>
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong className="frist">Age:</strong> <span className="secound">22</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong className="frist">Degree:</strong> <span className="secound">Master</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong className="frist">Email:</strong> <span className="secound">lafwzy@gmail.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong className="frist"> Freelance:</strong> <span className="secound">Available</span></li>
                </ul>
              </div>
            </div>
           
          </div>
        </div>

      </div>

    </section>
    )
}