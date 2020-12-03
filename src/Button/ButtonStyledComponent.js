import styled from 'styled-components';

export const ButtonFeedback = styled.button`
  font-weight: 700;
  font-size: 18px;
  outline: none;
  color: white;
  padding: 10px;
  border-radius: 3px;
  border: none;
  background: rgb(64, 199, 129);
  box-shadow: 0 -3px rgb(53, 167, 110) inset;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }
`
