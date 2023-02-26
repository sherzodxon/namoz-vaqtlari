import { useParams } from "react-router-dom";
import { useLocation } from "../../contexts/context";
import Bottom from "../../assets/components/bottom/bottom"
import "./name.scss"
const Name =()=>{
    const {location,setLocation}=useLocation();
    const {id} =useParams();
    const findedPost = location.namesApi.find((el)=>el.id == id)
    return(
       <div className="name">
        <div className="name-container">
        <h3 className="name-title">{findedPost.name}</h3>
       <p className="name-text">{findedPost.comment}</p>
       <Bottom firstTo={'/hadislar'} secondTo={'/qoran'} thirdTo={'/names'}/>
       </div>
       </div>
    )
}
export default Name