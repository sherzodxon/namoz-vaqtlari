import { Link } from "react-router-dom";
import "../button/button.scss"

const Button=({to,children,className})=>{
    return(
        <Link to={to} children={children} className={`buttons ${className}`}/>
    )
}
export default Button