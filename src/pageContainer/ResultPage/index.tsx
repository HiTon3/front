"use client";

import * as S from "./style";

import Image from "next/image";

import { useRouter } from "next/navigation";

import {
  VectorIcon,
  BadDreamIcon,
  GoodDreamIcon,
  VisionDreamIcon,
  CommonDeramIcon,
} from "@/assets";

import {
  useImageState,
  useSolveState,
  useTypeState,
  useInputStore,
} from "@/stores";

import { apiInstance } from "@/api";
import { useEffect } from "react";

const Type = {
  GOOD: ["길몽", <GoodDreamIcon />],
  BAD: ["악몽", <BadDreamIcon />],
  PRECOG: ["예지몽", <VisionDreamIcon />],
  DOG: ["일반", <CommonDeramIcon />],
} as const;

const reverse = {
  길몽: "GOOD",
  악몽: "BAD",
  예지몽: "PRECOG",
  일반: "DOG",
};

const Info = () => {
  const { image } = useImageState();
  const { solve } = useSolveState();
  const { type } = useTypeState();
  const { input } = useInputStore();

  const { push } = useRouter();

  const postInfo = async () => {
    const res = await apiInstance.post("/dream/save", {
      image: image,
      video: "",
      category: reverse[type as "길몽" | "악몽" | "예지몽" | "일반"],
      text: solve,
      dreamText: input,
    });
  };

  useEffect(() => {
    postInfo();
  }, []);

  return (
    <S.Layout>
      <S.ImageWrapper>
        <Image unoptimized src={image} alt="" fill />
      </S.ImageWrapper>

      <S.Line />

      <S.DivisionContainer>
        <S.DivisionWrapper>
          <S.Division>꿈 종류</S.Division>
          <S.TypeWrapper>
            {type}
            <S.TypeText>{Type[reverse[type]][0]}</S.TypeText>
          </S.TypeWrapper>
        </S.DivisionWrapper>
        <S.DivisionWrapper>
          <S.Division>꿈의 내용</S.Division>
          <S.Text>{solve}</S.Text>
        </S.DivisionWrapper>
        <S.DivisionWrapper>
          <S.Division>해몽 내용</S.Division>
          <S.Text>{input}</S.Text>
        </S.DivisionWrapper>
      </S.DivisionContainer>
    </S.Layout>
  );
};

export default Info;
