import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
`;

export const Heading = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Arial", sans-serif;
  color: #222;
`;

export const AddButton = styled(Link)`
  background-color: #17a2b8;
  color: white;
  border: 1px solid #17a2b8;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Arial", sans-serif;
  transition: background-color 0.3s ease, transform 0.1s ease;
  display: inline-block;
  margin-bottom: 20px;

  &:hover {
    background-color: #138496;
  }
  &:active {
    transform: translateY(1px);
  }
`;

export const BackButton = styled(Link)`
  background-color: #6c757d;
  width: 100%;
  text-align: center;
  color: white;
  border: 1px solid #6c757d;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Arial", sans-serif;
  transition: background-color 0.3s ease, transform 0.1s ease;
  display: inline-block;
  margin-top: 20px;

  &:hover {
    background-color: #5a6268;
  }
  &:active {
    transform: translateY(1px);
  }
`;

export const EventCard = styled.div`
  background-color: #fff8f0;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 20px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export const EventTitle = styled.h2`
  margin-bottom: 10px;
  color: #333;
`;

export const EventDescription = styled.p`
  margin-bottom: 8px;
  color: #555;
`;

export const EventInfo = styled.p`
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: #666;
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

export const LoadingContainer = styled(Message)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #ddd;
  border-top-color: #ffa500;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 15px;
`;

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 15px;
  justify-content: flex-start;
`;

export const SubscribeButton = styled.button`
  background-color: #28a745;
  color: white;
  border: 1px solid #28a745;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Arial", sans-serif;
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

export const EditButton = styled.button`
  background-color: #007bff;
  color: white;
  border: 1px solid #007bff;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Arial", sans-serif;
  transition: background-color 0.3s ease, transform 0.1s ease;

  &:hover {
    background-color: #0069d9;
  }
  &:active {
    transform: translateY(1px);
  }
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: 1px solid #dc3545;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  font-family: "Arial", sans-serif;
  transition: background-color 0.3s ease, transform 0.1s ease;

  &:hover {
    background-color: #c82333;
  }
  &:active {
    transform: translateY(1px);
  }
`;
