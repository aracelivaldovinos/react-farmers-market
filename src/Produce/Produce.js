import useFetch from '../useFetch/fetchProduce';
import ProduceList from '../ProduceList/ProduceList';
import './Produce.css'
import Container from 'react-bootstrap/Container';



const Produce = () => {
  const {data: produce} = useFetch('http://localhost:5000/availableProduce');
  const showDate = new Date();
  const month = (showDate.getMonth()+1);

  return(
    <Container>
      <div className="produce">
        <div className="p-5 mb-4 rounded-3" id="jumbotron">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Farmers Market</h1>
            <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac urna nec lectus scelerisque suscipit. Pellentesque sed aliquam arcu. Donec blandit lectus a lacus euismod scelerisque. Vestibulum molestie ex id faucibus tincidunt. Donec viverra scelerisque maximus. Proin vel sollicitudin orci, quis interdum ligula. Vivamus justo dolor, rutrum vitae nisi sit amet, mollis sodales lacus. Curabitur ullamcorper orci ut turpis gravida tincidunt.</p>
          </div>
        </div>
        {produce && <ProduceList produce={produce.filter((item)=> item.id === month)}/>}
      </div>
    </Container>
  );
}
export default Produce;