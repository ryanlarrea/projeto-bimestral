import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Cadastro() {
  return (
    <Container>
      <form>
        <h1>Cadastre-se!</h1>

        <section className="container">
          <label htmlFor="nome">Nome</label>
          <input type="text" />

          <label htmlFor="email">E-mail</label>
          <input type="text" />

          <label htmlFor="senha">Senha</label>
          <input type="password" />

          <div className="acoes">
            <button type="submit">Cadastrar</button>
            <Link to="/">Já possui uma conta? Faça o login</Link>
          </div>
        </section>
      </form>
    </Container>
  );
}
