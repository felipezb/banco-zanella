import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

export default function Emprestimo() {
  const [valor, setValor] = useState('');
  const [prazo, setPrazo] = useState('');

  const handleEmprestimo = (e) => {
    e.preventDefault();
    // Adicione lógica para solicitação de empréstimo
    alert(`Empréstimo de R$${valor} solicitado com sucesso para o prazo de ${prazo} meses!`);
  };

  return (
    <Container className="mt-5">
      <h1>Empréstimo</h1>
      <Form onSubmit={handleEmprestimo}>
        <Form.Group controlId="formValor">
          <Form.Label>Valor</Form.Label>
          <Form.Control type="number" value={valor} onChange={(e) => setValor(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formPrazo">
          <Form.Label>Prazo (meses)</Form.Label>
          <Form.Control type="number" value={prazo} onChange={(e) => setPrazo(e.target.value)} required />
        </Form.Group>
        <Button type="submit" className="mt-3">Solicitar Empréstimo</Button>
      </Form>
    </Container>
  );
}
