import styled from 'styled-components';

const Input = styled.input`
  padding: 8px 12px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  
  &:focus {
    border-color: #0077cc;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(0,119,204,.6);
  }
`;

const StyledInput = (props) => {
    return <Input {...props} />;
};

export default StyledInput;