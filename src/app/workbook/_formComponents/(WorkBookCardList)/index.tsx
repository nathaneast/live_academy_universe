"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import WorkBookCard from "./WorkBookCard";

// FIXME: 타입 분리
interface WorkBookCard {
  imagePath: string;
  memo: string;
}

const WorkBookCardList = () => {
  const { control, register, getValues } = useFormContext<{
    workBookCards: WorkBookCard[];
  }>();
  const { fields, remove } = useFieldArray({
    control,
    name: "workBookCards",
  });

  return (
    <div className="flex flex-col gap-4">
      {fields.map((field, index) => (
        <WorkBookCard
          key={field.id}
          id={field.id}
          imagePath={getValues(`workBookCards.${index}.imagePath`)}
          memoRegister={() => register(`workBookCards.${index}.memo`)}
          deleteCard={() => remove(index)}
        />
      ))}
    </div>
  );
};

export default WorkBookCardList;
