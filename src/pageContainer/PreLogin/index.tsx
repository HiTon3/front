"use client";

import * as S from "./style";

import { LoginIcon } from "@/assets";

import { useRouter } from "next/navigation";

const PreLogin = () => {
  const { push } = useRouter();

  return (
    <S.Layout>
      <S.ButtonWrapper>
        <S.ExistingLogin onClick={() => push("/login")}>
          <LoginIcon />
          기존 계정으로 로그인
        </S.ExistingLogin>
        <S.Button onClick={() => push("/signup")}>
          새로운 계정으로 회원가입
        </S.Button>
      </S.ButtonWrapper>
    </S.Layout>
  );
};

export default PreLogin;
