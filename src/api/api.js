import axios from "axios";



export const getFirstApi=()=> {
    return axios.get(`https://api.aladhan.com/v1/timingsByAddress?address=Bekobod,%20Uzbekistan`).then((res) => res.data);
}



