import React, { useState } from 'react';
import Input from '../../molecule/Input/Input'; 
import AtomButton from '../../atom/Button/AtomButton'; 
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault(); 
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="LoginForm">
      <form onSubmit={handleLogin}>
      <h2> Comment voulez-vous vous connecter ?</h2>
        <Input
          label="E-mail"
          type="email"
          value={email}
          placeholder="Entrez votre adresse e-mail"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Mot de passe"
          type="password"
          value={password}
          placeholder="Entrez votre mot de passe"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <a href="/forgot-password" className="forgot-password-link">J'ai oublié mon mot de passe oublié </a>
        <AtomButton type="submit" primary> C'est parti !</AtomButton>
      </form>
    </div>
  );
};

export default Login;
