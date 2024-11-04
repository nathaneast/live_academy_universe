"use client";

import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import useTextArea from "@/components/hooks/useTextArea";

interface Props {
  id: string;
  imagePath: string;
  memoRegister: () => any;
  deleteCard: () => void;
}

const WorkBookCard = ({ id, imagePath, memoRegister, deleteCard }: Props) => {
  const { textareaRef, handleInputAutoHeight } = useTextArea();

  return (
    <div key={id} className="flex flex-col gap-2 border border-black">
      <div className="relative">
        <span
          onClick={deleteCard}
          className="absolute top-4 right-4 cursor-pointer text-xl"
        >
          ❌
        </span>
      </div>
      <Image
        src={imagePath}
        alt="워크북 카드 이미지"
        layout="responsive"
        width={100}
        height={100}
      />
      <Textarea
        {...memoRegister()}
        ref={textareaRef}
        className="resize-y"
        rows={3}
        onInput={handleInputAutoHeight}
      />
    </div>
  );
};

export default WorkBookCard;
