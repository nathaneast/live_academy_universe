"use client";

import Image from "next/image";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface workBookCard {
  imagePath: string;
  memo: string;
}

const WorkBookCardList = () => {
  const { control, register, getValues } = useFormContext<{
    workBookCards: workBookCard[];
  }>();
  const { fields, remove } = useFieldArray({
    control,
    name: "workBookCards",
  });

  //   console.log(fields, " fields");

  return (
    <div className="flex flex-col gap-4">
      {fields.map((field, index) => (
        <div key={field.id} className="flex flex-col gap-2 border border-black">
          {/* TODO: UI X 아이콘 넣기 */}
          {/* <Button type="button" onClick={() => remove(index)}>
            삭제
          </Button> */}
          <Image
            src={getValues(`workBookCards.${index}.imagePath`)}
            alt="워크북 카드 이미지"
            layout="responsive"
            width={100}
            height={100}
          />
          <Textarea {...register(`workBookCards.${index}.memo`)} />
        </div>
      ))}
    </div>
  );
};

export default WorkBookCardList;
