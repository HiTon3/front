import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputTitle = styled.span`
  color: ${({ theme }) => theme.color.grey["90"]};

  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  padding-left: 4px;
`;

export const Input = styled.input`
  padding: 16px;

  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.color.grey["30"]};
  background: ${({ theme }) => theme.color.grey["20"]};
  color: ${({ theme }) => theme.color.grey["100"]};

  ::placeholder {
    color: ${({ theme }) => theme.color.grey["50"]};
  }

  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;
