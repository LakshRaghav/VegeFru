import { Col, Container, Row } from "react-bootstrap";

export default function Footer(props){

    return(
        <>
            <Container fluid>
                <Row>
                    <Col md={12}>
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </>
    )
}