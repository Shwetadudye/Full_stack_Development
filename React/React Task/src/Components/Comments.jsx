import axios from 'axios'
import { useState } from 'react'
import { apiData}  from '../Components/utils/App';

export const CommentsData = () =>{
    const [CommentsData, setAxiosData] = useState ([]);

    const getApi = async () => {
        const res = await apiData.get('/posts/1/comments');
        const resData = await res.data;
        setAxiosData(resData);
    };
    console.log(CommentsData);

    return(
        <>
        <button onClick={getApi}>Comments</button>
        <div 
           style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '4em',
           }}
           >
            {CommentsData.map((el,index)=>{
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