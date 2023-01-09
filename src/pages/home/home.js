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
    

       return(
        <>
        <p>Prayer Time</p>
        <Timings />
        </>
       )
}
export default Home