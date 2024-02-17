"use client";

import { VectorIcon, MoneyIcon, ExitIcon } from "@/assets";
import { LogoutModal } from "@/components";
import * as S from "./style";

import { useRef } from "react";

interface Props {
  goPrev: () => void;
}

const Setting: React.FC<Props> = ({ goPrev }) => {
  const dialog = useRef<HTMLDialogElement>(null);

  const onClick = () => {
    //로그아웃 코드
  };

  return (
    <S.Layout>
      <S.GoBack onClick={goPrev}>
        <VectorIcon />
      </S.GoBack>
      <S.Title>
        {"이름"}님, <br />
        어떤 도움이 필요하신가요?
      </S.Title>

      <S.Line />

      <S.FeatWrapper>
        <MoneyIcon />
        <S.FeatText>결제하기</S.FeatText>
      </S.FeatWrapper>
      <S.FeatWrapper onClick={() => dialog.current?.showModal()}>
        <ExitIcon />
        <S.RedFeatText>로그아웃</S.RedFeatText>
      </S.FeatWrapper>

      <S.ModalWrapper ref={dialog}>
        <LogoutModal onClick={onClick} />
      </S.ModalWrapper>
    </S.Layout>
  );
};

export default Setting;
