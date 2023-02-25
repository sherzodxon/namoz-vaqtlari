import Bottom from "../../assets/components/bottom/bottom";
import ZikrHeader from "../../assets/components/zikr-header/zikr-header";
import MorningCard from "../../assets/components/morningCard/morning-card";
import { useLocation } from "../../contexts/context"
import '../zikr/zikr.scss'
const Mornings =()=>{
    const {location ,setLocation}= useLocation();
    
    return(
        <div className="mornings">
            <ZikrHeader className={"mornings-header"} title={"Tongi Zikrlar"} />
            <div className="mornings-container container">
        {location.mentionApi.morningMention.map((post)=> <MorningCard to={post.id} name={post.name} key={post.id} playing={post.playing}  audio={post.audio} />)}
        <Bottom firstTo={'/hadislar'} secondTo={'/qoran'} thirdTo={'/zikr'}/>
       </div>
      
       </div>
       
    )
}
export default Mornings