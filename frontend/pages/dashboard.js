import { useRouter } from 'next/router';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Dashboard() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <Container className="mt-5">
      <h1>Bem-vindo ao seu painel de controle</h1>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Extrato</Card.Title>
              <Card.Text>Veja suas transações recentes.</Card.Text>
              <Button onClick={() => handleNavigation('/extrato')}>Acessar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Depósito</Card.Title>
              <Card.Text>Faça um depósito em sua conta.</Card.Text>
              <Button onClick={() => handleNavigation('/deposito')}>Acessar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Transferência</Card.Title>
              <Card.Text>Transfira dinheiro para outras contas.</Card.Text>
              <Button onClick={() => handleNavigation('/transferencia')}>Acessar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Pix</Card.Title>
              <Card.Text>Faça transferências instantâneas usando Pix.</Card.Text>
              <Button onClick={() => handleNavigation('/pix')}>Acessar</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Empréstimo</Card.Title>
              <Card.Text>Solicite um empréstimo.</Card.Text>
              <Button onClick={() => handleNavigation('/emprestimo')}>Acessar</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
