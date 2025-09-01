import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem;
  background-color: #f5f5f5;
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  background-color: #cecece;
  padding: 10px;
  border-bottom: 1px solid #000;
  font-family: "Lucida Sans", Geneva, Verdana, sans-serif;
  font-weight: normal;
  font-size: 1.8rem;
  text-transform: uppercase;
  border-radius: 5px 5px 0 0;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  overflow: hidden;
  padding: 20px;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LabelForm = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const InputForm = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;

  &:focus {
    border-color: #0077ff;
    outline: none;
    box-shadow: 0 0 3px rgba(0, 119, 255, 0.5);
  }
`;

export const SelectForm = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;

  &:focus {
    border-color: #0077ff;
    outline: none;
    box-shadow: 0 0 3px rgba(0, 119, 255, 0.5);
  }
`;

export const ErrorText = styled.span`
  margin-top: 5px;
  color: red;
  font-size: 0.85rem;
`;

export const BtnControl = styled.div`
  padding-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Link = styled.p`
  padding-top: 10px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 0.9rem;
`;
