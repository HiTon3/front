import { Dispatch, SetStateAction } from "react";
import { FormType } from ".";
import styled from "@emotion/styled";
import mood from "@/assets/mood.svg";
import light from "@/assets/light.svg";
import cloud from "@/assets/cloud.svg";
import onMood from "@/assets/onMood.svg";
import onCloud from "@/assets/onCloud.svg";
import onLight from "@/assets/onLight.svg";
import Image from "next/image";

interface Props {
  tabState: FormType;
  setTabState: Dispatch<SetStateAction<FormType>>;
}

interface ArrayType {
  text: FormType;
  Icon: string;
  onIcon: string;
}

const DreamTab = ({ setTabState, tabState }: Props) => {
  const tabArray: ArrayType[] = [
    {
      text: "길몽",
      Icon: mood,
      onIcon: onMood,
    },
    { text: "악몽", Icon: mood, onIcon: onMood },
    { text: "예지몽", Icon: light, onIcon: onCloud },
    { text: "일반", Icon: cloud, onIcon: onLight },
  ];

  return (
    <Wrapper>
      {tabArray.map((item) => {
        const { Icon, onIcon, text } = item;
        return (
          <TabItem
            key={item.text}
            onClick={() => setTabState(text)}
            isSelect={tabState === text}
          >
            <Image src={tabState === text ? onIcon : Icon} alt="" />
            <TabText>{text}</TabText>
          </TabItem>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 32px;
  width: 330px;
  display: flex;
  padding: 4px;
  justify-content: space-around;
  align-items: center;
  flex: 1 0 0;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.color.grey[30]};
`;

const TabItem = styled.div<{ isSelect: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: ${({ theme, isSelect }) =>
    isSelect ? theme.color.grey[100] : theme.color.grey[10]};

  > image {
    margin-right: 5px;
  }
`;

const TabText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: ${({ theme }) => theme.color.grey[50]};
`;

export default DreamTab;
