import { useRouter } from 'next/router';
import { Button, Container } from 'react-bootstrap';

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <Container className="text-center mt-5">
      <h1>Bem-vindo ao Banco Zanella</h1>
      <Button onClick={handleLogin}>Acessar Minha Conta</Button>
    </Container>
  );
}
