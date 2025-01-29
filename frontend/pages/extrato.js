import { Container, ListGroup } from 'react-bootstrap';

export default function Extrato() {
  return (
    <Container className="mt-5">
      <h1>Extrato</h1>
      <ListGroup>
        <ListGroup.Item>Transação 1</ListGroup.Item>
        <ListGroup.Item>Transação 2</ListGroup.Item>
        <ListGroup.Item>Transação 3</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
