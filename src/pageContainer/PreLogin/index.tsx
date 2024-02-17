"use client";

import * as S from "./style";

import { LoginIcon } from "@/assets";

const PreLogin = () => {
  return (
    <S.Layout>
      <S.ButtonWrapper>
        <S.ExistingLogin>
          <LoginIcon />
          기존 계정으로 로그인
        </S.ExistingLogin>
        <S.Button>새로운 계정으로 회원가입</S.Button>
      </S.ButtonWrapper>
    </S.Layout>
  );
};

export default PreLogin;
