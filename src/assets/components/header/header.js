import '../header/header.scss'
const Header=()=>{
   
    return(
        <div className="header">
          <a href="/" className="header-logo-link"><img src={require("../../img/header-logo.png")} alt="logo" width="67" height="80" className="header-logo" /></a>
        </div>
    )
}
export default Header