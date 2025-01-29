import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function Pix() {
  const [valor, setValor] = useState('');
  const [chavePix, setChavePix] = useState('');

  const handlePix = (e) => {
    e.preventDefault();
    // Adicione lógica para realizar transferência via Pix
    alert(`Transferência via Pix de R$${valor} para a chave ${chavePix} realizada com sucesso!`);
  };

  return (
    <Container className="mt-5">
      <h1>Pix</h1>
      <Form onSubmit={handlePix}>
        <Form.Group controlId="formValor">
          <Form.Label>Valor</Form.Label>
          <Form.Control type="number" value={valor} onChange={(e) => setValor(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formChavePix">
          <Form.Label>Chave Pix</Form.Label>
          <Form.Control type="text" value={chavePix} onChange={(e) => setChavePix(e.target.value)} required />
        </Form.Group>
        <Button type="submit" className="mt-3">Realizar Transferência</Button>
      </Form>
    </Container>
  );
}
