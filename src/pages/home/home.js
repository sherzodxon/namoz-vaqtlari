import axios from "axios";
import {
    useState,
    useEffect
} from "react";
import Header from "../../assets/components/header/header";
import LinkBox from "../../assets/components/link-box/link-box";
import Loader from "../../assets/components/loader/loader";
import Timings from "../../assets/components/timings/timings";
import "../home/home.scss"

import '../../assets/scss/main.scss';
import { useLocation } from "../../contexts/context";

const Home = () => {
    const {location, setLocation}=useLocation();
    const [posts, setPosts] = useState(0);
    const [isLoading, setLoading] = useState(false);
console.log(location);
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
        <div className="home">
            <div className="background"></div>
        <Header className={"home-location"}/>
        <div className="home-container">
            <LinkBox />
            <Timings posts={posts} isLoading={isLoading} />
        </div>
        </div>
    )

}
export default Home