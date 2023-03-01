import { Link } from 'react-router-dom';
import {useLocation} from '../../contexts/context'
import '../map/map.scss'
import LinkBox from "../../assets/components/link-box/link-box"
import Control from "../../assets/components/control/control"
import Header from "../../assets/components/header/header"
const Map=()=>{
    const {location} = useLocation();
  
    return(
        <div className="map">
            <Header />
            <div className="background"></div>
            <div className="map-container container">
                <LinkBox/>
                <div className="map-main zikr-main main">
                  
                    <div className="map-body zikr-body">
                    <Control className={"map-control"}/>
                    <div className="map-header">
                    <h3 className="map-country">{location.country}</h3>
                    <p className="map-city">{location.locality}</p>
                </div>
                 <iframe className='map-iframe' src={`https://maps.google.com/maps?q=${location.latitude}, ${location.longitude}&output=embed`} ></iframe>
                    </div>
                </div>
            <div className="map-bottom">
            <Link to={"/"} className="map-back-button bottom-button back-button suralar-button"/>
            </div>
            </div>

        </div>
    )
}
export default Map