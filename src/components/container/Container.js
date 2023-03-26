import styled, { css } from "styled-components";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};
`;

const Container = (props) => {
  return <Div {...props} />;
};

export default Container;
