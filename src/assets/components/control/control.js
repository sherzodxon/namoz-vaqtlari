import "./control.scss"
const Control =({className})=>{
    function handleBack() {
        window.history.back()
    }
    function handleGo() {
        window.history.forward()
    }
    return(
        <div className={`control ${className}`}>
            <button onClick={handleBack} className="control-button"></button>
            <button onClick={handleGo} className="control-button control-next-button"></button>
        </div>
    )
}
export default Control