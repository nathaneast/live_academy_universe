"use client";

import { useFormContext } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
// import useTextArea from "@/components/hooks/useTextArea";
import { FormLabel } from "@/components/ui/form";

const SelfDictationBoard = () => {
  const { register } = useFormContext();
  /** TODO: TextArea 줄바꿈 될 때마다 hegiht 동적 늘어나는것 구현 */
  // const { textareaRef: dictationRef, handleInputAutoHeight: dictationOnInput } =
  //   useTextArea();
  // const { textareaRef: feedbackRef, handleInputAutoHeight: feedbackOnInput } =
  //   useTextArea();

  return (
    <section className="flex flex-col gap-2">
      <div>
        <FormLabel>받아쓰기 or 예문 작문</FormLabel>
        <Textarea
          {...register("dictation")}
          rows={4}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="받아쓰기 or 예문 작문할 내용을 입력하세요"
        />
      </div>

      <div>
        <FormLabel>피드백</FormLabel>
        <Textarea
          {...register("feedback")}
          rows={4}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="피드백 내용을 입력하세요"
        />
      </div>
    </section>
  );
};

export default SelfDictationBoard;
