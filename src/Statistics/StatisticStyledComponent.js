import styled from 'styled-components';

export const Title = styled.h2`
  text-align: center;
`;
export const List = styled.ul`
  font-size: 20px;
`;
export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
