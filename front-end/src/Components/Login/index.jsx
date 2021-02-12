import React from 'react'
import Header from '../Header';

import './styles.css'

function Login() {
  function handleLogin(e) {
    e.preventDefault();
    console.log(e.target);
  }

  return (
    <div className="login-wrapper">
      <Header />
      <main>
        <form className="login" onSubmit={handleLogin}>
          <h2>Entrar</h2>
          <label htmlFor="username">Usuário</label>
          <input type="text" id="username" name="username"/>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password"/>

          <button type="submit">
            Entrar
          </button>
        </form>
      </main>
    </div>
  )
}

export default Login;