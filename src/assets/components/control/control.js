import "./control.scss"
const Control =()=>{
    function handleBack() {
        window.history.back()
    }
    function handleGo() {
        window.history.forward()
    }
    return(
        <div className="control">
            <button onClick={handleBack} className="control-button"></button>
            <button onClick={handleGo} className="control-button control-next-button"></button>
        </div>
    )
}
export default Control