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

export const ImageWrapper = styled.div`
  width: 327px;
  height: 327px;
  border-radius: 8px;

  overflow: hidden;
  position: relative;

  margin-top: 32px;

  img {
    object-fit: cover;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.color.grey["30"]};

  margin: 40px 0 32px;
`;

export const DivisionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const DivisionWrapper = styled(DivisionContainer)`
  gap: 8px;
`;

export const TypeWrapper = styled.div`
  display: flex;
  gap: 2px;
`;

export const Division = styled.span`
  color: ${({ theme }) => theme.color.grey["70"]};

  font-family: SUITE;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;

  height: 100px;
  overflow-y: scroll;
`;

export const TypeText = styled(Text)`
  font-weight: 600;
  font-size: 18px;
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

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.grey["100"]};

  font-size: 26px;
  font-weight: 700;
  line-height: 40px;

  margin: 48px 0 16px;
`;
