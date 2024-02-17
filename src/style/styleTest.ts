import styled from "@emotion/styled";

export const Test = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.color.primary["10"]};
`;
