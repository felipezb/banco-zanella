// pages/index.js
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="container text-center">
      <h1>Bem-vindo ao Banco Zanella</h1>
      <Link href="/login">
        <button className="btn btn-primary mt-3">Acessar Minha Conta</button>
      </Link>
    </div>
  );
}
