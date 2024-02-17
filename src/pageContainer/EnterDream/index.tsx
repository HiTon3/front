"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";

import { useAutoResizeTextArea } from "@/hooks";
import { VectorIcon } from "@/assets";
import * as S from "./style";

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
      <S.Button>다음</S.Button>
    </S.Layout>
  );
};

export default EnterDream;
