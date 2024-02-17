"use client";

import React from "react";

import { ThemeProvider } from "@emotion/react";

import { theme } from "@/style";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
