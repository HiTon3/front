import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  width: 372px;
  height: 100vh;
  padding: 54px 24px 0 24px;

  position: relative;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  align-items: center;
`;

export const ExistingLogin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  width: 195px;
  height: 48px;
  border: 0;
  cursor: pointer;

  border-radius: 40px;
  border: 1px solid ${({ theme }) => theme.color.grey["30"]};
  background: ${({ theme }) => theme.color.grey["20"]};

  color: ${({ theme }) => theme.color.grey["100"]};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
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
`;
