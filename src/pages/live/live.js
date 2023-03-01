import { Link } from "react-router-dom"
import "../live/live.scss"
import LinkBox from "../../assets/components/link-box/link-box"
import Control from "../../assets/components/control/control"
import Header from "../../assets/components/header/header"
const Live =()=>{
return(
  <div className="live">
    <Header/>
    <div className="background"></div>
    <div className="live-container container">
      <LinkBox/>
      <div className="live-main zikr-main main">
      <Control className={"live-control"}/>
      <div className="live-header">
      <h3 className="live-title">Live</h3>
      </div>
    <div className="live-body zikr-body">
    
    <ul className="live-video-list">
            <li className="live-video">
            <iframe width="450" height="253" className="live-iframe" src="https://www.youtube.com/embed/zgkPMys1aXc">
             </iframe>
            </li>
           
            <li className="live-video">
            <iframe width="450" height="253" className="live-iframe" src="https://www.youtube.com/embed/WvRcjoFDVDY">
             </iframe>
            </li>
          
            <li className="live-video">
            <iframe width="450" height="253" className="live-iframe" src="https://www.youtube.com/embed/AnFBxnoaRTs">
             </iframe>
            </li>
           
            <li className="live-video">
            <iframe width="450" height="253" className="live-iframe" src="https://www.youtube.com/embed/sVRBXqe2fxA">
             </iframe>
            </li>
            <li className="live-video">
            <iframe width="450" height="253" className="live-iframe" src="https://www.youtube.com/embed/F4-VGU0i5ao?feature=share">
             </iframe>
            </li>
        </ul>
    </div>
      </div>
        
        <div className="live-bottom suralar-bottom">
            <Link to={"/"} className="bottom-button back-button suralar-bottom-button" />
            </div>
    </div>
  </div>

)
}
export default Live