import useFetch from '../useFetch/fetchProduce';

const Produce = () => {
  const {data: produce} = useFetch('http://localhost:5000/availableProduce');

  return ( 
    <div className="produce-list">
      {produce && produce.map((item)=> (
      <div className="produce-item" key={item.id}>
        <h1>{item.month}</h1>
      </div>))}
    </div>
   );
}
export default Produce;