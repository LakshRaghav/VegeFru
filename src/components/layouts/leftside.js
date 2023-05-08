import { Col, Container, Row } from "react-bootstrap";

export default function Leftside(props){

    return(
        <>
        <Container fluid>
            <Row>
                <Col md={2}>
                    {props.children}
                </Col>
            </Row>
        </Container>
        </>
    )
}