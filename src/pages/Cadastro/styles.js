<<<<<<< HEAD
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

  @media (min-width: 798px) {
    .container {
      width: 428px;
    }
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

  .japossui {
    display: flex;
    justify-content: center;
  }

  .japossui > a {
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
=======
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d2d2d2;
  height: 100%;

  form {
    height: 100%;
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
  }

  .container {
    width: 400px;
  }

  h1 {
    margin-bottom: 20px;
  }

  input {
    margin-bottom: 20px;
    -webkit-border-radius: 5px;
    -webkit-box-shadow: 1px 1px 45px #fff;
    outline: 0;
    width: 100%;
    height: 50px;
  }

  input:focus {
    background: #e3e3e3;
  }

  .acoes {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 7px;
    padding: 10px;
  }

  button {
    color: #fff;
    width: 140px;
    height: 50px;
    background: transparent;
    opacity: 0.5;
    border-radius: 25px;
    cursor: pointer;
    margin: 5px;
    transition: all 0.2s ease;
  }

  button:hover {
    background: #030303;
    opacity: 1;
  }
`;
>>>>>>> c83566bd9e4768de9a73784e245fd4f55670beb7
