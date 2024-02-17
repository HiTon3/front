"use client";

import { useState } from "react";

const Funnel = () => {
  const [curIndex, setCurIndex] = useState(0);

  return (
    <>
      {curIndex === 0 && <div>해몽 탭</div>}
      {curIndex === 1 && <div>꿈 입력</div>}
      {curIndex === 2 && <div>꿈 해몽 완료</div>}
    </>
  );
};

export default Funnel;
