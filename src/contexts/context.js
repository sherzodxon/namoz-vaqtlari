import axios from "axios";

import {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState
} from "react";
import { mentionApi } from "../api/mention";
import { namesApi } from "../api/namesApi";
import { quronApi } from "../api/quronApi";
import "../contexts/contexts.scss"
export const DataLocation = createContext();

const DataProvider = ({children}) => {
    const cityRef = useRef();
    const countryRef =useRef();
    const [location, setLocation] = useState(null);
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [status,setStatus]=useState(false)

    if(!status){
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude)
        });
    }
    useEffect(() => {
        if (latitude) {
            axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${(latitude)}&longitude=${longitude}`).then(res => {
                setLocation({
                    continent:res.data.continent,
                    country:res.data.countryName,
                    locality:res.data.locality,
                    city:res.data.city || "Tashkent",
                    namesApi:namesApi,
                    mentionApi:mentionApi,
                    quronApi:quronApi
                    
                })
            });
            setStatus(true)
        }
    }, [latitude])

     function handleSubmit(evt) {
        evt.preventDefault();
        const cityValue = cityRef.current.value;
        const countryValue =countryRef.current.value;

        setLocation({
        continent:"Asia",
        country:countryValue,
        locality:cityValue,
        city:"Tashkent",
        namesApi:namesApi,
        mentionApi:mentionApi,
        quronApi:quronApi
       })
       setStatus(true)
       
     }
 
    if (!status && !location) {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude)
        });
     return(
        <>
        <div className="location-continer container">
        <h2 className="location-title">Joylashuvingizni tanlang</h2>
    <form className="location-form " onSubmit={handleSubmit}>
        <input className="location-input location-city-input" ref={cityRef} type="search" pattern="[A-z]*" title="Shahar" placeholder="Shahar" required/>
        <input className="location-input" ref={countryRef} type="search" pattern="[A-z]*" title="Davlat" placeholder="Davlat" required/>
        <button className="location-button"></button>   
    </form>
    </div>
    <div className="location-img-wrapper">
        <img src={require('../assets/img/karta.jpg')} alt="karta" className="location-img" />
    </div>
    
        </>
       
     )
    }
 
    if (location) {
        return(
            <DataLocation.Provider value={{location,setLocation}}>
                {children}
            </DataLocation.Provider>
        ) 
    }
   
}
export const useLocation=()=>{
    return useContext(DataLocation)
}
export default DataProvider