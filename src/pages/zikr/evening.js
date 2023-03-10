import Bottom from '../../assets/components/bottom/bottom';
import ZikrHeader from '../../assets/components/zikr-header/zikr-header';
import LinkBox from "../../assets/components/link-box/link-box"
import Control from "../../assets/components/control/control"
import Header from "../../assets/components/header/header"
import '../zikr/zikr.scss'
const Evening=()=>{
    return(
        <div className="kechki-zikrlar">
          <div className="background"></div>
          <Header />
            <div className="duolar-container container">
           <LinkBox />
            <div className="duolar-main zikr-main main">
                <Control className={"mornings-control"} />
            <ZikrHeader title="Kechki Zikrlar" className="evening-header"  />
                <div className="duolar-body zikr-body">
                <ul className="duolar-list">
            <li className="duolar-item">
            <h3 className="zikr-item-title" >Кечки зикр</h3>
            <p className="zikr-item-arab-text">أمْسَينَا وَأَمْسَى الْمُلْكُ للهِ رَبِّ العَالَمِينَ. اللهُمَّ أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيلَةِ، فَتْحَهَا وَنَصْرَهَا وَنُورَهَا وَبَرَكَتَهَا وَهُدَاهَا وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا، وَشَرِّ مَا بَعْدَهَا</p>
            <p className="zikr-item-text">«Амсайнаа ва амсал мулку лиллаҳи роббил ъаламийн. Аллоҳумма ас`алука хойра ҳазиҳил лайлати фатҳаҳаа ва насроҳаа ва нуроҳаа ва барокатаҳаа ва ҳудаҳаа ва аъузу бика мин шарри ма фийҳаа ва шарри маа баъдаҳаа»</p>
                <p className="zikr-item-text-translate italic-text"> <strong> Manosi :</strong>“Биз ҳам, мулк ҳам оламлар парвардигори Аллоҳники бўлган ҳолда кеч киргиздик. Эй Раббим, бу кечанинг яхшисини, фатҳ бўлишини, ғалабасини, нурини, баракасини, ҳидоятини сўрайман. Ва Сендан бу кечанинг ва бу кечадан кейингисининг ёмонлигидан паноҳ тилайман”</p>
                <p className="zikr-item-text-translate"><strong>Hadis: </strong> Абу Молик Ашъарий розияллоҳу анҳудан ривоят қилинади:<br />Расулуллоҳ соллаллоҳу алайҳи васаллам:
                 <br /> <strong>«Сизлардан бирингиз кеч кирганида:
                 «Амсайнаа ва амсал мулку лиллаҳи роббил ъаламийн. Аллоҳумма ас`алука хойра ҳазиҳил лайлати фатҳаҳаа ва насроҳаа ва нуроҳаа ва барокатаҳаа ва ҳудаҳаа ва аъузу бика мин шарри ма фийҳаа ва шарри маа баъдаҳаа», деб айтсин.</strong> , дедилар.
                </p>
                <p className="zikr-item-text-translate  italic-text">Абу Довуд ривоятлари.</p>
            </li>
            <li className="duolar-item">
            <h3 className="zikr-item-title" >Кечки зикр</h3>
            <p className="zikr-item-arab-text">اللهُمَّ أَنْتَ رَبِّي، لاَ إِلَهَ إِلاَّ أَنْتَ خَلَقْتَنِي، وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ</p>
            <p className="zikr-item-text">«Аллоҳумма анта роббий ла илаҳа илла анта холақтаний ва ана ъабдука ва ана ъала ъаҳдика ва ваъдика мастатоъту аъузу бика мин шарри ма сонаъту, абу`у лака биниъматика ъалаййа ва абу`у бизамбий фағфирлий фаиннаҳу ла йағфируз зунуба илла анта»</p>
                <p className="zikr-item-text-translate italic-text"> <strong> Manosi :</strong> “Аллоҳим, Сен парвардигоримсан, Сендан бошқа илоҳ йўқ. Мени халқ қилдинг ва мен Сенинг қулингман. Мен Сенга берган ваъдамда ва Сенга берган аҳдимда қодир бўлганимча турибман. Қилган нарсаларимнинг ёмонидан Сенинг номинг билан паноҳ тилайман. Менга ато қилган неъматларингга иқрор бўлдим. Ва яна гуноҳларимга ҳам иқрор бўлдим. Менинг гуноҳларимни кечир. Чунки Сендан бошқаси гуноҳларни кечира олмайди”</p>
                <p className="zikr-item-text-translate"><strong>Hadis: </strong> Шаддод ибн Авс розияллоҳу анҳудан ривоят қилинади:<br />
                 <br />Расулуллоҳ соллаллоҳу алайҳи васаллам:  <strong>«Ким саййидул истиғфор:«Аллоҳумма анта роббий ла илаҳа илла анта холақтаний ва ана ъабдука ва ана ъала ъаҳдика ва ваъдика мастатоъту аъузу бика мин шарри ма сонаъту, абу`у лака биниъматика ъалаййа ва абу`у бизамбий фағфирлий фаиннаҳу ла йағфируз зунуба илла анта»ни кечки пайт айтиб, тонг отгунича вафот этса, жаннатга киради. Ким тонгда айтиб, шу куни вафот этса, унда ҳам жаннатга киради»</strong> , дедилар.
                </p>
                <p className="zikr-item-text-translate  italic-text">Имом Бухорий ривоятлари.</p>
            </li>
            <li className="duolar-item">
            <h3 className="zikr-item-title" >Кечки зикр</h3>
            <p className="zikr-item-arab-text">رَضِيتُ بِاللهِ رَبًّا وَبِالإِسْلاَمِ دِينًا وَبِمُحَمَّدٍ صلى الله عليه وسلم رَسُولاً</p>
            <p className="zikr-item-text">«Розийту биллаҳи роббан ва бил ислами дийнан ва бимуҳаммадин соллаллоҳу алайҳи васаллама росула»</p>
                <p className="zikr-item-text-translate italic-text"> <strong> Manosi :</strong>“Аллоҳни раббим деб, Исломни диним деб, Муҳаммад алайҳиссаломни расул деб рози бўлдим”</p>
                <p className="zikr-item-text-translate"><strong>Hadis: </strong>Абу Саид Худрий розияллоҳу анҳудан ривоят қилинади: <br />Расулуллоҳ соллаллоҳу алайҳи васаллам:
                 <br /> <strong>«Ким:«Розийту биллаҳи роббан ва бил ислами дийнан ва бимуҳаммадин соллаллоҳу алайҳи васаллама росула», деса, унга жаннат вожиб бўлади»</strong> , дедилар.
                </p>
                <p className="zikr-item-text-translate  italic-text">Абу Довуд ривоят қилганлар.</p>
            </li>
            <li className="duolar-item">
            <h3 className="zikr-item-title" >Кечки зикр</h3>
            <p className="zikr-item-arab-text">اللهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ فَمِنْكَ وَحْدَكَ، لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ</p>
            <p className="zikr-item-text">«Аллоҳумма маа амсаа бий мин ниъматин фаминка ваҳдака лаа шарийка лак, фалакал ҳамду ва лакаш шукр»</p>
                <p className="zikr-item-text-translate italic-text"> <strong> Manosi :</strong>“Аллоҳим, мен билан кеч киргизган неъматлар Сенинг якка Ўзинг томондандир. Сен яккаю ёлғиздирсан, Сенинг шеригинг йўқ. Сенга ҳамд ва шукрлар бўлсин”</p>
               
            </li>
            <li className="duolar-item">
            <h3 className="zikr-item-title" >Кечки зикр</h3>
            <p className="zikr-item-arab-text">حَسْبِيَ اللهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ العَرْشِ العَظِيمِ</p>
            <p className="zikr-item-text">«Ҳасбийаллоҳу лаа илаҳа илла ҳува ъалайҳи таваккалту ва ҳува роббул ъаршил ъазийм»</p>
                <p className="zikr-item-text-translate italic-text"> <strong> Manosi :</strong>"Аллоҳ менга кифоя қилади. Ундан бошқа илоҳ йўқ. Унга таваккал қилдим. У улуғ аршнинг Раббидир"</p>
                <p className="zikr-item-text-translate"><strong>Hadis: </strong>Абу Дардо розияллоҳу анҳудан ривоят қилинади: <br />Расулуллоҳ соллаллоҳу алайҳи васаллам:
                 <br /> <strong>«Ким ҳар куни тонг отганида ва кеч кирганида:
                 «Ҳасбийаллоҳу лаа илаҳа илла ҳува ъалайҳи таваккалту ва ҳува роббул ъаршил ъазийм», деб етти марта айтса, унинг дунё ва охиратдаги муҳим ишларида Аллоҳнинг Ўзи кифоя қилади»</strong> , дедилар.
                </p>
                <p className="zikr-item-text-translate  italic-text">Ибн Сунний ривоятлари.</p>
            </li>
            <li className="duolar-item">
            <h3 className="zikr-item-title" >Кечки зикр</h3>
            <p className="zikr-item-arab-text">بِاسْمِ اللهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاء وَهُوَ السَّمِيعُ العَلِيمُ</p>
            <p className="zikr-item-text">«Бисмиллаҳиллазий лаа йазурру маъасмиҳи шай`ун фил арзи ва лаа фис самаи ва ҳувас самийъул ъалийм»</p>
                <p className="zikr-item-text-translate italic-text"> <strong> Manosi :</strong>“Шундай Аллоҳнинг исми билан бошлайманки, Унинг исми туфайли еру осмонда бирор нарса зарар бера олмайди. У эшитувчи ва билувчи Зотдир”</p>
                <p className="zikr-item-text-translate"><strong>Hadis: </strong>Усмон ибн Аффон розияллоҳу анҳудан ривоят қилинади: <br />
                Расулуллоҳ соллаллоҳу алайҳи васаллам:<br /> <strong>«Бирор бир банда ҳар тонгда ва тунда:«Бисмиллаҳиллазий лаа йазурру маъасмиҳи шай`ун фил арзи ва лаа фис самаи ва ҳувас самийъул ъалийм», деб уч марта айтса, унга бирор нарса зарар бермайди»</strong> , дедилар.
                </p>
                <p className="zikr-item-text-translate  italic-text">Абу Довуд ва Термизий ривоятлари.</p>
            </li>
            <li className="duolar-item">
            <h3 className="zikr-item-title" >Кечки зикр</h3>
            <p className="zikr-item-arab-text">اللهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِير</p>
            <p className="zikr-item-text">«Аллоҳумма бика амсайнаа ва бика асбаҳнаа ва бика наҳйаа ва бика намууту ва илайкал масийр»</p>
                <p className="zikr-item-text-translate italic-text"> <strong> Manosi :</strong>“Аллоҳим, Сенинг номинг ила кеч киргиздик. Сенинг номинг тонг оттирдик ва Сенинг номинг ила тириламиз ва Сенинг номинг ила вафот этамиз. Ва Сенга қайтажакмиз”.</p>
                <p className="zikr-item-text-translate  italic-text">Абу Довуд, Термизий ва Ибн Можалар ривояти.</p>
            </li>
            </ul>
                </div>
            </div>
            <Bottom firstTo={'/hadislar'} secondTo={'/qoran'} thirdTo={'/zikr'}/>
            </div>
            
        </div>
    )
}
export default Evening;