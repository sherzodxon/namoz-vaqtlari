import axios from "axios";
import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";
export const DataLocation = createContext();

const DataProvider = ({children}) => {
    
    const [location, setLocation] = useState(null);
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    if (navigator.geolocation) {
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
                    city:res.data.city
                })
            });
        }
    }, [latitude])
    
    if (!location) {
        return null
    }
    return(
        <DataLocation.Provider value={{location,setLocation}}>
            {children}
        </DataLocation.Provider>
    )
}
export const useLocation=()=>{
    return useContext(DataLocation)
}
export default DataProvider