import { Link, useParams } from "react-router-dom"
import Bottom from "../../../assets/components/bottom/bottom"
import Header from "../../../assets/components/header/header"
import { useLocation } from "../../../contexts/context"

const TonggiZikrlar =()=>{
    const {id}=useParams()
    const {location , serLocation} =useLocation()
const post = location.mentionApi.morningMention.find((el)=>el.id==id);
    return(
        <div className="zikr-item">
            <Header title={"Tonggi Zikrlar"} className="mornings-header" />
            <div className="zikr-item-container container">
                <div className="zikr-item-text-wrapper">
                <h3 className="zikr-item-title" children={post.name}></h3>
                <p className="zikr-item-arab-text">{post.textArab}</p>
                <p className="zikr-item-text">{post.text}</p>
                <p className="zikr-item-text-translate  italic-text"> <strong> Manosi :</strong>{post.meaning}</p>
                <p className="zikr-item-text-translate"><strong>Hadis: </strong>{post.hadis.writer} <br />
                {post.hadis.author} <br /> <strong>{post.hadis.text}</strong> , дедилар.
                </p>
                <p className="zikr-item-text-translate  italic-text">{post.hadis.rivoyat}</p>
                </div> 
            <Bottom firstTo={'/hadislar'} secondTo={'/qoran'} thirdTo={'/tonggi-zikrlar'}/>
                
            </div>
        </div>
    )
}
export default TonggiZikrlar