import { Link } from "react-router-dom"
import "../../pages/quron/book.scss"
const QuronPage = ()=>{
    return(
        <div className="book-home">
              <div className="book-container container">
            <h2 className="book-home-title">Qur’onga </h2>
            <p className="book-home-text">Xush kelibsiz</p>
            <Link to={"/suralar"} className="book-access-link" children="Bismillah" />
            <Link to={"/"} className="bottom-button back-button book-home-back-button" />
        </div>
        </div>
      
    )
}
export default QuronPage