
import './App.css'

function App() {

  // logic syntax 
  const data = [
    "shweta" ,"mehfooz" ,"tejas" ,"vanshu"
  ];
 //HOF = map,filter,reduce and forEach
  return (
    <>
    {/*html syntax */}
    
     {/*<h1>{data[0]}</h1>
     <h1>{data[1]}</h1>
     <h1>{data[2]}</h1>
     <h1>{data[3]}</h1>*/}
     
    
      
     {data.map((el) => (
        <h1>{el}</h1>
      ))}
    </>
  )
}

export{App} ;
