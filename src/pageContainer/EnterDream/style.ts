import styled from "@emotion/styled";

export const Layout = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
`;

export const GoBackButton = styled.button`
  cursor: pointer;
  margin-top: 8px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.grey["100"]};

  font-size: 26px;
  font-weight: 700;
  line-height: 40px;
`;

export const DreamInput = styled.textarea`
  color: ${({ theme }) => theme.color.grey["100"]};

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  width: 100%;
  padding: 24px;

  border: none;
  outline: none;
  resize: none;

  ::placeholder {
    color: ${({ theme }) => theme.color.grey["50"]};
  }
`;
