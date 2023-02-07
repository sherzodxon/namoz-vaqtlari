import '../../components/card/card.scss'
const Card=({readable,weekday,fajr,sunrise,dhuhr,asr,maghrib,isha})=>{
    const weekNameTranslator=(name)=>{
        switch (name) {
            case "Monday":
                return "Dushanba"
            case "Tuesday":
                return "Seshanba"
            case "Wednesday":
                return "Chorshanba"
            case "Thursday":
                return "Payshanba"
            case "Friday":
                return "Juma"
            case "Sunday":
                return "Shanba"
            case "Saturday":
                return "Yakshanba"
            default:
                break;
        }
    }
    const weekdays = weekNameTranslator(weekday);
return(
   
    <div className="card">
        <div className="card-header">
            <p className="card-readable">{readable}</p>
            <p className="card-weekday">{weekdays}</p>
        </div>
        <ol className="card-list">
            <li className="card-item">
                <p className="card-weekname">Bomdod</p>
                <p className="card-praytime">{fajr}</p>
                <p className="card-praytime">{sunrise}</p>
            </li>
            <li className="card-item">
                <p className="card-weekname">Peshin</p>
                <p className="card-praytime">{dhuhr}</p>
            </li>
            <li className="card-item">
                <p className="card-weekname">Asr</p>
                <p className="card-praytime">{asr}</p>
            </li>
            <li className="card-item">
                <p className="card-weekname">Shom</p>
                <p className="card-praytime">{maghrib}</p>
            </li>
            <li className="card-item">
                <p className="card-weekname">Hufton</p>
                <p className="card-praytime">{isha }</p>
            </li>
        </ol>
     
    </div>
)
}
export default Card