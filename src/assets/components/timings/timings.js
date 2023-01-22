import axios from "axios";
import {
    useRef,
    useState,
    useEffect
} from "react";
import { useLocation } from "../../../contexts/context";
import "../timings/timings.scss"
import Button from "../button/button";
import { timeApi } from "../../../api/timeApi";
import ModalCloser from "../modal/modal-closer";
import Modal from "../modal/modal";


const Timings=({posts,isLoading})=>{

    const {location, setLocation}=useLocation();
    const [post, setPost] = useState(0);                                 
    const [currentTime, setCurrentTime] = useState(timeApi);
    const [timeDate, setTimeDate] = useState(timeApi);
    const [timeLoading, setTimeLoading] = useState(false);
    let [modalKey,setModalKey]=useState(false)
    let modalClass =''

    let prayerTime = ""
    let timesData = 0;
    let time = 0;
    let sunrise =false;
    let [inLocation,setInLocation]=useState("");
    const countryRef = useRef();
    const cityRef = useRef();
    let currentTimeHours = 0
    let currentTimeMinutes = 0
    let arrClass={container:"container", time:"time", timings:"timings"}
    let [classes,setClasses]=useState(arrClass)
    let itemClass=''

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
    let form = null;
 if (!isLoading) {
    form=document.querySelector("#form")
 }

   
// useEffect(() => {
//     if (location.country) {
//          axios.get(`https://api.aladhan.com/v1/currentTime?zone=${location.continent}/${location.city}`).then((res) => {
//             setTimeDate(res.data);
//             setTimeLoading(false)
//         })
//     }

// }, [location])

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
    prayerTime = "Bomdod";
    itemClass = 'fajr--active'
} else if (currentTimeHours == FajrTimeHours && currentTimeMinutes >= FajrTimeMinutes || currentTimeHours == SunriseTimeHours && currentTimeMinutes <= SunriseTimeMinutes) {
    prayerTime = "Bomdod"
    itemClass='fajr--active'
} else if (currentTimeHours >= SunriseTimeHours && currentTimeHours < DhuhrTimeHours) {
    prayerTime = `Peshin -${DhuhrTimeHours - currentTimeHours} soat`
    itemClass='sunrise--active';
    sunrise=true

} else if (currentTimeHours == DhuhrTimeHours && currentTimeMinutes < DhuhrTimeMinutes) {
    prayerTime = `Peshin: - ${DhuhrTimeMinutes - currentTimeMinutes} daqiqa`
    itemClass='sunrise--active';
    sunrise=true

} else if (currentTimeHours > DhuhrTimeHours && currentTimeHours < AsrTimeHours) {
    prayerTime = "Peshin"
    itemClass='dhuhr--active'

} else if (currentTimeHours == DhuhrTimeHours && currentTimeMinutes >= DhuhrTimeMinutes || currentTimeHours == AsrTimeHours && currentTimeMinutes < AsrTimeMinutes) {
    prayerTime = "Peshin"
    itemClass='dhuhr--active'

} else if (currentTimeHours > AsrTimeHours && currentTimeHours < MaghribTimeHours) {
    prayerTime = "Asr"
    itemClass='asr--active'  
} else if (currentTimeHours == AsrTimeHours && currentTimeMinutes >= AsrTimeMinutes || currentTimeHours == MaghribTimeHours && currentTimeMinutes < MaghribTimeMinutes) {
    prayerTime = "Asr"
    itemClass='asr--active'
} else if (currentTimeHours > MaghribTimeHours && currentTimeHours < IshaTimeHours) {
    itemClass='maghrib--active'
    prayerTime = "Shom"
} else if (currentTimeHours == MaghribTimeHours && currentTimeMinutes >= MaghribTimeMinutes || currentTimeHours == IshaTimeHours && currentTimeMinutes < IshaTimeMinutes) {
    itemClass='maghrib--active'
    prayerTime = "Shom"
} else if (currentTimeHours > IshaTimeHours ) {
    prayerTime = "Hufton"
    itemClass='isha--active'
} else if (currentTimeHours == IshaTimeHours && currentTimeMinutes >= IshaTimeMinutes) {
    prayerTime = "Hufton"
    itemClass='isha--active'

}
else {
    prayerTime = "-"
} 

