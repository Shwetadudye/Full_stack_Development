import axios from 'axios'

const Base_API = axios.create({
    baseURL:'https://reqres.in/api',
});

export const getData = async(path) =>{
    try{
        const res = await Base_API.get(`${path}`,{
            headers: {'x-api-key': 'reqres_e9afee0fc80e48fea658c39df3124409'},
        });
        const data = await res.data ;
        return data;
    } catch (error){
        console.log (error);
        throw error;
    }
};