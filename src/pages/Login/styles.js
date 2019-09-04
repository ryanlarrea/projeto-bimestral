import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d2d2d2;
  height: 100%;

  h1 {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 30px;
    background: rgba(0, 0, 0, 0.6);
  }

  input {
    margin-bottom: 10px;
    -webkit-border-radius: 5px;
    -webkit-box-shadow: 1px 1px 45px #fff;
    outline: 0;
    width: 100%;
    height: 35px;
  }

  input:focus {
    background: rgba(255, 255, 255, 0.8);
  }

  .acoes {
    display: flex;
    flex-direction: column;
  }

  .esquecisenha {
    display: flex;
    justify-content: flex-end;
  }

  .cadastrar {
    display: flex;
    justify-content: center;
  }

  .cadastrar > a {
    font-size: 20px;
    font-weight: bold;
  }

  button {
    color: #fff;
    width: 100%;
    height: 50px;
    background: transparent;
    opacity: 0.5;
    border-radius: 25px;
    cursor: pointer;
    margin: 5px 0 5px 0;
    transition: all 0.2s ease;
  }

  button:hover {
    background: #030303;
    opacity: 1;
  }
`;
