import axios from "axios";

const API_KEY="77a3adaefdmsh742bc3d28261a0ep13b7f4jsn88f7caf02998";
const BASE_URL="https://youtube138.p.rapidapi.com"

const options = {
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

export const fetchData=async(url)=>{
    try{
        const {data} = await axios.get(`${BASE_URL}/${url}`,options);
        return data;
    }catch(error){
        throw error;
    }
}