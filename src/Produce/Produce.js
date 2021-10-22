import useFetch from '../useFetch/fetchProduce';
import ProduceList from '../ProduceList/ProduceList';
import './Produce.css'
import {Row, Col} from 'react-bootstrap';



const Produce = () => {
  const {data: produce} = useFetch('http://localhost:5000/availableProduce');
  const showDate = new Date();
  const month = (showDate.getMonth()+1);

  return(
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
      <div className="produce">
      {produce && <ProduceList produce={produce.filter((item)=> item.id === month)}/>}
      </div>
      </Col>
  </Row>
    
  </Row>
  );
}
export default Produce;