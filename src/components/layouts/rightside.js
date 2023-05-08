import { Col, Container, Row } from "react-bootstrap";

export default function Rightside(props){
    
    return(
        <>
        <Container fluid>
            <Row>
                <Col md={10}>
                    {props.children}
                </Col>
            </Row>
        </Container>
        </>
    )
}