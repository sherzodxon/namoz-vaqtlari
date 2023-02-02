import  axios  from "axios";
import { useEffect, useState } from "react";
import Card from "../../assets/components/card/card";
import { useLocation } from "../../contexts/context"; 

const Calendar=()=>{
   const {location,setLocation}= useLocation()
    const [data ,setData]=useState(null);
    const [isLoading,setLoading]=useState(true)
    const getYear =new Date();
    const getMonth = new Date();
    const month = getMonth.getMonth();
    const year = getYear.getFullYear();
  


 useEffect(()=>{
    axios.get(`https://api.aladhan.com/v1/calendarByCity?city=${location.city}&country=${location.country}&method=1&month=${month+1}&year=${year}`)
    .then(res=>{
    setData(res.data.data);
    setLoading(false)
   })

 },[location])
if (isLoading) {
   return(
      <p>Yuklanmoqda...</p>
   )
   
}
  return(
    <>
    <p>{location.locality}</p>
    {data.map((data)=><Card readable={data.date.gregorian.date} weekday={data.date.gregorian.weekday.en} fajr={data.timings.Fajr} sunrise={data.timings.Sunrise} dhuhr={data.timings.Dhuhr} asr={data.timings.Asr} maghrib={data.timings.Maghrib} isha={data.timings.Isha} key={data.date.timestamp} />)}
    </>
  )
 

    
}  
 export default Calendar