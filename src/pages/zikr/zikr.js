import { Link } from "react-router-dom"
import Bottom from "../../assets/components/bottom/bottom"
import '../zikr/zikr.scss'
const Zikr=()=>{
    return(
        <div className="zikr">
            <h3 className="zikr-title">Zikr va Duolar</h3>
            <hr className="names-hr" />
            <div className="zikr-container container">
                <div className="zikr-main-wrapper">
                <ul className="zikr-list">
                <li className="zikr-item">
                    <Link to="/tonggi-zikrlar" className="zikr-link morning-link" children="Tonggi Zikrlar" />
                </li>
                <li className="zikr-item">
                    <Link to="/duolar" className="zikr-link duolar-link" children="Namozdagi-Duolar" />
                </li>
                <li className="zikr-item">
                    <Link to="/kechki-zikrlar" className="zikr-link evening-link" children="Kechki Zikrlar" />
                </li>
                <li className="zikr-item">
                    <Link to="/barcha-zikrlar" className="zikr-link zikrlar-link" children="Barcha Ziklar"/>
                </li>
            </ul>
            <p className="zikr-text">
           <strong>Бисмиллаҳир роҳманир роҳийм.</strong> <br />
            Бандаларига зикр ва дуолар эшигини очиб қўйган Ҳақ таолога Унинг жалолига яраша ҳамду санолар бўлсин!
            Умматларига зикр ва дуоларда намуна бўлган Расулимиз ва ҳабибимиз Муҳаммад мустафога саловоту дурудлар бўлсин!
            Ўз диндошларига Қуръони Карим ва хадиси шарифлардаги зикр ва дуолар ҳақидаги таълимотларни омонат ила нақл қилган саҳобаи киромларга Аллоҳ таолонинг розилиги бўлсин!
             <br />
             <br />
            Аллоҳ таоло: <br />
           <strong>«Эй иймон келтирганлар! Аллоҳни кўп зикр қилинглар! Ва эртаю кеч Уни поклаб ёд этинглар»</strong>, деган («Аҳзоб» сураси, 41-42-оятлар).
            </p>
                </div>
           
            <Bottom firstTo={'/hadislar'} secondTo={'/qoran'} thirdTo={'/'} />
            </div>
           
            
        </div>
    )
}
export default Zikr