import useFetch from '../useFetch/fetchProduce';
import ProduceList from '../ProduceList/ProduceList';
import './Produce.css'
import {Row, Col} from 'react-bootstrap';

const Produce = () => {
  const {data: produce, error, loading} = useFetch('http://localhost:5000/availableProduce');
  const showDate = new Date();
  const month = (showDate.getMonth()+1);
  const day = (showDate.getDay())

  return(
    <Row>
      <Row className="mb-4" id="jumbotron">
        <Col sm={4} className="jumbotron-col">
          <div className="container-fluid py-5" id="jumbotron-text">
            <h1 className="display-5 fw-bold">AO Dates & Times</h1>
            <p className="fs-4">Check Our Calender for Opening DAYS & TIMES</p>
            {day}
          </div>
        </Col>
        <Col>
          <div className="produce">
            {loading && 
              <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <h2><strong>Loading...</strong></h2>
              </div>}
            {error && 
              <div className="alert alert-danger d-flex align-items-center" role="alert">
                <h3><strong>{error}</strong></h3>
              </div>}
            {produce && <ProduceList produce={produce.filter((item)=> item.id === month)}/>}
          </div>
        </Col>
      </Row>
    </Row>
  );
}
export default Produce;