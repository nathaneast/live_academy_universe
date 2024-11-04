"use client";

import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import useTextArea from "@/components/hooks/useTextArea";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  id: string;
  imagePath: string;
  memoRegister: () => any;
  deleteCard: () => void;
}

const WorkBookCard = ({ id, imagePath, memoRegister, deleteCard }: Props) => {
  const { textareaRef, handleInputAutoHeight } = useTextArea();

  return (
    <Card key={id}>
      <CardContent className="flex flex-col gap-2 p-1">
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
      </CardContent>
    </Card>
  );
};

export default WorkBookCard;
