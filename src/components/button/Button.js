import styled, {css} from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `};

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};
  
  &:hover {
    opacity: 0.7;
    transition: opacity .3s ease-in-out;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    pointer-events:none; 
}
`;

const StyledButton = (props) => {
    return <Button {...props} />;
};

export default StyledButton;