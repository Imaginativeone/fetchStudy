function PerformFetch() {

  function doFetch() {
    console.log('doFetch()');
    
    // let uri = "https://localhost/apache/no-browse/sample.json";
    let uri = "https://resourceadvisor.schneider-electric.com/api/IntervalDataAPI/IntervalDataService.svc/IntervalDataServices/SeriesData/Get/JSON/V2?ClientId=13037";
    
    let h = new Headers();
    h.append('Accept', 'application/json');
    let encoded = window.btoa('dfranklin2:Davinacita4711!');
    let auth = 'Basic ' + encoded;

    h.append('Authorization', auth );

    console.log( auth );

    let req = new Request(uri, {
      method: 'POST',
      headers: h,
      // credentials: 'include'
      credentials: 'same-origin'
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
      // p.textContent = JSON.stringify(jsonData, null, 4);
    })
    .catch( (err)=>{
      console.log('ERROR:', err.message);
    });
  }

  return (
    <>
      <button onClick={doFetch}>Fetch</button>
      <div>
        <h1>PerformFetch</h1>
      </div>
    </>
  );
}

export default PerformFetch;
