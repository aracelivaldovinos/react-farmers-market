import { useEffect, useState } from 'react';
import Schedule from '../Schedule/Schedule';
import Container from 'react-bootstrap/Container';
import './Home.css'

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
    <Container>
      <div className="home">
        <div className="p-5 mb-4 rounded-3" id="jumbotron">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Farmers Market</h1>
            <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac urna nec lectus scelerisque suscipit. Pellentesque sed aliquam arcu. Donec blandit lectus a lacus euismod scelerisque. Vestibulum molestie ex id faucibus tincidunt. Donec viverra scelerisque maximus. Proin vel sollicitudin orci, quis interdum ligula. Vivamus justo dolor, rutrum vitae nisi sit amet, mollis sodales lacus. Curabitur ullamcorper orci ut turpis gravida tincidunt.</p>
          </div>
        </div>
        {schedule && <Schedule schedule = {schedule}/>}
      </div>
    </Container>
   );
}
 
export default Home;