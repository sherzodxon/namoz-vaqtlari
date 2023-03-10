import axios from "axios";
import {Link} from "react-router-dom"
import {
   useEffect,
   useRef,
   useState
} from "react";
import Card from "../../assets/components/card/card";
import {
   useLocation
} from "../../contexts/context";
import "../calendar/calendar.scss"
import {
   monthName
} from "./monthName";
import LinkBox from "../../assets/components/link-box/link-box"
import Control from "../../assets/components/control/control"
import Header from "../../assets/components/header/header"
const Calendar = () => {
   const {
      location,
      } = useLocation()
   const [data, setData] = useState(null);
   const [isLoading, setLoading] = useState(true);
   const date = new Date();
   const [month,setMonth]=useState(date.getMonth())
   const year = date.getFullYear();
   const monthNames = monthName(month);
   const searchRef = useRef();
    

   const handleForm = (evt) => {
      evt.preventDefault();
      const searchValue = searchRef.current.value
    
      let year = "";
      let months = ""

      for (let index = 0; index < searchValue.length; index++) {
         if (index < 4) {
            year += searchValue[index];
         } else if (index >= 5) {
            months += searchValue[index]
         }
       
      }
   
     if (months/10 < 1) {
      months = months[1]
     }
     
      setMonth(months-1);
    
      axios.get(`https://api.aladhan.com/v1/calendarByCity?city=${location.city}&country=${location.country}&method=1&month=${months}&year=${year}`)
      .then(res=>{
      setData(res.data.data);
      })
   }
   useEffect(() => {
      axios.get(`https://api.aladhan.com/v1/calendarByCity?city=${location.city}&country=${location.country}&method=1&month=${month+1}&year=${year}`)
         .then(res => {
            setData(res.data.data);
            setLoading(false)

         })
   }, [location]);

   if (isLoading) {
      return(
         <div className="calendar-loader">
            <div className="calendar-roller lds-roller">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div>
           
         </div>
      )
   }
     return(
      <div className="calendar">
         <Header />
         <div className="background"></div>
         <div className="calendar-container container">
           <LinkBox/>
           <div className="calendar-main zikr-main main">
            <Control className={"calendar-control"}/>
           <div className="calendar-header">
            <form  className="calendar-form">
            <input required id="input" onChange={handleForm} ref={searchRef} type="month" className="calendar-input" />
            </form>
         </div>
            <div className="calendar-body zikr-body">
            {data.map((data)=><Card readable={data.date.gregorian.date} weekday={data.date.gregorian.weekday.en} fajr={data.timings.Fajr} sunrise={data.timings.Sunrise} dhuhr={data.timings.Dhuhr} asr={data.timings.Asr} maghrib={data.timings.Maghrib} isha={data.timings.Isha} key={data.date.timestamp} />)}
            
            </div>
           </div>
         <div className="calendar-bottom">
            <div className="calendar-buttons-left">
            <Link to="/map" className="calendar-buttons calendar-map-button" />
            <div className="calendar-buttons calendar-month">{monthNames}</div>
            </div>
            <Link className="calendar-buttons back-button" to={"/"}/>
         </div>
         </div>
      </div>


     )



}
export default Calendar