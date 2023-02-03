import axios from "axios";
import {
    useRef,
    useState,
    useEffect,
} from "react";
import { useLocation } from "../../../contexts/context";
import "../timings/timings.scss"
import Button from "../button/button";
import ModalCloser from "../modal/modal-closer";
import Modal from "../modal/modal";
import { Link } from "react-router-dom";


const Timings=({posts,isLoading})=>{

    const {location, setLocation}=useLocation();
    const [post, setPost] = useState(0);                                 
    const [currentTime, setCurrentTime] = useState(0);
    let [inLocation,setInLocation]=useState("");
    let [modalKey,setModalKey]=useState(false);
    let arrClass={container:"container", time:"time", timings:"timings"}
    let [classes,setClasses]=useState(arrClass);
    const countryRef = useRef();
    const cityRef = useRef();

    let modalClass =''
    let currentDate =0 
    let prayerTime = ""
    let timesData = 0;
    let time = 0;
    let sunrise =false;
    let currentHours = 0
    let currentMinutes = 0
    let itemClass=''
    let fajrHours = 0;
    let fajrMinutes = 0;
    let sunriseHours = 0;
    let sunriseMinutes = 0;
    let dhuhrHours = 0;
    let dhuhrMinutes = 0;
    let asrHours = 0;
    let AsrTimeMinutes = 0;
    let maghribHours = 0;
    let maghribMinutes = 0;
    let ishaHours = 0;
    let ishaMinutes = 0;
    let form = null;
    const d =new Date();
    let minutes= d.getMinutes()
    if (minutes/10 < 1) {
        minutes=`0${minutes}`
    }
    let hours= d.getHours();
    if (hours/10 < 1) {
        hours=`0${hours}`
    }
    const timeDate =`${hours}:${minutes}`
   
 if (!isLoading) {
    form=document.querySelector("#form")
 }

useEffect(() => {
    if (post) {
        axios.get(`https://api.aladhan.com/v1/currentTime?zone=${post.data.meta.timezone}`).then((res) => setCurrentTime(res.data));
    }
}, [post])

if (posts) {
     currentDate = post.data || posts.data;
    timesData= currentDate.timings

    fajrHours = +(timesData.Fajr[0] + timesData.Fajr[1]);
    fajrMinutes = +(timesData.Fajr[3] + timesData.Fajr[4]);

    sunriseHours = +(timesData.Sunrise[0] + timesData.Sunrise[1]);
    sunriseMinutes = +(timesData.Sunrise[3] + timesData.Sunrise[4]);

    dhuhrHours = +(timesData.Dhuhr[0] + timesData.Dhuhr[1]);
    dhuhrMinutes = +(timesData.Dhuhr[3] + timesData.Dhuhr[4]);

    asrHours = +(timesData.Asr[0] + timesData.Asr[1]);
    AsrTimeMinutes = +(timesData.Asr[3] + timesData.Asr[4]);

    maghribHours = +(timesData.Maghrib[0] + timesData.Maghrib[1]);
    maghribMinutes = +(timesData.Maghrib[3] + timesData.Maghrib[4]);

    ishaHours = +(timesData.Isha[0] + timesData.Isha[1]);
    ishaMinutes = +(timesData.Isha[3] + timesData.Isha[4]);

   }
  
    time = currentTime.data || timeDate;
    currentHours = +(time[0] + time[1]);
    currentMinutes = +(time[3] + time[4])
   
if (currentHours > fajrHours && currentHours < sunriseHours) {
    prayerTime = "Bomdod";
    itemClass = 'fajr--active'
} else if (currentHours == fajrHours && currentMinutes >= fajrMinutes || currentHours == sunriseHours && currentMinutes <= sunriseMinutes) {
    prayerTime = "Bomdod"
    itemClass='fajr--active'
} else if (currentHours >= sunriseHours && currentHours < dhuhrHours) {
    prayerTime = `Peshin -${dhuhrHours - currentHours} soat`
    itemClass='sunrise--active';
    sunrise=true

} else if (currentHours == dhuhrHours && currentMinutes < dhuhrMinutes) {
    prayerTime = `Peshin: - ${dhuhrMinutes - currentMinutes} daqiqa`
    itemClass='sunrise--active';
    sunrise=true

} else if (currentHours > dhuhrHours && currentHours < asrHours) {
    prayerTime = "Peshin"
    itemClass='dhuhr--active'

} else if (currentHours == dhuhrHours && currentMinutes >= dhuhrMinutes || currentHours == asrHours && currentMinutes < AsrTimeMinutes) {
    prayerTime = "Peshin"
    itemClass='dhuhr--active'

} else if (currentHours > asrHours && currentHours < maghribHours) {
    prayerTime = "Asr"
    itemClass='asr--active'  
} else if (currentHours == asrHours && currentMinutes >= AsrTimeMinutes || currentHours == maghribHours && currentMinutes < maghribMinutes) {
    prayerTime = "Asr"
    itemClass='asr--active'
} else if (currentHours > maghribHours && currentHours < ishaHours) {
    itemClass='maghrib--active'
    prayerTime = "Shom"
} else if (currentHours == maghribHours && currentMinutes >= maghribMinutes || currentHours == ishaHours && currentMinutes < ishaMinutes) {
    itemClass='maghrib--active'
    prayerTime = "Shom"
} else if (currentHours > ishaHours ) {
    prayerTime = "Hufton"
    itemClass='isha--active'
} else if (currentHours == ishaHours && currentMinutes >= ishaMinutes) {
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
    setInLocation(cityValue)
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
             locality:cityValue,
             country:countryValue,
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
    <div className=" timings-container container">
      <form id="form" onSubmit={handleSubmitButton} className='timings-form' >
        <div onClick={resetForm} className="form-button timings-x-button"></div>
            <input className="timigs-input input country-input"  ref={countryRef} type="search" pattern="[A-z]*" title="Davlat"required placeholder="Davlat" />
            <input className="timigs-input input city-input" type="search" pattern="[A-z]*" title="Shahar" ref={cityRef} required placeholder="Shahar" />
            <button className=" timings-search-button form-button"></button>
       </form>

        <p className="timings-location">{inLocation || location.locality}</p>
            <p className="timings-time">{time}</p>
            <p className="timings-pray-time">{prayerTime}</p>
           
    </div>
    <div className="timings-today-wrapper">
                 <p className="timings-today">Bugun</p>
            <p className="timings-current-date">Vaqt: {currentDate.date.gregorian.date} yil</p>
            <p className="timings-current-date">Hijriy: {currentDate.date.hijri.date} yil</p>
            </div>
    <div className={`timings-container container list-container  ${classes.container}`}>
        <div className="timigs-line"></div>
            <ol className="timings-list">
                <li className={`timings-item ${itemClass}`}>
                   <p className="timings-item-name">Bomdod</p>
                   <p className="timings-item-time">{timesData.Fajr}</p> 
                </li>
                <li className={`timings-item ${itemClass}`}>
                   <p className="timings-item-name">Quyosh</p>
                   <p className="timings-item-time">{timesData.Sunrise}</p>
                </li>
                <li className={`timings-item ${itemClass}`}>
                   <p className="timings-item-name">Peshin</p>
                   <p className="timings-item-time">{timesData.Dhuhr}</p>
                </li>
                <li className={`timings-item ${itemClass}`}>
                   <p className="timings-item-name">Asr</p>
                   <p className="timings-item-time">{timesData.Asr}</p>
                </li>
                <li className={`timings-item ${itemClass}`}>
                   <p className="timings-item-name">Shom</p>
                   <p className="timings-item-time">{timesData.Maghrib}</p>
                </li>
                <li className={`timings-item ${itemClass}`}>
                   <p className="timings-item-name">Hufton</p>
                   <p className="timings-item-time">{timesData.Isha}</p>
                </li>
            </ol>
            <div className="timings-bottom-wrapper">
                <Link className="timings-compass" to="/map" />
              <Button className={"timigs-quron-button qoran-button"} to={"/quron-bosh-sahifa"} children={"Qur'on"}/>
                <button onClick={handleModal} className="timings-hamburger"></button>
            </div>
            
        </div>
       
        </div>
       
</div>    


    )
}
}
export default Timings