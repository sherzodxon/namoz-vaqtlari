import "../oyat-card/oyat-card.scss"
const OyatCard=({number,arabtext,text})=>{
return(
    <div className="oyat-card">
        <p className="sura-card-name-arab oyat-arab-text">{arabtext}</p>
        <p className="oyat-uzb-text">{number} . {text}</p>
    </div>
)
}
export default OyatCard