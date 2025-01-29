import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function Deposito() {
  const [valor, setValor] = useState('');

  const handleDeposito = (e) => {
    e.preventDefault();
    // Adicione lógica para realizar depósito
    alert(`Depósito de R$${valor} realizado com sucesso!`);
  };

  return (
    <Container className="mt-5">
      <h1>Depósito</h1>
      <Form onSubmit={handleDeposito}>
        <Form.Group controlId="formDeposito">
          <Form.Label>Valor</Form.Label>
          <Form.Control type="number" value={valor} onChange={(e) => setValor(e.target.value)} required />
        </Form.Group>
        <Button type="submit" className="mt-3">Realizar Depósito</Button>
      </Form>
    </Container>
  );
}
