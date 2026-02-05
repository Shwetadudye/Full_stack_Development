import axios from 'axios'
import { useState } from 'react'
import { apiData}  from '../Components/utils/App';

export const PostData = () =>{
    const [PostData, setAxiosData] = useState ([]);

    const getApi = async () => {
        const res = await apiData.get('/posts');
        const resData = await res.data;
        setAxiosData(resData);
    };
    console.log(PostData);

    return(
        <>
        <button onClick={getApi}>PostData</button>
        <div 
           style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '4em',
           }}
           >
            {PostData.map((el)=>{
                return(
                    <div key = {el._id}>
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