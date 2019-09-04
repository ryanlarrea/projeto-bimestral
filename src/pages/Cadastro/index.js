import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function Cadastro() {
  return (
    <Container>
      <form>
        <section className="container">
          <h1>Cadastre-se!</h1>

          <label htmlFor="nome">Nome</label>
          <input id="nome" type="text" placeholder="Ex.: Ryan" />

          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" placeholder="example@mail.com" />

          <label htmlFor="senha">Senha</label>
          <input id="senha" type="password" />

          <div className="acoes">
            <button type="submit">Cadastrar</button>
            <div className="japossui">
              <Link to="/">Já possui uma conta? Faça o login</Link>
            </div>
          </div>
        </section>
      </form>
    </Container>
  );
}
