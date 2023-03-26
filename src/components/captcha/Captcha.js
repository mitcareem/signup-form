import { useEffect } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import { IoMdRefreshCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateCaptcha } from "../../store/captchaSlice";

const CaptchaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CaptchaText = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-right: 10px;
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;

const RefreshIcon = styled(IoMdRefreshCircle)`
  font-size: 2.2em;
  cursor: pointer;
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;

const generateCaptcha = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};

const Captcha = (props) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [captcha, setCaptcha] = useState(generateCaptcha());

  useEffect(() => {
    dispatch(updateCaptcha(captcha));
  }, []);

  const handleRefresh = () => {
    const newCaptcha = generateCaptcha();
    setCaptcha(newCaptcha);
    dispatch(updateCaptcha(newCaptcha));
  };

  return (
    <CaptchaContainer {...props}>
      <CaptchaText color={darkMode ? "white" : "black"}>{captcha}</CaptchaText>
      <RefreshIcon color={darkMode ? "white" : "black"} onClick={handleRefresh}>
        Refresh
      </RefreshIcon>
    </CaptchaContainer>
  );
};

export default Captcha;
