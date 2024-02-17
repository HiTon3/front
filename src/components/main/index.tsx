import styled from "@emotion/styled";
import ReadingDreamItem from "./readingDreamItem";

const Main = () => {
  return (
    <Wrapper>
      <p>
        안녕하세요 {localStorage.getItem("userName")}님 <br /> 오늘은 어떤 꿈을
        꾸셨나요?
      </p>
      <StartReadingDreamContainer>
        <ReadingDreamItem type="IMAGE" />
        <ReadingDreamItem type="VIDEO" />
      </StartReadingDreamContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  margin-bottom: 16px;

  > p {
    margin-bottom: 16px;
    line-height: 40px;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    color: ${({ theme }) => theme.color.grey[100]};
  }
`;

const StartReadingDreamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export default Main;
