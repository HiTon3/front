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

import { useResultState } from "@/stores";

const Type = {
  GOOD: ["길몽", <GoodDreamIcon />],
  BAD: ["악몽", <BadDreamIcon />],
  PRECOG: ["예지몽", <VisionDreamIcon />],
  DOG: ["일반", <CommonDeramIcon />],
} as const;

const Info = () => {
  const { result } = useResultState();

  return (
    <S.Layout>
      <S.GoBack>
        <VectorIcon />
      </S.GoBack>
      {result && (
        <>
          <S.ImageWrapper>
            <Image unoptimized src={result.image} alt="" fill />
          </S.ImageWrapper>

          <S.Line />

          <S.DivisionContainer>
            <S.DivisionWrapper>
              <S.Division>꿈 종류</S.Division>
              <S.TypeWrapper>
                {Type[result.category as "GOOD" | "BAD" | "PRECOG" | "DOG"][1]}
                <S.TypeText>
                  {
                    Type[
                      result.category as "GOOD" | "BAD" | "PRECOG" | "DOG"
                    ][0]
                  }
                </S.TypeText>
              </S.TypeWrapper>
            </S.DivisionWrapper>
            <S.DivisionWrapper>
              <S.Division>꿈의 내용</S.Division>
              <S.Text>{result.text}</S.Text>
            </S.DivisionWrapper>
            <S.DivisionWrapper>
              <S.Division>해몽 내용</S.Division>
              <S.Text>{result.dreamText}</S.Text>
            </S.DivisionWrapper>
          </S.DivisionContainer>
        </>
      )}
    </S.Layout>
  );
};

export default Info;
