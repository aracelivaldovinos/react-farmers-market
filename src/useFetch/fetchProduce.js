import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      fetch(url)
        .then((response) =>{
          if(!response.ok){
            throw Error(response.statusText)
          }
          return response.json();
        })
        .then((data)=>{
          // console.log(data);
          setData(data);
          setLoading(false);
        })
        .catch((error)=>{
          setError(error.message);
          setLoading(false);
        })
      }, 1000)
  }, [url])

  return {data, error, loading};
}
 
export default useFetch;