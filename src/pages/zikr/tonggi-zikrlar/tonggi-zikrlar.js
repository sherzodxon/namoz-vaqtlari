import { useParams } from "react-router-dom"
import Bottom from "../../../assets/components/bottom/bottom"
import ZikrHeader from "../../../assets/components/zikr-header/zikr-header"
import { useLocation } from "../../../contexts/context"
import LinkBox from "../../../assets/components/link-box/link-box"
import Control from "../../../assets/components/control/control"
import Header from "../../../assets/components/header/header"
const TonggiZikrlar =()=>{
    const {id}=useParams()
    const {location} =useLocation()
const post = location.mentionApi.morningMention.find((el)=>el.id==id);
    return(
        <div className="zikr">
            <div className="background"></div>
            <Header/>
            <div className="zikr-container container">
                <LinkBox/>
            <div className="zikr-main main">
                <Control className={"mornings-control"}/>
                <ZikrHeader title={"Tonggi Zikrlar"} className="mornings-header" />
                <div className="zikr-body">
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
                </div>
            </div>
            <Bottom firstTo={'/hadislar'} secondTo={'/qoran'} thirdTo={'/tonggi-zikrlar'}/>
            </div>
        </div>
    )
}
export default TonggiZikrlar