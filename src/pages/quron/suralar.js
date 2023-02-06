import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { quronApi } from "../../api/quronApi"
import SuraCard from "../../assets/components/sura-card/sura-card"
import { useLocation } from "../../contexts/context"

const Suralar =()=>{
let {location ,setLocation} =useLocation()
const [post ,setPost]=useState(location.quronApi);
const searchRef =useRef();

function handleSearch(evt) {
    evt.preventDefault();
    const searchValue= searchRef.current.value;
   
    const finded= post.filter((el)=>{
    const searchRegExp = new RegExp(searchValue, "gi");
    const searchText = `${el.nameUz}`;
    return searchText.match(searchRegExp);
    
   })
   setPost(finded)
   if (searchValue == "") {
  setPost(location.quronApi)
}
   
}
return(
    <div className="suralar">
        <div className="suralar-header">
            <form onSubmit={handleSearch} className="search-form">
                <h2 className="form-title">Suralar</h2>
            <input ref={searchRef} placeholder="Izlash" type='search' pattern="[A-z]*" title="Suralar" className="search-input" />
            <button className="search-button"></button>
            </form>
        </div>
        <div className="suralar-container container">
        {post.map((el)=>
            <SuraCard key={el.number} number={el.number} name={el.nameUz} enName={el.englishName} nameArab={el.name} audio={el.audio} playing={el.playing} />
        )}
      <div className="suralar-bottom">
            <Link to={"/"} className="bottom-button back-button suralar-button"/>
        </div>
        </div>
       
    </div>
)
}
export default Suralar