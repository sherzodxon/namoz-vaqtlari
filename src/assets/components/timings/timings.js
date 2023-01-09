import { Link } from "react-router-dom";
import axios from "axios";
import {
    useRef,
    useState,
    useEffect
} from "react";
import { useLocation } from "../../../contexts/context";

const Timings=()=>{

    const {location, setLocation}=useLocation();
    const [post, setPost] = useState(0);
    const [posts, setPosts] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [timeDate, setTimeDate] = useState(0);
    const [isLoading, setLoading] = useState(true);
    const [timeLoading, setTimeLoading] = useState(true);

   
    
    let prayerTime = ""
    let timesData = 0;
    let time = 0;
    const countryRef = useRef();
    const cityRef = useRef();
    let currentTimeHours = 0
    let currentTimeMinutes = 0

    let FajrTimeHours = 0;
    let FajrTimeMinutes = 0;
    let SunriseTimeHours = 0;
    let SunriseTimeMinutes = 0;
    let DhuhrTimeHours = 0;
    let DhuhrTimeMinutes = 0;
    let AsrTimeHours = 0;
    let AsrTimeMinutes = 0;
    let MaghribTimeHours = 0;
    let MaghribTimeMinutes = 0;
    let IshaTimeHours = 0;
    let IshaTimeMinutes = 0;
   
useEffect(() => {
    if (location.country) {
        axios.get(`https://api.aladhan.com/v1/timingsByAddress?address=${location.locality},%20${location.country}`).then((res) => {
            setPosts(res.data);
            setLoading(false)
        });

        axios.get(`https://api.aladhan.com/v1/currentTime?zone=${location.continent}/${location.city}`).then((res) => {
            setTimeDate(res.data);
            setTimeLoading(false)
        })
    }

}, [location])

useEffect(() => {
    if (post) {
        axios.get(`https://api.aladhan.com/v1/currentTime?zone=${post.data.meta.timezone}`).then((res) => setCurrentTime(res.data));
    }
}, [post])

if (!isLoading) {
    timesData = post.data || posts.data;

    FajrTimeHours = +(timesData.timings.Fajr[0] + timesData.timings.Fajr[1]);
    FajrTimeMinutes = +(timesData.timings.Fajr[3] + timesData.timings.Fajr[4]);

    SunriseTimeHours = +(timesData.timings.Sunrise[0] + timesData.timings.Sunrise[1]);
    SunriseTimeMinutes = +(timesData.timings.Sunrise[3] + timesData.timings.Sunrise[4]);

    DhuhrTimeHours = +(timesData.timings.Dhuhr[0] + timesData.timings.Dhuhr[1]);
    DhuhrTimeMinutes = +(timesData.timings.Dhuhr[3] + timesData.timings.Dhuhr[4]);

    AsrTimeHours = +(timesData.timings.Asr[0] + timesData.timings.Asr[1]);
    AsrTimeMinutes = +(timesData.timings.Asr[3] + timesData.timings.Asr[4]);

    MaghribTimeHours = +(timesData.timings.Maghrib[0] + timesData.timings.Maghrib[1]);
    MaghribTimeMinutes = +(timesData.timings.Maghrib[3] + timesData.timings.Maghrib[4]);

    IshaTimeHours = +(timesData.timings.Isha[0] + timesData.timings.Isha[1]);
    IshaTimeMinutes = +(timesData.timings.Isha[3] + timesData.timings.Isha[4]);

   }

if (!timeLoading) {
    time = currentTime.data || timeDate.data;
    currentTimeHours = +(time[0] + time[1]);
    currentTimeMinutes = +(time[3] + time[4])
}
if (currentTimeHours > FajrTimeHours && currentTimeHours < SunriseTimeHours) {
    prayerTime = "Bomdod"
} else if (currentTimeHours == FajrTimeHours && currentTimeMinutes > FajrTimeMinutes || currentTimeHours == SunriseTimeHours && currentTimeMinutes < SunriseTimeMinutes) {
    prayerTime = "Bomdod"
} else if (currentTimeHours >= SunriseTimeHours && currentTimeHours < DhuhrTimeHours) {
    prayerTime = `Peshin -${DhuhrTimeHours - currentTimeHours} soat`
} else if (currentTimeHours == SunriseTimeHours && currentTimeMinutes > SunriseTimeMinutes || currentTimeHours == DhuhrTimeHours && currentTimeMinutes < DhuhrTimeMinutes) {
    prayerTime = `Peshin: - ${DhuhrTimeMinutes - currentTimeMinutes} daqiqa`
} else if (currentTimeHours > DhuhrTimeHours && currentTimeHours < AsrTimeHours) {
    prayerTime = "Peshin"
} else if (currentTimeHours == DhuhrTimeHours && currentTimeMinutes > DhuhrTimeMinutes || currentTimeHours == AsrTimeHours && currentTimeMinutes < AsrTimeMinutes) {
    prayerTime = "Peshin"
} else if (currentTimeHours > AsrTimeHours && currentTimeHours < MaghribTimeHours) {
    prayerTime = "Asr"
} else if (currentTimeHours == AsrTimeHours && currentTimeMinutes > AsrTimeMinutes || currentTimeHours == MaghribTimeHours && currentTimeMinutes < MaghribTimeMinutes) {
    prayerTime = "Asr"
} else if (currentTimeHours > MaghribTimeHours && currentTimeHours < IshaTimeHours) {
    prayerTime = "Shom"
} else if (currentTimeHours == MaghribTimeHours && currentTimeMinutes > MaghribTimeMinutes || currentTimeHours == IshaTimeHours && currentTimeMinutes < IshaTimeMinutes) {
    prayerTime = "Shom"
} else if (currentTimeHours > IshaTimeHours) {
    prayerTime = "Hufton"
} else if (currentTimeHours == IshaTimeHours || currentTimeMinutes > IshaTimeMinutes) {
    prayerTime = "Hufton"
} else {
    prayerTime = "-"
}

function handleSubmitButton(evt) {

    evt.preventDefault();
    const countryValue = countryRef.current.value;
    const cityValue = cityRef.current.value;

    axios.get(`https://api.aladhan.com/v1/timingsByAddress?address=${cityValue},%20${countryValue}`).then((res) => {
        setPost(res.data);
       
            const timezone=res.data.data.meta.timezone
            let postContinent=''
            let postCity=''
            let sum=0;
          
            for(let i=0; i<=timezone.length;i++){
                postContinent+=timezone[i];
                sum++
                if (timezone[i+1]=="/") {
                    break
                }
            }
            for(let i=sum+1;i<timezone.length;i++){
                postCity+=timezone[i];
            }
        
           setLocation({
             continent:postContinent,
             locality:cityValue.charAt(0).toUpperCase()+ cityValue.slice(1),
             country:countryValue.charAt(0).toUpperCase()+ countryValue.slice(1),
             city:postCity,
            })
        
    } );

}
if (isLoading){
return(
<p>Yuklanmoqda...</p> 
)
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
            <p>Namoz payti: {prayerTime}</p>
            <p>Hudud: {location.locality}</p>
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
        <Link to={"/calendar"} children={"Calendar"}/>

    </>

    )

}
export default Timings