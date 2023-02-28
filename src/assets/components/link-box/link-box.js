import { Link } from "react-router-dom"
import "./link-box.scss"
const LinkBox=()=>{
    return(
        <div className="link-box">
            <div className="link-box-body">
            <ul className="link-box-list">
            <li className="link-box-item">
                <Link to={"/names"} className="link-box-link link-box-name" children="Asmo-al-Husna" />
            </li>
            <li className="link-box-item">
                <Link to={"/quron-bosh-sahifa"} className="link-box-link" children="Qur'on" />
            </li>
            <li className="link-box-item ">
                <Link to={"/zikr"} className="link-box-link link-box-zikr" children="Zikr" />
            </li>
            <li className="link-box-item ">
                <Link to={"/calendar"} className="link-box-link link-box-calendar" children="Oylik taqvim" />
            </li>
            <li className="link-box-item ">
                <Link to={"/map"} className="link-box-link link-box-map" children="Xarita" />
            </li>
            <li className="link-box-item ">
                <Link to={"/live"} className="link-box-link link-box-live" children="Live" />
            </li>
        
         </ul>
         <p className="link-box-info">©Muslim Taqvim 2023</p>
         <p className="link-box-author">Barcha huquqlar himoyalangan.Ilovadan ma'lumot olinganda manba ko'rsatilishi shart.</p>
            </div>
         
        </div>
    )
}
export default LinkBox