import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  width: 372px;
  height: 100vh;
  padding: 54px 24px 0 24px;

  position: relative;
`;

export const GoBack = styled.div`
  cursor: pointer;
  margin-top: 8px;

  width: fit-content;
  height: fit-content;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.grey["100"]};

  font-size: 26px;
  font-weight: 700;
  line-height: 40px;

  margin: 48px 0 16px;
`;

export const TextArea = styled.textarea<{ isFocused: boolean }>`
  color: ${({ theme }) => theme.color.grey["100"]};

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  width: 100%;
  margin: 24px 0;
  padding: 0;
  background: none;

  border: none;
  outline: none;
  resize: none;

  ::placeholder {
    color: ${({ theme }) => theme.color.grey["50"]};
  }

  border-bottom: ${({ theme, isFocused }) =>
    isFocused && "1px solid " + theme.color.grey["100"]};

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 327px;

  border-radius: 16px;
  background: ${({ theme }) => theme.color.primary["30"]};
  border: 0;
  cursor: pointer;

  color: ${({ theme }) => theme.color.grey["100"]};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;

  position: absolute;
  bottom: 24px;
`;

export const Loading = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 280px;
`;
