import "./zikr-header.scss"
const ZikrHeader =({className,title})=>{
    return(
        <div className={`zikr-header ${className}`}>
            <h3 className="zikr-header-title">{title}</h3>
        </div>
    )
}
export default ZikrHeader