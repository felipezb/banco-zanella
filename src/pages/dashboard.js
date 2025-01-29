export default function Dashboard() {
    return (
      <div className="container text-center">
        <h1>Bem-vindo à sua conta</h1>
        <ul className="list-group">
          <li className="list-group-item">Extrato</li>
          <li className="list-group-item">Depósito</li>
          <li className="list-group-item">Transferência</li>
          <li className="list-group-item">Pix</li>
          <li className="list-group-item">Empréstimo</li>
          {/* Adicione mais opções conforme necessário */}
        </ul>
      </div>
    );
  }
  