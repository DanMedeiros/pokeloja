import { Container, Row, Col } from 'react-bootstrap';
import erro404 from "./../../../assest/img/404.jpg"

function Error404(){

    return (
        <Container>
            <Row>
                <Col md={12}>
                    <h1>Não foi encontrado a sua busca!</h1>
                    <img src={erro404} alt="" />
                </Col>
            </Row>
        </Container>
        
    )
}

export default Error404;