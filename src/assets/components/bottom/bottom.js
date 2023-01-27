import { Link } from "react-router-dom";
import "../../components/bottom/bottom.scss"

const Bottom =({firstTo,secondTo,thirdTo})=>{
return(
   <div className="bottom">
    <div className="bottom-button-wrapper">
      <Link className="bottom-button" to={firstTo} children="Hadislar" />
      <Link className="bottom-button" to={"/quron-bosh-sahifa"} children="Qur'on" />
      <Link className="bottom-button back-button" to={thirdTo} children="" />
      
    </div>
   </div> 
)
}
export default Bottom