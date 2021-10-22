import useFetch from '../useFetch/fetchSchedule';
import Schedule from '../Schedule/Schedule';
import {Row, Col} from 'react-bootstrap';
import './Home.css';

const Home = () => {
  const {data: schedule} = useFetch('http://localhost:8000/marketSchedule');
  
  return ( 
      <Row>
        <Row className="mb-4" id="jumbotron">
          <Col sm={4} className="jumbotron-col">
          <div className="container-fluid py-5" id="jumbotron-text">
            <h1 className="display-5 fw-bold">AO Dates & Times</h1>
            <p className="fs-4">OPEN: Sat. 10:00am-1:30pm </p>
            <button className="btn btn-primary btn-lg">Check times!</button>
          </div>
          </Col>
          <Col>
          <div className="schedule">
          {schedule && <Schedule schedule = {schedule}/>}
          </div>
          </Col>
      </Row>
        
      </Row>
      
   );
}
 
export default Home;