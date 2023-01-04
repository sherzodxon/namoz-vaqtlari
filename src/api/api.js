import axios from "axios";



export const getFirstApi=()=> {
    return axios.get(`https://api.aladhan.com/v1/timingsByAddress?address=Bekobod,%20Uzbekistan`).then((res) => res.data);
}

export const getTimeApi=()=>{
    return axios.get(`https://api.aladhan.com/v1/currentTime?zone=Asia/Tashkent`).then((res)=>res.data)
}

