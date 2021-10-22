import { useParams } from 'react-router-dom';
import  {Card, Row, Col}  from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProduceList.css';

const ProduceList = ({produce}) => {
  const { id } = useParams();

  return (
      <Row className="p-5 mb-4">
        {produce && produce.map((item)=> (
          <Col className="produce-col">
            <Card className="text-center" style={{ height: '40rem' }}>
              <div className="produce-item" key={item.id}>
              <Card.Header>
                <h1>{item.month}</h1>
                <Link to={`/add/${item.id}`}>
                  <button type="button" className="btn btn-primary">
                    +
                  </button>
                </Link>
                </Card.Header>
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
   );
}
 
export default ProduceList;