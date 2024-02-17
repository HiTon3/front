import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  gap: 24px;
  width: 327px;
  flex-direction: column;

  border-radius: 16px;
  background: ${({ theme }) => theme.color.grey["20"]};
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.color.grey["100"]};

  font-size: 18px;
  font-weight: 600;
  line-height: 28px;

  margin-bottom: 4px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.grey["70"]};

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const ButtonWrapper = styled.form`
  display: flex;
  gap: 12px;
`;

export const Button = styled.button`
  display: flex;
  padding: 16px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  width: 100%;
  border: 0;

  background-color: ${({ theme }) => theme.color.grey["30"]};
  color: ${({ theme }) => theme.color.grey["100"]};

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const RedButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.colorScale.red};
`;
