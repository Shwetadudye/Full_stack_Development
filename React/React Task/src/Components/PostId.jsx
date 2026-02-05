import axios from 'axios'
import { useState } from 'react'
import { apiData}  from '../Components/utils/App';

export const PostIdData = () =>{
    const [PostIdData, setAxiosData] = useState ([]);

    const getApi = async () => {
        const res = await apiData.get('/comments?postId=1');
        const resData = await res.data;
        setAxiosData(resData);
    };
    console.log(PostIdData);

    return(
        <>
        <button onClick={getApi}>PostIdData</button>
        <div 
           style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '4em',
           }}
           >
            {PostIdData.map((el,index)=>{
                return(
                     <div key={`${el.id}-${index}`}>
                        <h2>{el.id}</h2>
                        <h3>{el.name}</h3>
                        <h3>{el.email}</h3>
                        <h4>{el.body}</h4>
                        </div>
                );
            })}
            </div>
        </>
    );
};