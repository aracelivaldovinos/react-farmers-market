import useFetch from '../useFetch/fetchSchedule';
import Schedule from '../Schedule/Schedule';
import {Row, Col} from 'react-bootstrap';
import './Home.css';

const Home = () => {
  const {data: schedule, error, loading} = useFetch('http://localhost:8000/marketSchedule');
  
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
          {loading && 
          <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <h2><strong>Loading...</strong></h2>
          </div>}
          {error && 
          <div className="alert alert-danger d-flex align-items-center" role="alert">
            <h3><strong>{error}</strong></h3>
          </div>}
          {schedule && <Schedule schedule = {schedule}/>}
          </div>
          </Col>
      </Row>
        
      </Row>
      
   );
}
 
export default Home;