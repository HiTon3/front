"use client";

import * as S from "./style";

interface ModalProps {
  onClick: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClick }) => (
  <S.Wrapper>
    <S.Title>로그아웃 하시겠어요?</S.Title>
    <S.Description>
      로그아웃하시면 다시 로그인 할 때 까지
      <br /> 사용하지 못하게 돼요
    </S.Description>
    <S.ButtonWrapper method="dialog">
      <S.Button>취소</S.Button>
      <S.RedButton onClick={onClick}>로그아웃</S.RedButton>
    </S.ButtonWrapper>
  </S.Wrapper>
);

export default Modal;
