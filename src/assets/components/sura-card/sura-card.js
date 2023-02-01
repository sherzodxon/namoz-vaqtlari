import { Link } from "react-router-dom";
import "../sura-card/sura-card.scss"
const SuraCard =({enName,number,name,playing,nameArab,audio})=>{
 

return(
    <div className="sura-card">
         <p className="sura-card-number">{number}</p>
        <div className="sura-card-text-wrapper">
        <div className="sura-card-name-wrapper">
            <Link  to={`/sura/${number}`} className="sura-card-name" children={name}/>
            <p className="sura-card-enname">{enName}</p>
        </div>
        <Link  to={`/sura/${number}`} className="sura-card-name-arab" children={nameArab}/>
        </div>      
         
    </div>
)
}
export default SuraCard