import { useEffect, useState } from "react"
import "../oyat-card/oyat-card.scss"
import axios from "axios"

const OyatCard=({number,arabtext,text,audioNumber})=>{
const [data,setData]=useState(null)
const [play,setPlay]=useState(false);
useEffect(()=>{
     axios.get(`https://api.alquran.cloud/v1/ayah/${audioNumber}/ar.alafasy`).then((data)=>{
        setData(data.data.data.audio)
        setPlay(true)
    })
   
},[play])
 function getdata (evt){
    evt.preventDefault();
    setPlay(!play)
    const song = new Audio(data)
    play?song.play():song.pause()
   console.log(play);
   
}

return(
    <div className="oyat-card">
        <button onClick={getdata}>audio</button>
        <p className="sura-card-name-arab oyat-arab-text">{arabtext}</p>
        <p className="oyat-uzb-text">{number} . {text}</p>
    </div>
)
}
export default OyatCard