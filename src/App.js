import Header from "./components/header/Header";
import StyledForm from "./components/form/Form";
import StyledInput from "./components/input/Input";
import StyledButton from "./components/button/Button";
import Captcha from "./components/captcha/Captcha";
import Text from "./components/typography/Text";
import Container from "./components/container/Container";
import { useSelector } from "react-redux";

import { useState } from "react";

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const captcha = useSelector((state) => state.captcha.captcha);

  const [captchaText, setCaptchaText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captcha === captchaText) {
      setName("");
      setEmail("");
      setCaptchaText("");
      alert("Success");
    } else {
      alert("Captcha not matched");
    }
  };
  return (
    <Container backgroundColor={darkMode ? "#291238" : "white"}>
      <Header />
      <StyledForm onSubmit={handleSubmit}>
        <Text
          mb={"0"}
          fontSize={"1.2em"}
          fontWeight={"700"}
          color={darkMode ? "white" : "black"}
        >
          create an account
        </Text>
        <StyledInput
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <StyledInput
          value={email}
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Captcha />
        <StyledInput
          value={captchaText}
          placeholder="Enter captcha"
          onChange={(e) => setCaptchaText(e.target.value)}
          required
        />
        <StyledButton
          backgroundColor={darkMode ? "#ffc424" : "#291238"}
          color={darkMode ? "black" : "white"}
        >
          submit
        </StyledButton>
      </StyledForm>
    </Container>
  );
};

export default App;
