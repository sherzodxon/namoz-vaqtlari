import {
    useState
} from "react"
import {
    Link
} from "react-router-dom"
import { useLocation } from "../../../contexts/context"
import Player from "../audio/audio"
import '../morningCard/morning-card.scss'
const MorningCard = ({ to, name, audio, playing}) => {
    

     return(
        <div  className="morning-card">
            <Link to={`/tonggi-zikrlar/${to}`} children={name} 
            className="morning-card-link" />
            <div  className="morning-play-controller">
            <Player  to={to} control={playing} url={require("../audio/simge.mp3")} />
            </div>

        </div>
    )
}
export default MorningCard