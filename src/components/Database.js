import React, {useState, useEffect} from "react";

function Database(){
    const [breads, setBreads] = useState();

      useEffect(()=>{
         fetch("/breads/").then( res=>{
              if(res.ok){
                  return res.json()
              }
          }).then(jsonRes => setBreads(jsonRes))
      })

    return(<div>
    
        <h1> breads </h1>
        {breads && breads.map( bread => {
            const {breadName, operatorName} = bread ;
            return(
                <>
                <h5> {breadName} </h5>
                <h6> {operatorName} </h6>
                </>
            );
        })}


    </div>)
}

export default Database;