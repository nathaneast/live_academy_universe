"use client";

import { useRef } from "react";

const useTextArea = () => {
  const textareaRef = useRef(null);

  const handleInputAutoHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto"; // 높이 초기화
    textarea.style.height = `${textarea.scrollHeight}px`; // 스크롤 높이에 맞춰 조정
  };

  return {
    textareaRef,
    handleInputAutoHeight,
  };
};

export default useTextArea;
