import React from 'react'
import PerformFetch from './PerformFetch';

const App = () => {
  
  return (
    <>
      <header>
        <h1>Fetch with Basic Access Authentication</h1>
    </header>
    <main>
        <p>Response will appear here after you click.</p>
    </main>
      <div>
        React App
        <PerformFetch />
      </div>
    </>
  )
}

export default App

let p;
        
document.addEventListener('DOMContentLoaded', 
    function(){
        p = document.querySelector('main>p');
        p.addEventListener('click', doFetch);
    });

function doFetch(ev){
    let uri = "https://localhost/apache/no-browse/sample.json";
    
    let h = new Headers();
    h.append('Accept', 'application/json');
    let encoded = window.btoa('rex:pass123');
    let auth = 'Basic ' + encoded;
    h.append('Authorization', auth );
    console.log( auth );
    
    let req = new Request(uri, {
        method: 'GET',
        headers: h,
        credentials: 'include'
    });
    //credentials: 'same-origin'
    
    fetch(req)
    .then( (response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('BAD HTTP stuff');
        }
    })
    .then( (jsonData) =>{
        console.log(jsonData);
        p.textContent = JSON.stringify(jsonData, null, 4);
    })
    .catch( (err) =>{
        console.log('ERROR:', err.message);
    });
}
