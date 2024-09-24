"use client";

import Image from "next/image";
import { useFormContext, useFieldArray } from "react-hook-form";

interface workBookCard {
  imagePath: string;
  memo: string;
}

const WorkBookCardList = () => {
  const { control, register } = useFormContext<{
    workBookCards: workBookCard[];
  }>();
  const { fields, remove } = useFieldArray({
    control,
    name: "workBookCards",
  });

  //   console.log(fields, " fields");

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id}>
          {/* TODO: UI X 아이콘 넣기 */}
          <button type="button" onClick={() => remove(index)}>
            삭제
          </button>
          <Image
            // src={`workBookCards.${index}.imagePath`}
            alt="워크북 카드 이미지"
            width={200}
            height={200}
          />
          <textarea {...register(`workBookCards.${index}.memo`)} />
        </div>
      ))}
    </div>
  );
};

export default WorkBookCardList;
