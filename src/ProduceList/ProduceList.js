import  {Card, Row, Col, Container}  from 'react-bootstrap';
import './ProduceList.css'

const ProduceList = ({produce}) => {

  return (
    <Container>
      <Row className="p-5 mb-4">
        {produce && produce.map((item)=> (
          <Col className="produce-col">
            <Card className="text-center" style={{ height: '40rem' }}>
              <div className="produce-item" key={item.id}>
                <Card.Header><h1>{item.month}</h1></Card.Header>
                <Card.Body>
                  {item.selection.map((fruit) =>(
                    <div className="fruit">
                      {fruit}
                    </div>
                  ))}
                </Card.Body>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
   );
}
 
export default ProduceList;