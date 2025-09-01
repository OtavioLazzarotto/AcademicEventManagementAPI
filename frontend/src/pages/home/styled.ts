import styled from "styled-components";

export const Container = styled.div`
  margin: 40px auto;
  width: 50%;
  min-height: 60vh;
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
  align-items: center;
  /* background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08); */
  padding: 32px 16px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #22223b;
  margin-bottom: 32px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
`;

export const Card = styled.div`
  background: #ffffff;
  width: 100%;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

`;

export const Text = styled.p`
  font-size: 1.25rem;
  color: #4a4e69;
  margin: 0;
  font-weight: 500;
  text-align: center;
`;
