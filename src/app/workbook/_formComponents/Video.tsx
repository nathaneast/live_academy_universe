"use client";

import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"; // 필요한 모듈 추가
import { Input } from "@/components/ui/input";

const Video = () => {
  const { control, register, setValue, getValues } = useFormContext();

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
        <Button onClick={handleAddWorkBookCard}>mock_card_add</Button>
      </div>

      <div>
        <FormField
          control={control}
          name="videoUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>유튜브 URL</FormLabel>
              <FormControl>
                <div className="flex">
                  <Input
                    placeholder="유튜브 url을 입력 해주세요"
                    {...field}
                    {...register("videoUrl", { required: "URL은 필수입니다." })} // 유효성 검사 추가
                  />
                  <Button>강의 등록</Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div>비디오 플레이어</div>
    </section>
  );
};

export default Video;
