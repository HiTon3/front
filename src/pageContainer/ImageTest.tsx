"use client";

import OpenAI from "openai";

import { useState } from "react";

const ImageTest = () => {
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const key = process.env.NEXT_PUBLIC_OPENAI_KEY;

  const openai = new OpenAI({
    apiKey: key,
    dangerouslyAllowBrowser: true,
  });

  const onClick = async () => {
    if (!isLoading) {
      setIsLoading(true);
      try {
        const res = await openai.images.generate({
          prompt: "하늘을 나는 고양이",
          size: "256x256",
          quality: "standard",
          n: 1,
        });
        setImage(res.data[0].url);
      } catch (error) {
        console.error("Failed to generate image:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {isLoading ? (
        <p style={{ color: "white" }}>Loading...</p>
      ) : (
        <>
          {image && (
            <img alt="Generated Image" src={image} width={256} height={256} />
          )}
          <button onClick={onClick} disabled={isLoading}>
            누르기
          </button>
        </>
      )}
    </>
  );
};

export default ImageTest;
