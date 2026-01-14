const URL = "https://fakestoreapi.com/products";



const getfacts = async () =>{
    let response = await fetch(URL);
    console.log(response);
    let data = response.json();//json format
    console.log(data)

}