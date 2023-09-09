import { useParams } from "react-router-dom";
import { useLocation } from "../../contexts/context";
import Bottom from "../../assets/components/bottom/bottom";
import LinkBox from "../../assets/components/link-box/link-box"
import Header from "../../assets/components/header/header"
import Control from "../../assets/components/control/control"
import "./name.scss"
const Name =()=>{
    const {location}=useLocation();
    const {id} =useParams();
    const findedPost = location.namesApi.find((el)=>el.id === id)
    return(
       <div className="names">
        <div className="background"></div>
        <Header/>
        <div className="names-container container">
            <LinkBox/>
            <div className="names-main main">
            <Control/>
            <h3 className="name-title">{findedPost.name}</h3>
       <p className="name-text">{findedPost.comment}</p>
       <Bottom firstTo={'/hadislar'} secondTo={'/qoran'} thirdTo={'/names'}/>
            </div>
        </div>
        <div className="name-container">
        
       </div>
       </div>
    )
}
export default Name