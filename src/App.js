import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import ApiHandle from './components/ApiHandle';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabsExample from './components/TabsExample';
import Technology from './components/Technology';
import Sports from './components/Sports';
import Business from './components/Business';
function App() {
  return (
    <>

      <Header />
      <TabsExample />
      <Routes>
        {/* <Container>
          <Row xs={1} md={1}>
            <Col><Header /></Col>
            <Col><TabsExample /></Col>
          </Row>
          <Row>
            <Col> */}

        <Route path="/technology" element={<Technology />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/business" element={<Business />} />

        {/* </Col>
          </Row>
        </Container> */}
      </Routes>
    </>
  );
}


export default App;
