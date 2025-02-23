import"./Coment.css"
export default function Coment({name,message}){
    return(
        <div className="coment">
             
                 <div className="info">
                 <img src={`./acount/profile(${Math.floor(Math.random() * 9) + 1}).png`} alt="err"/>
                 <div>
                    <h2 className="name">{name}</h2>
                    <p className="coment">{message}</p>
                 </div>
                 </div>
                 <span className="data">12/20/2025</span>
             
        </div>
    )
}