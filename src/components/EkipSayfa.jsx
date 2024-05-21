import { Col, Image, Container, Row } from "react-bootstrap"
import ela from '../assets/ela.jpeg'

export default function EkipSayfa() {
  return (
    <div>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={ela} thumbnail />

        </Col>
        <Col>
        <h1>Ela Eldemir</h1>
        </Col>
    </Row>
    </Container>

    </div>
  )
}
