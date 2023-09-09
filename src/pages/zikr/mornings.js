import Bottom from "../../assets/components/bottom/bottom";
import ZikrHeader from "../../assets/components/zikr-header/zikr-header";
import MorningCard from "../../assets/components/morningCard/morning-card";
import { useLocation } from "../../contexts/context";
import LinkBox from "../../assets/components/link-box/link-box"
import Control from "../../assets/components/control/control"
import Header from "../../assets/components/header/header"
import '../zikr/zikr.scss'
const Mornings =()=>{
    const {location}= useLocation();
    
    return(
        <div className="mornings">
         <div className="background"></div>
         <Header />
        <div className="mornings-container container">
        <LinkBox/>
        <div className="mornings-main zikr-main main">
            <Control className={"mornings-control"}/>
        <ZikrHeader className={"mornings-header"} title={"Tonggi Zikrlar"} />
            <div className="mornings-body zikr-body">
            {location.mentionApi.morningMention.map((post)=> <MorningCard to={post.id} name={post.name} key={post.id} playing={post.playing}  audio={post.audio} />)}
            </div>
        </div>
        <Bottom firstTo={'/hadislar'} secondTo={'/qoran'} thirdTo={'/zikr'}/>
       </div>
      
       </div>
       
    )
}
export default Mornings