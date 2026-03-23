import { useFetch } from "./Components/useFetch";

export const OtherApp =()=>{
    const {Apivalue, isLoading ,isError} = useFetch(
        'https://reqres.in/api/users',
        //'https://fakestoreapi.com/products',
        {
            headers:{
                'x-api-key' :'reqres_c27db760fb6f4b06a48a548c02bf449f'
            }
        }
    );
    console.log('ApiValue' , Apivalue?.data.data);

    return(
        <>
        <h1>UseFetch</h1>
        </>
    );
};