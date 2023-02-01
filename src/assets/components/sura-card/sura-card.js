import { Link } from "react-router-dom";
import PrayerQuron from "../audio/audio-quron";
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
         
        <PrayerQuron  to={number} control={playing}  url={audio}/>
    </div>
)
}
export default SuraCard