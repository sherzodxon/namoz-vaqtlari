import {
    Link
} from "react-router-dom"
import Player from "../audio/audio"
import '../morningCard/morning-card.scss'
const MorningCard = ({ to, name, audio, playing}) => {
    

     return(
        <div className="morning-card"  >
            <div>
            <Link to={`/tonggi-zikrlar/${to}`} className="morning-links" />
            <h3 children={name} 
             className="morning-card-link"></h3>
            </div>
            
           <div  className="morning-play-controller">
            <Player  to={to} control={playing} url={`${audio}`} />
           </div>

        </div>
       
    )
}
export default MorningCard