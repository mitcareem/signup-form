import styled, { css } from "styled-components";

const Text = styled.p`
  text-align: center;
  text-transform: capitalize;

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};
  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `};

  ${(props) =>
    props.fontWeight &&
    css`
      font-weight: ${props.fontWeight};
    `};

  ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt};
    `};

  ${(props) =>
    props.mr &&
    css`
      margin-right: ${props.mr};
    `};

  ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `};

  ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml};
    `};
`;

export default Text;
