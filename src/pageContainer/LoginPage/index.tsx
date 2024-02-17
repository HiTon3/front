"use client";

import { VectorIcon } from "@/assets";
import { Input } from "@/components";
import * as S from "./style";

import { useState } from "react";

import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const { push } = useRouter();

  const inputArr = [
    {
      inputValue: email,
      setInputValue: setEmail,
      type: "email",
      title: "이메일",
      placeHolder: "example@ex.com",
    },
    {
      inputValue: pw,
      setInputValue: setPw,
      type: "password",
      title: "비밀번호",
      placeHolder: "비밀번호를 입력해주세요",
    },
  ];

  return (
    <S.Layout>
      <S.GoBack onClick={() => push("/")}>
        <VectorIcon />
      </S.GoBack>

      <S.InputArr>
        <S.Title>
          아래 정보를 입력하고
          <br />
          기존 계정으로 로그인 해주세요
        </S.Title>
        {inputArr.map((input) => (
          <Input
            title={input.title}
            setInputValue={input.setInputValue}
            inputValue={input.inputValue}
            placeHolder={input.placeHolder}
            type={input.type as "email" | "password" | "text"}
          />
        ))}
      </S.InputArr>

      <S.Button>확인</S.Button>
    </S.Layout>
  );
};

export default LoginPage;
