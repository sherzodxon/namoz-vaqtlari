import  axios  from "axios";
import { useEffect, useState } from "react";

const Calendar=()=>{
    const [latitude,setLatitude]=useState(0);
    const [longitude,setLongitude]=useState(0);
    const [data ,setData]=useState(0)
    const getYear =new Date();
    const getMonth = new Date();
    const month = getMonth.getMonth();
    const year = getYear.getFullYear();
    
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
} 

function showPosition(position) {
setLatitude(position.coords.latitude) 
setLongitude(position.coords.longitude);
}

 useEffect(()=>{

    axios.get(`http://api.aladhan.com/v1/calendarByCity?city=Tashkent&country=Uzbekistan&method=1&month=${month}&year=${year}`).then(res=>setData(res.data.data))

 },[longitude])
    
}  
 export default Calendar