import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap';
function TabsExample() {
    return (
        <Nav justify variant="tabs" defaultActiveKey="Technology">
            <LinkContainer to="/technology">
                <Nav.Item eventKey={1}>Technology</Nav.Item>
            </LinkContainer>
            <LinkContainer to="/sports">
                <Nav.Item eventKey={2}>Sports</Nav.Item>
            </LinkContainer>
            <LinkContainer to="/business">
                <Nav.Item eventKey={3}>Business</Nav.Item>
            </LinkContainer>
            
        </Nav>
    );
}

export default TabsExample;