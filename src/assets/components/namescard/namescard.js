import { Link } from "react-router-dom";
import {
    useLocation
} from "../../../contexts/context";
import "../namescard/namescard.scss"

const NameCard = ({id,name,isLiked,comment}) => {
    const {
        location,
        setLocation
    } = useLocation()

    function handleLike() {
        let post = location.namesApi.find((el) => el.id == id);
        let postIndex = location.namesApi.findIndex((el) => el.id == id)
        post.isLiked = !post.isLiked
        setLocation({
            ...location,
            ...location.namesApi.splice(postIndex, 1, post)
        })

    }
    return(
        <div className="names-card">
            <div className="names-card-header">
            <div className="names-text-wrapper">
            <p className="names-number">{id}</p>
            <div className="names-info">
            <Link className="names-name" children={name} to={`/name/${id}`}/>
            <p className="names-comment">{comment}</p>
            </div>
           
         </div>

         <button className={isLiked?"names-like names-liked":"names-like"} onClick={handleLike}></button>
            </div>
          
        </div>
    )
}
export default NameCard