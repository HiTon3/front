import OpenAI from "openai";

const key = process.env.NEXT_PUBLIC_OPENAI_KEY;

export const useCreateImage = async (prompt: string) => {
  const openai = new OpenAI({
    apiKey: key,
    dangerouslyAllowBrowser: true,
  });

  const image = await openai.images.generate({
    model: "dall-e-2",
    prompt: prompt,
    size: "512x512",
    quality: "standard",
    n: 1,
  });

  console.table(image.data);

  return image.data[0].url;
};
