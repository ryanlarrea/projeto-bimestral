import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export default function EsqueciSenha() {
  return (
    <Container>
      <form>
        <section className="container">
          <h1>Digite um e-mail para recuperar sua senha</h1>

          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" />

          <div className="acoes">
            <button type="submit">Enviar</button>
            <div className="voltar">
              <Link to="/">Voltar ao Login</Link>
            </div>
          </div>
        </section>
      </form>
    </Container>
  );
}
