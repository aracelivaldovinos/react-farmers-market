import { useParams } from "react-router-dom";
import useFetch from '../useFetch/fetchProduce';

const Create = () => {
  const { id } = useParams();
  const {data: produce, error, loading}= useFetch('http://localhost:5000/availableProduce/' + id);
 

  return ( 
    <div className="create">
       <h1>Month - {id}</h1>
         {loading && <div>Loading...</div>}
         {error && <div>{error}</div>}
         {produce && 
         <h2>{produce.month}</h2>
         
         }

    </div>
   );
}
 
export default Create;