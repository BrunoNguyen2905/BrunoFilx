import { useRef, useState } from "react";
import {
  RegisterContainer,
  Wrapper,
  Logo,
  LoginBtn,
  Container,
  InputField,
  InputFieldForm
} from "./registerStyle";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const emailRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleStart = (): void => {
    setEmail(emailRef.current.value);
  };

  const handleFinnish = (): void => {
    setPassword(passwordRef.current.value);
  };
  return (
    <RegisterContainer>
      <div className="top">
        <Wrapper>
          <Logo
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="netflix"
          />
          <LoginBtn>Sign In</LoginBtn>
        </Wrapper>
      </div>
      <Container>
        <h1> Unlimited movies, TV show, and more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership
        </p>
        {!email ? (
          <InputField>
            <input
              type="email"
              placeholder=" email address"
              ref={emailRef}
            />
            <button onClick={handleStart}>Get Started</button>
          </InputField>
        ) : (
          <InputFieldForm>
            <input
              type="password"
              placeholder="password"
              ref={passwordRef}
            />
            <button onClick={handleFinnish}>Start</button>
          </InputFieldForm>
        )}
      </Container>
    </RegisterContainer>
  );
};

export default Register;
