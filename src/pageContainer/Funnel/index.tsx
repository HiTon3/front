"use client";

import { useState } from "react";

import * as P from "@/pageContainer";

const Funnel = () => {
  const [curIndex, setCurIndex] = useState(1);

  return (
    <>
      {curIndex === 0 && <div>해몽 탭</div>}
      {curIndex === 1 && (
        <P.EnterDeram
          goPrev={() => setCurIndex(0)}
          goNext={() => setCurIndex(2)}
        />
      )}
      {curIndex === 2 && <div>꿈 해몽 완료</div>}
    </>
  );
};

export default Funnel;
