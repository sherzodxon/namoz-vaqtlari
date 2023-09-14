import { useEffect, useState } from "react"
import "../oyat-card/oyat-card.scss"
import axios from "axios"


const OyatCard=({number,arabtext,text,audioNumber})=>{
const [data,setData]=useState(null)
const [play,setPlay]=useState(true);
useEffect(()=>{
     axios.get(`https://api.alquran.cloud/v1/ayah/${audioNumber}/ar.alafasy`).then((data)=>{
        setData(data.data.data.audio)
       
    })
   
},[play])

 function getdata (evt){
    evt.preventDefault();
    const song =new Audio(data)
    play?setPlay(false):setPlay(true)
    play?song.play():song.pause()
   
}

return(
    <div className="oyat-card">
        <button onClick={getdata} className={play?"audio-button-pause" : "audio-button-play"}></button>

        <p className="sura-card-name-arab oyat-arab-text">{arabtext}</p>
        <p className="oyat-uzb-text">{number} . {text}</p>
    </div>
)
}
export default OyatCard