"use client";

import { useFormContext } from "react-hook-form";
import useTextArea from "@/components/hooks/useTextArea";

const DictationForm = () => {
  const { register } = useFormContext();
  const { textareaRef, handleInputAutoHeight } = useTextArea();

  /**
   * TODO: 사용안함 기능 추가 고려
   */

  return (
    <div>
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="받아쓰기 내용을 입력하세요"
        rows={4}
        {...register("dictation")}
        ref={textareaRef}
        onInput={handleInputAutoHeight}
      />
    </div>
  );
};

export default DictationForm;
