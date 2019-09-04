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
          <input type="text" placeholder="Ex.: Ryan" />

          <label htmlFor="email">E-mail</label>
<<<<<<< HEAD
          <input type="email" placeholder="example@mail.com" />
=======
          <input type="text" placeholder="example@mail.com" />
>>>>>>> c83566bd9e4768de9a73784e245fd4f55670beb7

          <label htmlFor="senha">Senha</label>
          <input type="password" />

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
