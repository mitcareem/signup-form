import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px auto;
  width: 80%;
  max-width: 400px;
  min-height: 300px;
`;


const StyledForm = (props) => {
    return <Form {...props} />;
};

export default StyledForm;