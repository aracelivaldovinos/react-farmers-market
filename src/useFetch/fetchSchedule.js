import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null)

  useEffect(()=>{
    fetch('http://localhost:8000/marketSchedule')
      .then((response) =>{
        return response.json();
      })
      .then((data)=>{
        console.log(data)
        setData(data);
      })
  }, [url])
  return {data}
}
 
export default useFetch;