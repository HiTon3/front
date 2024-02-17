"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";

import { useAutoResizeTextArea } from "@/hooks";
import { VectorIcon } from "@/assets";
import * as S from "./style";
import {
  useSolveState,
  useEngSolveState,
  useImageState,
  useTypeState,
  useInputStore,
} from "@/stores";

import { quantum } from "ldrs";

import OpenAI from "openai";

import { useRouter } from "next/navigation";

const MAX_LENGTH = 200;

const EnterDream = () => {
  const { push } = useRouter();

  const { setSolve } = useSolveState();
  const { setEngSolve } = useEngSolveState();
  const { setImage } = useImageState();
  const { setType } = useTypeState();
  const { setInput } = useInputStore();

  const [inputValue, setInputValue] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isMultiLine, setIsMultiLine] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const key = process.env.NEXT_PUBLIC_OPENAI_KEY;

  const openai = new OpenAI({
    apiKey: key,
    dangerouslyAllowBrowser: true,
  });

  quantum.register();

  const solveDream = async () => {
    setIsLoading(true);

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `내가 꾼 꿈을 설명해줄게 해몽해줘. 꿈 내용 : ${inputValue}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    const engCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `내가 꾼 꿈을 설명해줄게 영어로 해몽해줘. 꿈 내용 : ${inputValue}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    const englishVersion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `영어로 이 내용을 바꿔줘. 바꿀 내용 : ${completion.choices[0].message.content}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    const res = await openai.images.generate({
      prompt: `Draw a scene of my dream. The contents of the dream : ${engCompletion.choices[0].message.content}`,
      size: "512x512",
      quality: "standard",
      n: 1,
    });

    const type = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `이 내용이 다음 항목 중 어디에 해당하는지 "길몽" "악몽" "예지몽" "일반". 꼭 길몽, 악몽, 예지몽, 일반 중에 하나로 답해줘. 궁금한 내용 : ${completion.choices[0].message.content}`,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    setInput(inputValue);
    setSolve(completion.choices[0].message.content as string);
    setType(type.choices[0].message.content as string);
    setEngSolve(englishVersion.choices[0].message.content as string);
    setImage(res.data[0].url as string);
    setIsLoading(false);
  };

  useAutoResizeTextArea(textAreaRef.current, inputValue, setIsMultiLine);

  // textArea의 focus를 컨트롤합니다. -> focus 시 border 변경.
  useEffect(() => {
    const currentTextAreaRef = textAreaRef.current;

    const onFocus = () => setIsFocused(true);
    const offFocus = () => setIsFocused(false);

    if (currentTextAreaRef) {
      currentTextAreaRef.addEventListener("focus", onFocus);
      currentTextAreaRef.addEventListener("blur", offFocus);
    }

    return () => {
      if (currentTextAreaRef) {
        currentTextAreaRef.removeEventListener("focus", onFocus);
        currentTextAreaRef.removeEventListener("blur", offFocus);
      }
    };
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value.slice(0, MAX_LENGTH);

    setInputValue(inputValue);
  };

  const handleSubmit = async () => {
    await solveDream();
    push("/result");
  };

  return (
    <S.Layout>
      {isLoading ? (
        <>
          <S.Title>
            꿈을 해몽하고 있어요
            <br />
            조금만 기다려주세요 🧐
          </S.Title>
          <S.Loading>
            <l-quantum size="100" speed="1" color="white"></l-quantum>
          </S.Loading>
        </>
      ) : (
        <>
          <S.GoBack onClick={() => push("/main")}>
            <VectorIcon />
          </S.GoBack>
          <S.Title>어떤 꿈을 꾸셨나요?</S.Title>
          <S.TextArea
            isFocused={isFocused}
            placeholder={"상세히 적어줄 수록 더욱 정확한 결과가 나와요"}
            maxLength={MAX_LENGTH}
            value={inputValue}
            onChange={handleInputChange}
            ref={textAreaRef}
          />
          <S.Button
            disabled={inputValue.length < 2 || isLoading}
            onClick={handleSubmit}
          >
            다음
          </S.Button>
        </>
      )}
    </S.Layout>
  );
};

export default EnterDream;
