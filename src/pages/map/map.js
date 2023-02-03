import {useLocation} from '../../contexts/context'
const Map=()=>{
    const {location,setLocation} = useLocation();
  
    return(
        <div className="map">
            <div className="map-container container">
            <iframe src={`https://maps.google.com/maps?q=${location.latitude}, ${location.longitude}&output=embed`} width="450" height="470" ></iframe>
            </div>
            <div className="map-botto"></div>
        </div>
    )
}
export default Map