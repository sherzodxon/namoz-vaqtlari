import { Link } from "react-router-dom"
import '../modal/modal.scss'

const Modal =({className})=>{
    return(
        <div className={`modal ${className}`}>
<ul className="modal-list">
      <li className="modal-item">
        <Link className="modal-link"  to={'/names'} children={"Asmo al-Husna"}/>
        <p className="modal-link-info">Allohning 99 nomi</p>
    </li>
    <li className="modal-item">
    <Link className="modal-link" to={'/zikr'} children={"Zikr"}/>
    </li>
    <li className="modal-item">
    <Link className="modal-link"  to={'/calendar'} children={"Oylik taqvim"}/>
    </li>
    <li className="modal-item">
    <Link className="modal-link"  to={''} children={"Sozlamalar"}/>
    </li>
</ul>
        </div>
    )
}
export default Modal