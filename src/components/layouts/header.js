import { Col, Container, Row } from "react-bootstrap";

export default function Header(props){

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