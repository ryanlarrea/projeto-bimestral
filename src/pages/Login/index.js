import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Login() {
  return (
    <Container>
      <form>
        <section className="container">
          <h1>Entre com sua conta</h1>

          <label htmlFor="email">E-mail</label>
          <input type="email" />

          <label htmlFor="senha">Senha</label>
          <input type="password" />

          <div className="acoes">
            <div className="esquecisenha">
              <Link to="/forgotpass">Esqueci minha senha</Link>
            </div>

            <div className="botoes">
              <button type="submit">Entrar</button>
            </div>
            <div className="cadastrar">
              <Link to="/cadastro">Não possui uma conta? Cadastre-se!</Link>
            </div>
          </div>
        </section>
      </form>
    </Container>
  );
}
