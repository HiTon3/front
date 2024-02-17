"use client";

import Cloude from "@/assets/Cloude";
import * as S from "./style";
import Explore from "@/assets/Explore";
import History from "@/assets/History";
import Link from "next/link";

const Modal: React.FC = () => (
  <S.Wrapper>
    <S.Item>
      <Link href="/" style={{ display: "flex", flexDirection: "column" }}>
        <Cloude />
        <S.Title>해몽</S.Title>
      </Link>
    </S.Item>
    <S.Item>
      <Link
        href="/explore"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Explore />

        <S.Title>탐색</S.Title>
      </Link>
    </S.Item>
    <S.Item>
      <Link
        href="/history"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <History />
        <S.Title>기록</S.Title>
      </Link>
    </S.Item>
  </S.Wrapper>
);

export default Modal;
