import styled from "@emotion/styled";

export const Layout = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
`;

export const GoBackButton = styled.button`
  cursor: pointer;
  margin-top: 8px;
  padding: 0;
  border: 0;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.grey["100"]};

  font-size: 26px;
  font-weight: 700;
  line-height: 40px;
`;

export const TextArea = styled.textarea<{ isFocused: boolean }>`
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

  border-bottom: ${({ theme, isFocused }) =>
    (isFocused ? "1" : "0") + "px solid " + theme.color.grey["100"]};
`;

export const Button = styled.button`
  display: flex;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 16px;
  background: ${({ theme }) => theme.color.primary["30"]};

  color: ${({ theme }) => theme.color.grey["100"]};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;
