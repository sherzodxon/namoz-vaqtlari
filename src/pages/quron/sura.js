const Sura=()=>{
    let [data, setData]=useState(null);
    const [trData ,setTrdata] =useState(null);
    const [loading, setLoading] =useState(true);

    useEffect(()=>{
        axios.get("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/uzb-muhammadsodikmu.json").then((res)=>{
            setTrdata(res.data.quran.filter((el)=>el.chapter == 1))
        })
        axios.get("http://api.alquran.cloud/v1/surah/1").then((res)=>{
            setData(res.data)
            setLoading(false)
        })
      
    },[])
    useEffect(()=>{
        if(data && trData){
            data.data.ayahs.forEach((element,index) => {
                element.manzil = trData[index].text
            });
            
             }
    },[loading])
}
export default Sura