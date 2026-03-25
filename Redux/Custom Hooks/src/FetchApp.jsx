import { useFetch } from "./Components/useFetch";

export const FetchApp =()=>{
    const {ApiValue, isLoading ,isError} = useFetch(
        'http://localhost:3001/profile',
       // 'https://reqres.in/api/users',
        //'https://fakestoreapi.com/products',
        // {
        //     headers:{
        //         'x-api-key' :'reqres_c27db760fb6f4b06a48a548c02bf449f'
        //     }
        // }
    );
    console.log('ApiValue' , ApiValue?.data);

    return(
        <>
        <h3>UseFetch Custom Hook</h3>
        </>
    );
};