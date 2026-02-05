import axios from 'axios'
import { useState } from 'react'
import { apiData}  from '../Components/utils/App';

export const ApiData = () =>{
    const [ApiData, setAxiosData] = useState ([]);

    const getApi = async () => {
        const res = await apiData.get('/posts/1');
        const resData = await res.data;
        setAxiosData((prev)=> [...prev, resData]);
    };
    console.log(ApiData);

    return(
        <>
        <button onClick={getApi}>Post1</button>
        <div 
           style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '4em',
           }}
           >
            {ApiData.map((el)=>{
                return(
                    <div key = {el.id}>
                        <h2>{el.id}</h2>
                        <h3>{el.title}</h3>
                        <h4>{el.body}</h4>
                        </div>
                );
            })}
            </div>
        </>
    );
};