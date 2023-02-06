import {useState} from "react"
import Bottom from "../../assets/components/bottom/bottom"
import NameCard from "../../assets/components/namescard/namescard"
import { useLocation } from "../../contexts/context"
import '../../pages/names/names.scss'

const Names =()=>{
   const {location,setLocation}=useLocation();
   const [select, setSelect]=useState(false);
   
   let selectPost=location.namesApi.filter((el)=>el.isLiked==true);
   const checkerPost=location.namesApi.some((el)=>el.isLiked==true);

   function handleSelect() {
    setSelect(false)
   }
   function handleSelected() {
    setSelect(true)
   }
   
return(
    <div className="names">
        <div className="names-button-wrapper">
            <div className="names-header">
            <button onClick={handleSelect} className={select?"names-button":"names-button names-button--active"}>99 ISM</button>
            <button onClick={handleSelected} className={select?"names-button names-button--active":"names-button"}>Tanlanganlar</button>
            </div>
            <hr className="names-hr" />
        </div>
 <div className="container">
        <div className={select? "unselected-none":"names-container container"}>
        {location.namesApi.map((post)=><NameCard comment={post.comment} key={post.id} isLiked={post.isLiked} name={post.name} id={post.id}  />)}
      </div>
      <div className={select? "names-container container":"unselected-none"}>
      { 
       checkerPost?selectPost.map((post)=><NameCard key={post.id} isLiked={post.isLiked} name={post.name} id={post.id} comment={post.comment} />):
        <div className={select?"names-unselected":"unselected-none"}>
            <img className="unselected-img" src={require("../../assets/img/not-found.png")} alt="not-found" />
            <p className="names-unselected-text">Ismlar hozircha tanlanmagan</p>
        </div>
      }
      </div>
      <Bottom firstTo={'/hadislar'} secondTo={'/qoran'} thirdTo={'/'}/>
        </div>
     
    </div>
)
}
export default Names