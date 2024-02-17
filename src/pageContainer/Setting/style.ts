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

export const FeatWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin: 16px 0;

  cursor: pointer;
`;

export const FeatText = styled.span`
  color: ${({ theme }) => theme.color.grey["100"]};

  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

export const RedFeatText = styled(FeatText)`
  color: ${({ theme }) => theme.color.colorScale.red};
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.color.grey["30"]};

  margin: 16px 0;
`;

export const ModalWrapper = styled.dialog`
  border-radius: 16px;
  border: none;
  padding: 0;
  outline: none;
  background: ${({ theme }) => theme.color.grey["20"]};

  ::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
`;
