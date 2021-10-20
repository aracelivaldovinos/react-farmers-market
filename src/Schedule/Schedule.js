import { Row, Col, Container } from 'react-bootstrap';
import './Schedule.css'

const Schedule = ({schedule}) => {
  return (
    <Container>
      <Row>
        <div className="month">
          <h1>Weekly Schedule</h1>
        </div>
      </Row>
      <Row className="p-5 mb-4 rounded-3">
        {schedule.map((item)=>(
          <Col className="schedule-col">
            <div className="schedule-item" key={item.id}>
              <div className="schedule-day">
                <h3>{item.day}</h3>
              </div>
              <div className="schedule-content">
                <p>Location: {item.location}</p>
                <p>Hours: {item.hours}</p>
                <p>Booth: {item.booth}</p>
              </div>
            </div>
          </Col>
          ))}
      </Row>
    </Container> 
   );
}
 
export default Schedule;