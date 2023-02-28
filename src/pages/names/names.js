import axios from "axios"
import {
  useEffect,
  useState
} from "react"
import {
  Pagination
} from "antd"
import Bottom from "../../assets/components/bottom/bottom"
import NameCard from "../../assets/components/namescard/namescard"
import {
  useLocation
} from "../../contexts/context"
import '../../pages/names/names.scss'
import LinkBox from "../../assets/components/link-box/link-box"
import Header from "../../assets/components/header/header"
import Control from "../../assets/components/control/control"

const Names = () => {
  const {
    location,
    setLocation
  } = useLocation();
  const [select, setSelect] = useState(false);
  let [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  let selectPost = location.namesApi.filter((el) => el.isLiked == true);
  let checkerPost = location.namesApi.some((el) => el.isLiked == true);
 
  useEffect(() => {
    fetchRecords(1);
  }, [])

 
  const fetchRecords = (page) => {
    axios.get(`https://retoolapi.dev/PBj0hg/allohismlari?_limit=10&_page=${page}`).then((res) => {
      setData(res.data)
      setLoading(false)
    })
  }

  function handleSelect() {
    setSelect(false)
  }

  function handleSelected() {
    setSelect(true)
  }
  if (loading) {
    return(
      <span className="names-loader"></span>
    )
  }

  return(
    <div className="names">
      <div className="background"></div>
      <Header/>
 <div className="names-container container">
  <LinkBox />
  <div className="names-main main">
  <Control/>
  <div className="names-button-wrapper">
            <div className="names-header">
            <button onClick={handleSelect} className={select?"names-button":"names-button names-button--active"}>99 ISM</button>
            <button onClick={handleSelected} className={select?"names-button names-button--active":"names-button"}>Tanlanganlar</button>
            </div> 
  </div>
  <div className={select? "unselected-none":"names-body"}>
  
  <hr className="names-hr" />
        {data.map((post)=><NameCard comment={post.comment} key={post.id} isLiked={post.isLiked} name={post.name} id={post.id}  />)}
        <Pagination total={99} responsive onChange={(page)=>fetchRecords(page)} />
  </div>
  <div className={select? "names-body":"unselected-none"}>
      { 
       checkerPost?selectPost.map((post)=><NameCard key={post.id} isLiked={post.isLiked} name={post.name} id={post.id} comment={post.comment} />):
        <div className={select?"names-unselected":"unselected-none"}>
            <img className="unselected-img" src={require("../../assets/img/not-found.png")} alt="not-found" />
            <p className="names-unselected-text">Ismlar hozircha tanlanmagan</p>
        </div>
      }
  </div>
      <Bottom firstTo={'/hadislar'} secondTo={'/qoran'} thirdTo={'/'}/>
  </div>
</div>
    </div>
)

  
}
export default Names