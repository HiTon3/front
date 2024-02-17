"use client";

import * as S from "./style";

import Image from "next/image";

import {
  VectorIcon,
  BadDreamIcon,
  GoodDreamIcon,
  VisionDreamIcon,
  CommonDeramIcon,
} from "@/assets";

const Type = {
  GOOD: ["길몽", <GoodDreamIcon />],
  BAD: ["악몽", <BadDreamIcon />],
  PRECOG: ["예지몽", <VisionDreamIcon />],
  DOG: ["일반", <CommonDeramIcon />],
} as const;

const Info = () => {
  return (
    <S.Layout>
      <S.GoBack>
        <VectorIcon />
      </S.GoBack>
      <S.ImageWrapper>
        <Image src={""} alt="" fill />
      </S.ImageWrapper>

      <S.Line />

      <S.DivisionContainer>
        <S.DivisionWrapper>
          <S.Division>꿈 종류</S.Division>
          <S.TypeWrapper>
            {Type["BAD"[1]]}
            <S.TypeText>{Type["BAD"][0]}</S.TypeText>
          </S.TypeWrapper>
        </S.DivisionWrapper>
        <S.DivisionWrapper>
          <S.Division>꿈의 내용</S.Division>
          <S.Text>
            아니 피그마가 내 꿈에 나와서
            <br />
            날 팼어요;;;;
            <br />
            아니 이게 말이 돼?
          </S.Text>
        </S.DivisionWrapper>
        <S.DivisionWrapper>
          <S.Division>해몽 내용</S.Division>
          <S.Text>
            피그마너이새끼
            <br />
            딱걸렸어
            <br />
            감히 내 꿈에 나와?
          </S.Text>
        </S.DivisionWrapper>
      </S.DivisionContainer>
    </S.Layout>
  );
};

export default Info;
