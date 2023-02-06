import axios from "axios";
import {
    useRef,
    useState,
    useEffect
} from "react";
import Loader from "../../assets/components/loader/loader";
import Timings from "../../assets/components/timings/timings";


import '../../assets/scss/main.scss';
import { useLocation } from "../../contexts/context";

const Home = () => {
    const {location, setLocation}=useLocation();
    const [posts, setPosts] = useState(0);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (location) {
            axios.get(`https://api.aladhan.com/v1/timingsByAddress?address=${location.city},%20${location.country}`).then((res) => {
                setPosts(res.data);
                setLoading(false)
            });
        }
    
    }, [])
  
if (!posts) {
    return(
        <Loader/>
    )
}
    return(
        <>
        <p className="visually-hidden">Prayer Time</p>
        <Timings posts={posts} isLoading={isLoading} />
      
        </>
    )

}
export default Home