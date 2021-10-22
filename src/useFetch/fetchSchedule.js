import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] =useState(null);

  useEffect(()=>{
    fetch('http://localhost:8000/marketSchedule')
      .then((response) =>{
        if(!response.ok){
          throw Error(response.statusText)
        }
        return response.json();
      })
      .then((data)=>{
        console.log(data)
        setData(data);
      })
      .catch(error=> {
        setError(error.message)
      })
  }, [url])
  return {data, error}
}
 
export default useFetch;