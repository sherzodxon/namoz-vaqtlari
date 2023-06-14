import axios from "axios";
import {
    useEffect,
    useRef,
    useState
} from "react";
import {
    Link,
    useParams
} from "react-router-dom";
import OyatCard from "../../assets/components/oyat-card/oyat-card"
import {
    useLocation
} from "../../contexts/context";
import LinkBox from "../../assets/components/link-box/link-box"
import Control from "../../assets/components/control/control"
import Header from "../../assets/components/header/header"
const Sura = () => {
    const {
        number
    } = useParams()
    let [data, setData] = useState(null);
    const [trData, setTrdata] = useState(null);
    const [loading, setLoading] = useState(true);
    const {
        location,
        setLocation
    } = useLocation();
    const [post, setPost] = useState(null);
    const findElement = location.quronApi.find((el) => el.number == number);
    const [playing, setPlaying] = useState(true);
    const searchRef = useRef();
     console.log(loading);
    useEffect(() => {
        axios.get("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/uzb-muhammadsodikmu.json").then((res) => {
            setTrdata(res.data.quran.filter((el) => el.chapter == number));
           
        })
        axios.get(`https://api.alquran.cloud/v1/surah/${number}`).then((res) => {
            setData(res.data.data.ayahs);
            setPost(res.data.data.ayahs)
            setLoading(false)
        })
    }, [])
   
  
    if (loading && !trData && !data) {
        return(
            <div className="quron-loader"></div>
        )
    } else if (data && trData) {
        let maxNumber = 0;

        data.forEach(element => {
            maxNumber = element.numberInSurah
        });
 
        function handleSearch(evt) {
            evt.preventDefault();
            const searchValue = +searchRef.current.value;
           
             if (searchValue <= maxNumber) {
                const finded = data.filter((el)=>{
                    const searchRegExp = new RegExp(searchValue, "gi");
                    const searchText = `${el.numberInSurah}`;
                    return searchText.match(searchRegExp);
                })
                setData(finded)
             }
              
            if (searchValue == "") {
                setData(post)
            }
            
        }
       
        const toggle = () => {
            const audios =document.querySelector("#audio");
           
            if (audios) {
                setPlaying(!playing)
                playing? audios.play():audios.pause();
            }
           
        }
     
        return(
            <div className="sura">
                <div className="background"></div>
                <Header />
                <div className="suralar-container container">
                    <LinkBox/>
                <div className="suralar-main names-main main">
                    <div className="suralar-body">
                    <Control />
                <div className="suralar-header sura-header">
                   <form  className="search-form">
                    <p className="sura-number">{findElement.number}</p>
                    <h2 className="form-title">{findElement.nameUz}</h2>
                    <input onChange={handleSearch} ref={searchRef} placeholder="00"  type="number"  className="search-input oyat-input" />
                    </form>
                 </div>
                 <div className="suralar-buttons">
                 <button onClick={toggle} className={playing? "play-button sura-button play-white": "pause-button sura-button pause-white"}></button>
                 <Link to={"/suralar"} className="hamburger-button sura-button hamburger-white"/>
                  </div>
                    <audio preload="auto" id="audio" src={findElement.audio}></audio>
                    <div className="sura-text-wrapper">
                    {data.map((el)=><OyatCard number={el.numberInSurah} key={el.numberInSurah} arabtext={el.text} text={trData[el.numberInSurah -1].text} />)}
                    </div>
             
                    </div>
                </div>
                <div className="sura-bottom-wrapper">
                <Link to={"/suralar"} className="back-button bottom-button" />
                <Link to={"/suralar"} className="hamburger-button sura-button"/>
                <button onClick={toggle} className={playing? "play-button sura-button": "pause-button sura-button"}></button>
                <button className="text-button sura-button">Aa</button>
                <button className="menu-button sura-button"></button>
              </div>
                </div>
                
            </div>

        )
    }


}
export default Sura