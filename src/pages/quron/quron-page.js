import { Link } from "react-router-dom"
import "../../pages/quron/book.scss"
import Control from "../../assets/components/control/control"
const QuronPage = ()=>{
    return(
        <div className="book-home">
            <Control />
              <div className="book-container">
            <h2 className="book-home-title">Qur’onga </h2>
            <p className="book-home-text">Xush kelibsiz</p>
            <Link to={"/suralar"} className="book-access-link" children="Bismillah" />
            <div className="book-bottom">
            <Link to={"/"} className="bottom-button back-button suralar-bottom-button" />
            </div>
           
        </div>
        </div>
      
    )
}
export default QuronPage