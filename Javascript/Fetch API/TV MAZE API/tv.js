let API = `https://api.tvmaze.com/search/shows?q=girl`


async function apicall(){
    let res = await fetch (API);
    let data = await res.json();
    appendData(data)
}

const appendData = (value) =>{
    const content1 = document.getElementById("container");

    value.map((el,i,arr) =>{
        let cardDiv = document.createElement("div");
        let score  = document.createElement("h1");
        let id = document.createElement("h1");
        let summary = document.createElement("div");
        let language = document.createElement("h4");
        let name = document.createElement("h1");
        let type = document.createElement("h1");
        let status = document.createElement("p");
        let img = document.createElement("img")

        cardDiv.className = `div_${i+1}`;
        
        score.innerHTML = el.score;
        id.innerHTML=el.show.id;
        summary.innerHTML=el.show.summary;
        language.innerHTML=el.show.language;
        name.innerHTML=el.show.name;
        type.innerHTML= el.show.type;
        status.innerHTML=el.show.status;
        img.src=el.show.image.medium;

        cardDiv.append(
            score,id,summary,language,name,type,status,img
        );

        content1.append(cardDiv);

    })
}