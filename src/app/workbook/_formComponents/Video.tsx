"use client";

import { useFormContext } from "react-hook-form";
import { Button } from "components/ui/button";

const Video = () => {
  const { register, setValue, getValues } = useFormContext();

  const handleAddWorkBookCard = () => {
    const currentWorkBookCards = getValues("workBookCards") || [];
    const newWorkBookCard = {
      videoUrl: "mock_add_url",
      memo: "mock_add_memo",
    };

    setValue("workBookCards", [...currentWorkBookCards, newWorkBookCard]);
  };

  return (
    <section>
      <div>
        <span>유튜브 url 입력</span>
        <input
          type="text"
          {...register("videoUrl", { required: "URL은 필수입니다." })}
        />
        <Button>강의 등록</Button>
        <Button onClick={handleAddWorkBookCard}>mock_card_add</Button>
      </div>

      <div>비디오 플레이어</div>
    </section>
  );
};

export default Video;
