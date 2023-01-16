import '../loader/loader.scss'
const Loader=()=>{
    return(
        <>
<div className="loader">
    <img className='loader-image' src={require("../../img/loader.png")} width={105} height={149} alt="" />
    <p className='loader-title'>Muslim Taqvim</p>
</div>
</> 
    )
}
export default Loader