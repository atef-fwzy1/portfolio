import data_unrepeted from "../../data";
import Card from "./Card";
import "./Allskiles.css"
export default function AllSkiles(){

      const  renderCards = data_unrepeted.map((el, index) => {
        return <Card key={index} cardName={[el.url,el.name]} />;
      });
   
    return(
    <div className=".d-flex data_unrepeted" >
     {renderCards}
    </div>
    )
}