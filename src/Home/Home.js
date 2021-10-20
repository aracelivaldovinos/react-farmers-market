// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';

const Home = () => {

  const [schedule, setSchedule] = useState(null)

  useEffect(()=>{
    fetch('http://localhost:8000/marketSchedule')
      .then((response) =>{
        return response.json();
      })
      .then((data)=>{
        // console.log(data)
        setSchedule(data);
      })
  }, [])


  return ( 
    <div className="home">
      <h2>Welcome</h2>
    </div>
   );
}
 
export default Home;