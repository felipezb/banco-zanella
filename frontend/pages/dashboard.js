// pages/dashboard.js
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard() {
  return (
    <div className="container">
      <h1>Minha Conta</h1>
      <ul className="list-group">
        <li className="list-group-item"><Link href="/extrato">Extrato</Link></li>
        <li className="list-group-item"><Link href="/deposito">Depósito</Link></li>
        <li className="list-group-item"><Link href="/transferencia">Transferência</Link></li>
        <li className="list-group-item"><Link href="/pix">PIX</Link></li>
        <li className="list-group-item"><Link href="/emprestimo">Empréstimo</Link></li>
      </ul>
    </div>
  );
}
