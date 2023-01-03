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
    getFirstApi
} from "../../api/api";

const Home = () => {
    const [city,setCity]=useState("Bekobod")
    const [post, setPost] = useState(0);
    let time = 0;
    const countryRef = useRef();
    const cityRef = useRef();
  
    function handleSubmitButton(evt) {
        evt.preventDefault();
        const countryValue = countryRef.current.value;
        const cityValue = cityRef.current.value;
        setCity(cityValue)
        axios.get(`https://api.aladhan.com/v1/timingsByAddress?address=${cityValue},%20${countryValue}`).then((res) => setPost(res.data));
    }

    const {
        data: posts,
        isLoading,
        isError
    } = useQuery(['posts'], getFirstApi);

    if (!isLoading) {
        time = post.data || posts.data;
    }

    if (isLoading) {
        return(
        <p>Yuklanmoqda...</p>
        )
    }
        return(
        <>
            <form id="form" onSubmit={handleSubmitButton} >
                <input ref={countryRef} type="text" required placeholder="Davlat" />
                <input ref={cityRef} type="text" required placeholder="Shahar" />
                <button>Yuborish</button>
            </form>
            <div className="time">
                <p className="times timezone">Zona: {city}</p>
                <p className="times-date-georgian">Vaqt: {time.date.gregorian.date} yil</p>
                <p className="times-date-hijri">Hijriy: {time.date.hijri.date} yil</p>
                <ol className="times-list">
                    <li className="times-item">Bomdod: {time.timings.Fajr}, Quyosh: {time.timings.Sunrise}</li>
                    <li className="times-item">Peshin: {time.timings.Dhuhr}</li>
                    <li className="times-item">Asr: {time.timings.Asr}</li>
                    <li className="times-item">Shom: {time.timings.Maghrib}</li>
                    <li className="times-item">Hufton: {time.timings.Isha}</li>
                </ol>
            </div>
        </>

        )
}
export default Home