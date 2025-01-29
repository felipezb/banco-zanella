// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      router.push('/dashboard');
    } else {
      alert('Falha no login');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Usuário</label>
          <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Senha</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>Entrar</button>
      </form>
    </div>
  );
}
