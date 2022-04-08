import styled from "styled-components/native";

interface IContainerProps {
  color: string;
}

export const Container = styled.View<IContainerProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.color.main};
`;
