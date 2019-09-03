import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Login() {
  return (
    <Container>
      <form>
        <h1>Entre com sua conta</h1>

        <section className="container">
          <label htmlFor="email">E-mail</label>
          <input type="text" />

          <label htmlFor="senha">Senha</label>
          <input type="password" />

          <div className="acoes">
            <div className="botoes">
              <button type="submit">Entrar</button>
              <button>
                <Link to="/cadastro">Cadastrar-se</Link>
              </button>
            </div>
            <Link to="/forgotpass">Esqueci minha senha</Link>
          </div>
        </section>
      </form>
    </Container>
  );
}