useEffect(()=>{
if (prayerTime == "Bomdod") {
    setClasses({
        container:"fajr-container",
        time:"fajr-time",
        timings:"fajr-timings"
    })
}
else if(prayerTime =="Peshin" || sunrise){
    setClasses({
        container:"dhuhr-container",
        time:"dhuhr-time",
        timings:"dhuhr-timings"
    })
}
else if(prayerTime =="Asr"){
    setClasses({
        container:"asr-container",
        time:"asr-time",
        timings:"asr-timings"
    })
}
else if(prayerTime =="Shom"){
    setClasses({
        container:"maghrib-container",
        time:"maghrib-time",
        timings:"maghrib-timings"
    })
}
else if(prayerTime =="Hufton"){
    setClasses({
        container:"isha-container",
        time:"isha-time",
        timings:"isha-timings"
    })
}
else{
    setClasses({
        container:"isha-container",
        time:"isha-time",
        timings:"isha-timings"
    })
}
},[prayerTime])
function handleSubmitButton(evt) {

    evt.preventDefault();
    const countryValue = countryRef.current.value;
    const cityValue = cityRef.current.value;
    setInLocation(cityValue.charAt(0).toUpperCase()+ cityValue.slice(1))
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
function resetForm() {
    form.reset();
}
if (modalKey) {
    modalClass = "modal--active"
}
else{
    modalClass="modal--none"
}
function handleModal(){

setModalKey(!modalKey)

}

if (!isLoading){

    return(
    
<div className= {`timings-time-wrapper ${classes.time}`}>
<ModalCloser onClick={handleModal} className={modalClass} />
<Modal className={modalClass}/>
    <div className={`timings ${classes.timings}`}>
    <div className="container">
    <form id="form" onSubmit={handleSubmitButton} className='timings-form' >
        <div onClick={resetForm} className="form-button timings-x-button"></div>
            <input className="input country-input" ref={countryRef} type="text" required placeholder="Davlat" />
            <input className="input city-input" ref={cityRef} type="text" required placeholder="Shahar" />
            <button className="form-button timings-search-button"></button>
    </form>

        <p className="timings-location">{inLocation || location.locality}</p>
            <p className="timings-time">{time}</p>
            <p className="timings-pray-time">{prayerTime}</p>
            <div className="timings-today-wrapper">
                 <p className="timings-today">Bugun</p>
            <p className="timings-current-date">Vaqt: {timesData.date.gregorian.date} yil</p>
            <p className="timings-current-date">Hijriy: {timesData.date.hijri.date} yil</p>
            </div>
    </div>
    <div className={`container list-container  ${classes.container}`}>
        <div className="line"></div>
            <ol className="timings-list">
                <li className={`timings-item ${itemClass}`}>
                   <p className="timings-item-name">Bomdod</p>
                   <p className="timings-item-time">{timesData.timings.Fajr}</p> 
                </li>
                <li className={`timings-item ${itemClass}`}>
                   <p className="timings-item-name">Quyosh</p>
                   <p className="timings-item-time">{timesData.timings.Sunrise}</p>
                </li>
                <li className={`timings-item ${itemClass}`}>
                   <p className="timings-item-name">Peshin</p>
                   <p className="timings-item-time">{timesData.timings.Dhuhr}</p>
                </li>
                <li className={`timings-item ${itemClass}`}>
                   <p className="timings-item-name">Asr</p>
                   <p className="timings-item-time">{timesData.timings.Asr}</p>
                </li>
                <li className={`timings-item ${itemClass}`}>
                   <p className="timings-item-name">Shom</p>
                   <p className="timings-item-time">{timesData.timings.Maghrib}</p>
                </li>
                <li className={`timings-item ${itemClass}`}>
                   <p className="timings-item-name">Hufton</p>
                   <p className="timings-item-time">{timesData.timings.Isha}</p>
                </li>
            </ol>
            <div className="timings-bottom-wrapper">
                <button className="timings-compass"></button>
              <Button className={"qoran-button"} to={""} children={"Qur'on"}/>
                <button onClick={handleModal} className="timings-hamburger"></button>
            </div>
            
        </div>
       
        </div>
       
   </div>    


    )
}
}
export default Timings