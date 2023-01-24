import "../header/header.scss"
const Header =({className,title})=>{
    return(
        <div className={`header ${className}`}>
            <h3 className="header-title">{title}</h3>
        </div>
    )
}
export default Header