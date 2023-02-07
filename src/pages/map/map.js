import { Link } from 'react-router-dom';
import {useLocation} from '../../contexts/context'
import '../map/map.scss'
const Map=()=>{
    const {location,setLocation} = useLocation();
  
    return(
        <div className="map">
            <div className="map-container container">
                <div className="map-header">
                    <h3 className="map-country">{location.country}</h3>
                    <p className="map-city">{location.locality}</p>
                </div>
            <iframe className='map-iframe' src={`https://maps.google.com/maps?q=${location.latitude}, ${location.longitude}&output=embed`} ></iframe>
            <div className="map-bottom">
            <Link to={"/"} className="map-back-button bottom-button back-button suralar-button"/>
            </div>
            </div>

        </div>
    )
}
export default Map