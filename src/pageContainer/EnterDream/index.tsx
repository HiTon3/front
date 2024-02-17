"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";

import { useAutoResizeTextArea } from "@/hooks";
import { VectorIcon } from "@/assets";
import * as S from "./style";

import OpenAI from "openai";

const MAX_LENGTH = 200;

interface Props {
  goPrev: () => void;
  goNext: () => void;
}

const EnterDream: React.FC<Props> = ({ goNext, goPrev }) => {
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

  const solveDream = async () => {
    setIsLoading(true);

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: inputValue,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    console.table(completion.choices[0].message.content);
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

  const handleSubmit = () => {
    solveDream();
  };

  return (
    <S.Layout>
      <S.GoBack onClick={goPrev}>
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
    </S.Layout>
  );
};

export default EnterDream;
