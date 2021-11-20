import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("https://cdn.hipwallpaper.com/i/98/21/dUyCkp.jpg");
  background-size: cover;
  position: relative;
`;

export const Top = styled.div`

`

export const Wrapper = styled.div`
    padding: 20px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.img`
    height: 40px;
`

export const LoginBtn = styled.button`
    background-color: red;
    border: none;
    color: white;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0; //to prevent overflow
    left: 0; //to prevent overflow
    align-items: center;
    justify-content: center;
    color: white;

    h1 {
        font-size: 50px; 
    }
    h2 {
        margin: 20px;
    }
    p {
        font-size: 20px;
    }
`

export const InputField = styled.div`
        width: 50%;
        height: 50px;
        border-radius: 5px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;

        input {
            flex: 9;
            height: 100%;
            border: none;
            padding: 0 10px;
        }
        button {
            flex: 3;
            cursor: pointer;
            height: 100%;
            border: none;
            background-color: red;
            font-size: 22px;
            color: white;
        }
`

export const InputFieldForm = styled.form`
        width: 50%;
        height: 50px;
        border-radius: 5px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;

        input {
            flex: 9;
            height: 100%;
            border: none;
            padding: 0 10px;
        }
        button {
            flex: 3;
            cursor: pointer;
            height: 100%;
            border: none;
            background-color: red;
            font-size: 22px;
            color: white;
        }
`