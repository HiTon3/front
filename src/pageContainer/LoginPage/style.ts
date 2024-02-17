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

export const InputArr = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
`;
