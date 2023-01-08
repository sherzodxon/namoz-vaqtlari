import axios from "axios";
import {
    useRef,
    useState,
    useEffect
} from "react";
import { Link } from "react-router-dom";
import Timings from "../../assets/components/timings/timings";

import '../../assets/scss/main.scss';

const Home = () => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude)
    });
}
   
       return(
        <>
        <p>Prayer Time</p>
        <Timings latitude={latitude} longitude={longitude}/>
        </>
       )
}
export default Home