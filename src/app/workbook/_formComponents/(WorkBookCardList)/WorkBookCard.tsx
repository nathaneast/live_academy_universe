"use client";

import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import useTextArea from "@/components/hooks/useTextArea";

interface Props {
  id: string;
  index: number;
  imagePath: string;
  memoRegister: () => any;
  deleteCard: (index: number) => void;
}

const WorkBookCard = ({
  id,
  index,
  imagePath,
  memoRegister,
  deleteCard,
}: Props) => {
  const { textareaRef, handleInputAutoHeight } = useTextArea();

  return (
    <div key={id} className="flex flex-col gap-2 border border-black">
      {/* TODO: UI X 아이콘 넣기 */}
      {/* <Button type="button" onClick={() => remove(index)}>
            삭제
          </Button> */}
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
