import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction:column;
  margin: 0 auto;
  justify-content: center;
  align-items:center;
  background:white;
  height:500px;
  width:600px;
  border-radius:33px;
`;
export const FForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  margin: 10px;
  padding:30px;
  background: white;
  color: rgb(7 2 18);
  transition: all 200ms ease;
  border-left: 0 solid transparent;
  width: 500px;
  border-radius:33px;
  border: 1px solid #00BCD4;

`;
export const FormTextArea = styled.textarea`
  display:flex;
  justify-content:center;
  padding:30px;
  margin: 10px;
  background: white;
  color: rgb(7 2 18);
  transition: all 200ms ease;
  border-radius:33px;
  border: 1px solid #00BCD4;
  height: 6.8rem;
  width: 500px;
  max-width:500px;
`;

export const FormHeader = styled.h1`
  color: #00BCD4  
`
