import '../modal/modal.scss'
const ModalCloser=({className,onClick})=>{
    return(
        <div onClick={onClick} className={`modal-closer ${className}`}>

        </div>
    )
}
export default ModalCloser