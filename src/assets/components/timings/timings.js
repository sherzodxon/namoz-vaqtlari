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
    let itemClass=''
    let fajr =0
    let sun=0
    let dhuhr =0
    let asr=0;
    let maghrib=0
    let isha=0
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
   
 
useEffect(() => {
    if (post) {
        axios.get(`https://api.aladhan.com/v1/currentTime?zone=${post.data.meta.timezone}`).then((res) => setCurrentTime(res.data));
    }
}, [post])

if (posts) {
     currentDate = post.data || posts.data;
    timesData= currentDate.timings
    time = currentTime.data || timeDate;
  
    fajr = timesData.Fajr;
    sun = timesData.Sunrise;
    dhuhr = timesData.Dhuhr;
    asr= timesData.Asr;
    maghrib= timesData.Maghrib;
    isha= timesData.Isha

    if (time >= fajr && time <= sun) {
        prayerTime = "Bomdod";
        itemClass = 'fajr--active'
    }
    else if (time>=sun && time<=dhuhr) {
        itemClass='sunrise--active';
        prayerTime="Quyosh"
    }
    else if (time>=dhuhr && time <=asr) {
        prayerTime = "Peshin"
        itemClass='dhuhr--active'
    }
    else if (time >=asr && time <= maghrib)  {
        prayerTime = "Asr"
        itemClass='asr--active'  
    }
    else if (time >= maghrib && time<= isha) {
        itemClass='maghrib--active'
        prayerTime = "Shom"
    }
    else if (time >= isha) {
        prayerTime = "Hufton"
        itemClass='isha--active'
    }
    else{
        prayerTime="-"
    }
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
    window.open("about:blank", "_self");
    window.close();
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