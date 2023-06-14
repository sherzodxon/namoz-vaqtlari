import { Link } from "react-router-dom";
import "../../components/bottom/bottom.scss"

const Bottom =({firstTo,thirdTo})=>{
return(
   <div className="bottom">
    <div className="bottom-button-wrapper">
      <Link className="bottom-button live-button" to={"/live"} children="Live" />
      <Link className="bottom-button to-home-button" to={"/"}  />
      <Link className="bottom-button back-button" to={thirdTo} />
    </div>
   </div> 
)
}
export default Bottom