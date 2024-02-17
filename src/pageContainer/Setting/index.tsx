"use client";

import { VectorIcon, MoneyIcon, ExitIcon } from "@/assets";
import * as S from "./style";

interface Props {
  goPrev: () => void;
}

const Setting: React.FC<Props> = ({ goPrev }) => {
  return (
    <S.Layout>
      <S.GoBack onClick={goPrev}>
        <VectorIcon />
      </S.GoBack>
      <S.Line />
      <S.Title>
        {"이름"}님, <br />
        어떤 도움이 필요하신가요?
      </S.Title>
    </S.Layout>
  );
};

export default Setting;
