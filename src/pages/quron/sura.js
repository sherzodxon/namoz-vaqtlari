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

    useEffect(() => {
        axios.get("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/uzb-muhammadsodikmu.json").then((res) => {
            setTrdata(res.data.quran.filter((el) => el.chapter == number))
        })
        axios.get(`https://api.alquran.cloud/v1/surah/${number}`).then((res) => {
            setData(res.data.data.ayahs)
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
            const searchValue = searchRef.current.value;

            if (searchValue <= maxNumber) {
                const finded = data.find((el) => el.numberInSurah == searchValue)
                setData([finded])
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
                 <div className="suralar-header">
                <form onSubmit={handleSearch} className="search-form">
                    <p className="sura-number">{findElement.number}</p>
                    <h2 className="form-title">{findElement.nameUz}</h2>
                <input ref={searchRef} placeholder="00"  type="number" className="search-input oyat-input" />
                <button className="search-button"></button>
                </form>
            </div>
                <div className="suralar-container container">
                    <audio preload="auto" id="audio" src={findElement.audio}></audio>
                    <div className="sura-text-wrapper">
                    {data.map((el)=><OyatCard number={el.numberInSurah} key={el.numberInSurah} arabtext={el.text} text={trData[el.numberInSurah -1].text} />)}
                    </div>
              <div className="sura-bottom-wrapper">
                <Link to={"/suralar"} className="back-button bottom-button" />
                <button className="hamburger-button sura-button"></button>
                <button onClick={toggle} className={playing? "play-button": "pause-button"}></button>
                <button className="text-button sura-button">Aa</button>
                <button className="menu-button sura-button"></button>
              </div>
                </div>
            </div>

        )
    }


}
export default Sura