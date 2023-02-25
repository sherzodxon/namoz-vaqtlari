import { useLocation } from '../../../contexts/context'
import '../header/header.scss'
const Header=({className})=>{
   const {location} = useLocation()
    return(
        <div className="header">
          <a href="/" className="header-logo-link"><img src={require("../../img/header-logo.png")} alt="logo" width="67" height="80" className="header-logo" /></a>
          <p className={`header-locality ${className}`}>{location.locality}</p>
        </div>
    )
}
export default Header