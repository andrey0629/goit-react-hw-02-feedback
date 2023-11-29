import styled from 'styled-components';

export const FeedbackOptionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

export const FeedbackButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #4caf50;
  color: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #45a049;
  }
`;
