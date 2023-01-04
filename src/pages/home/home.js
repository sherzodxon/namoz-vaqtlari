import {
    QueryCLient,
    useQueryClient,
    useMutation,
    useQuery
} from "@tanstack/react-query";
import axios from "axios";
import {
    useMemo,
    useRef,
    useState,
    useEffect
} from "react";
import {
    fakeApi
} from '../../api/fakeApi'
import {
    getFirstApi,
    getTimeApi
} from "../../api/api";

const Home = () => {
    const [city, setCity] = useState("Bekobod")
    const [post, setPost] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    let timesData = 0;
    let time = 0;
    const countryRef = useRef();
    const cityRef = useRef();
    const {
        data: timeDate,
        isLoading: timeLoading
    } = useQuery(['timeDate'], getTimeApi);

    const {
        data: posts,
        isLoading,
        isError
    } = useQuery(['posts'], getFirstApi);

    if (!isLoading) {
        timesData = post.data || posts.data;
        
    }
    useEffect(()=>{
        if (post) {
            axios.get(`https://api.aladhan.com/v1/currentTime?zone=${post.data.meta.timezone}`).then((res) => setCurrentTime(res.data));
          
            }
    },[post])
   
    if (!timeLoading ) {
        time = currentTime.data || timeDate.data
    }

    function handleSubmitButton(evt) {
        evt.preventDefault();
        const countryValue = countryRef.current.value;
        const cityValue = cityRef.current.value;
        setCity(cityValue)
        axios.get(`https://api.aladhan.com/v1/timingsByAddress?address=${cityValue},%20${countryValue}`).then((res) => setPost(res.data));
    }
    
    if (isLoading) {
        return(
        <p>Yuklanmoqda...</p>
        )
    }
    else if (isError) {
        <p className="error">404 Not Found</p>
    }
        return(
        <>
            <form id="form" onSubmit={handleSubmitButton} >
                <input ref={countryRef} type="text" required placeholder="Davlat" />
                <input ref={cityRef} type="text" required placeholder="Shahar" />
                <button >Yuborish</button>
            </form>
            <div className="timesData">
                <p>{time}</p>
                <p className="timesDatas timesDatazone">Zona: {city}</p>
                <p className="timesDatas-date-georgian">Vaqt: {timesData.date.gregorian.date} yil</p>
                <p className="timesDatas-date-hijri">Hijriy: {timesData.date.hijri.date} yil</p>
                <ol className="timesDatas-list">
                    <li className="timesDatas-item">Bomdod: {timesData.timings.Fajr}, Quyosh: {timesData.timings.Sunrise}</li>
                    <li className="timesDatas-item">Peshin: {timesData.timings.Dhuhr}</li>
                    <li className="timesDatas-item">Asr: {timesData.timings.Asr}</li>
                    <li className="timesDatas-item">Shom: {timesData.timings.Maghrib}</li>
                    <li className="timesDatas-item">Hufton: {timesData.timings.Isha}</li>
                </ol>
            </div>
        </>

        )
}
export default Home