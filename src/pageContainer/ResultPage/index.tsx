"use client";

import * as S from "./style";

import Image from "next/image";

import { useRouter } from "next/navigation";

import {
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

const Result = () => {
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
      userName: localStorage.getItem("userName"),
    });
  };

  useEffect(() => {
    postInfo();
  }, []);

  return (
    <S.Layout>
      <S.Title>
        해몽이 완료됐어요!
        <br />
        영상과 함께 해몽을 확인하세요
      </S.Title>
      <S.ImageWrapper>
        <Image unoptimized src={image} alt="" fill />
      </S.ImageWrapper>

      <S.Line />

      <S.DivisionContainer>
        <S.DivisionWrapper>
          <S.Division>꿈 종류</S.Division>
          <S.TypeWrapper>
            {Type[reverse[type]][1]}
            <S.TypeText>{type}</S.TypeText>
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
      <S.Button onClick={() => push("/quest")}>완료</S.Button>
    </S.Layout>
  );
};

export default Result;
