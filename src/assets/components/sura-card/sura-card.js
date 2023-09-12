import { Link } from "react-router-dom";
import "../sura-card/sura-card.scss"
const SuraCard =({enName,number,name,playing,nameArab,audio})=>{
 

return(
    <div className="sura-card">
         <p className="sura-card-number">{number}</p>
         <Link className="morning-links"  to={`/sura/${number}`}/>
        <div className="sura-card-text-wrapper">
       
        <div className="sura-card-name-wrapper">
           
            <h3 className="sura-card-name" children={name}></h3>
            <p className="sura-card-enname">{enName}</p>
        </div>
        <h3 className="sura-card-name-arab" children={nameArab}></h3>
        </div>      
         
    </div>
)
}
export default SuraCard