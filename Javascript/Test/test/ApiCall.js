const ApiCall = async(url) =>{
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
    }catch{
        
    }
}