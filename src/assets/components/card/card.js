import '../../components/card/card.scss'
const Card=({readable,weekday,fajr,sunrise,dhuhr,asr,maghrib,isha})=>{
    
return(
   
    <div className="card">
        <p>{readable}</p>
        <p>{weekday}</p>
        <p>Bomdod: {fajr}</p>
        <p>Quyosh: {sunrise}</p>
        <p>Peshin: {dhuhr}</p>
        <p>Asr: {asr}</p>
        <p>Shom: {maghrib}</p>
        <p>Hufton: {isha}</p>
    </div>
)
}
export default Card