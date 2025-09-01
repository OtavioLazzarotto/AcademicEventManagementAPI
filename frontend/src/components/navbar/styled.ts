import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  justify-content: flex-end;
  background: #f8f9fa;
  border-radius: 10px;
  padding: 16px 24px;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 1.8rem;
  color: #22223b;
`;

export const ContentRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 18px;
  margin-right: 10px;
`;

export const Date = styled.p`
  font-weight: 500;
  color: #4f8cff;
  background: #e9f1ff;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 1rem;
`;

export const Logout = styled.button`
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  background: #ff4f4f;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 18px;
  font-size: 1rem;
  transition: background 0.2s;

  &:hover {
    background: #d90429;
  }

  &:focus {
    outline: 2px solid #22223b;
    outline-offset: 2px;
  }
`;

export const MyScriptions = styled.button`
  font-weight: bold;
  text-transform: uppercase;
  padding: 8px 10px;
  background-color: #39aa2fff;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: rgba(34, 116, 68, 1);
  }
`
