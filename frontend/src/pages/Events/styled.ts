import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
`;

export const Message = styled.div`
  width: 50%;
  margin: 20px auto;
  text-align: center;
  padding: 50px;
  background-color: #f5f5f5;
  border-radius: 6px;
  font-size: 1.2rem;
  color: #333;
  border: 1px dashed #ccc;
`;


export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Arial", sans-serif;
  color: #222;
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #fff8f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;


export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabelForm = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`;


export const InputForm = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #ffa500;
    box-shadow: 0 0 0 3px rgba(255, 165, 0, 0.3);
  }
`;


export const ErrorMsg = styled.span`
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 2px;
`;


export const BtnControl = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;


export const SubmitButton = styled.button`
  background-color: #28a745;
  color: white;
  border: 1px solid #28a745;
  padding: 10px 25px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Arial", sans-serif;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.1s ease;

  &:hover {
    background-color: #218838;
  }
  &:active {
    transform: translateY(1px);
  }
  &:disabled {
    background-color: #94d3a2;
    border: 1px solid #94d3a2;
    cursor: not-allowed;
    color: #e0e0e0;
  }
`;


export const BackButton = styled.button`
  background-color: #007bff;
  color: white;
  border: 1px solid #007bff;
  padding: 10px 25px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Arial", sans-serif;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.1s ease;
  margin-top: 10px;

  &:hover {
    background-color: #0069d9;
  }
  &:active {
    transform: translateY(1px);
  }
`;
