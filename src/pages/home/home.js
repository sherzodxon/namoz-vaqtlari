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

import '../../assets/scss/main.scss';

const Home = () => {
    const [city, setCity] = useState("")
    const [post, setPost] = useState(0);
    const [posts, setPosts] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [country, setCountry] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [locality, setLocality] = useState("");
    const [timeDate, setTimeDate] = useState(0);
    const [isLoading, setLoading] = useState(true);
    const [timeLoading, setTimeLoading] = useState(true);
    const [locLoading, setLocLoading] = useState(true);
    const [locData, setLocData] = useState(0);


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
    let MidnightTimeHours = 0;
    let MidnightTimeMinutes = 0;
    let dMinutes = DhuhrTimeMinutes - currentTimeMinutes;

    function myNav(lat, long) {
        setLatitude(lat);
        setLongitude(long)
    }
    navigator.geolocation.getCurrentPosition((position) => {
        myNav(position.coords.latitude, position.coords.longitude)
    });

    useEffect(() => {
        if (latitude) {
            axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${(latitude)}&longitude=${longitude}`).then(res => {
                setLocData(res.data);
                setLocLoading(false)
            });
        }

    }, [latitude])


    useEffect(() => {
        if (!locLoading) {
            setLocality(locData.locality);
            setCountry(locData.countryName);
            setCity(locData.locality)
        }

    }, [locLoading])

    useEffect(() => {
        if (country) {
            axios.get(`https://api.aladhan.com/v1/timingsByAddress?address=${locality},%20${country}`).then((res) => {
                setPosts(res.data);
                setLoading(false)
            });

            axios.get(`https://api.aladhan.com/v1/currentTime?zone=${locData.continent}/${locData.city || "Tashkent"}`).then((res) => {
                setTimeDate(res.data);
                setTimeLoading(false)
            })
        }

    }, [country])

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

        MidnightTimeHours = +(timesData.timings.Midnight[0] + timesData.timings.Midnight[1]);
        MidnightTimeMinutes = +(timesData.timings.Midnight[3] + timesData.timings.Midnight[4]);

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
        prayerTime = `Peshinga ${DhuhrTimeHours - currentTimeHours} soat qoldi`
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
        setCity(cityValue)
        axios.get(`https://api.aladhan.com/v1/timingsByAddress?address=${cityValue},%20${countryValue}`).then((res) => setPost(res.data));
    }

    if (isLoading ) {
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
                <p>Vaqt: {time}</p>
                <p>Namoz payti: {prayerTime}</p>
                <p>Hudud: {city}</p>
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