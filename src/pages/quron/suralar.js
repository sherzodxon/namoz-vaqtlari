import { Pagination } from "antd"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../../assets/components/header/header"
import LinkBox from "../../assets/components/link-box/link-box"
import SuraCard from "../../assets/components/sura-card/sura-card"

import Control from "../../assets/components/control/control"
import { useLocation } from "../../contexts/context"

const Suralar =()=>{
let {location} =useLocation()
const [post ,setPost]=useState([]);
const [data , setData]=useState([])
const [srch,setSrch]=useState(true)

const [loading ,setLoading]=useState(true)

const searchRef =useRef();
let leftOverArr=[]
useEffect(()=>{
    fetcherData(1)
},[])
function fetcherData(page) {
    axios.get(`https://retoolapi.dev/OS6065/quronsuralar?_limit=16&_page=${page}`).then((res)=>{
        setPost(res.data);
        setData(res.data)
        setLoading(false)
    })
}

function handleSearch(evt) {
    evt.preventDefault();
    const searchValue= searchRef.current.value;
    if (searchValue == "") {
       setPost(data)
       setSrch(true)
    }
    else{
  
    const finded = location.quronApi.filter((el)=>{
    const searchRegExp = new RegExp(searchValue, "gi");
    const searchText = `${el.nameUz}`;
    setSrch(false)
    return searchText.match(searchRegExp);
   
   })
  setPost(finded)
}
}

location.quronApi.forEach((el,ind)=>{
    if(ind>=100){
       leftOverArr.push(el)
    }
})
if(post.length == 4){
    const newPost = post.concat(leftOverArr)
  setPost(newPost)
  }

if(loading){
    return(
        <span className="suralar-loader"></span>
    )
}
return(


    <div className="suralar">
        <div className="background"></div>
        <Header />
        <div className="suralar-container container">
            <LinkBox />
           <div className="suralar-main names-main main">
            <div className="suralar-body">
            <Control/>
           <div className="suralar-header">
            <form className="search-form">
            <h2 className="form-title">Suralar</h2>
            <input onChange={handleSearch} ref={searchRef} placeholder="Qidirish" type='search' pattern="[A-z]*" title="Suralar" className="search-input" />
            </form>
           </div>
         
            {post.map((el,key)=>
            <SuraCard key={key} number={el.number || el.id} name={el.nameUz} enName={el.englishName} nameArab={el.name} audio={el.audio} playing={el.playing} />
            )}
           {srch? <Pagination  total={70} onChange={(page)=>fetcherData(page)} responsive />:<div></div>}
          
            </div>
         </div>
         <div className="suralar-bottom">
             <Link to={"/"} className="bottom-button back-button suralar-button"/>
            </div>
        </div>
       
    </div>
)
}
export default Suralar