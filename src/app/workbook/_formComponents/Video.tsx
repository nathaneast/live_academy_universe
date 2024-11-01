"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Video = () => {
  const { control, register, getValues, setValue } = useFormContext();
  const [renderVideoUrl, setRenderVideoUrl] = useState("");

  const addRenderVideoUrl = () => {
    const videoUrl = getValues("videoUrl");

    if (!videoUrl) {
      alert("비디오 URL을 입력해주세요.");
      return;
    }

    const urlParams = new URLSearchParams(videoUrl.split("?")[1]);
    const videoId = urlParams.get("v");

    if (videoId) {
      setRenderVideoUrl(videoId);
      // TODO: 전역 비디오 url 상태에도 저장하기
    } else {
      // FIXME: 모달 or 포탈로 변경하기
      alert("유효한 비디오 URL이 아닙니다.");
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    const items: DataTransferItemList = event.clipboardData.items;
    for (let item of items) {
      if (item.type.indexOf("image") !== -1) {
        const file = item.getAsFile();
        const reader = new FileReader();
        reader.onload = (e) => {
          const currentWorkBookCards = getValues("workBookCards") || [];
          setValue("workBookCards", [
            ...currentWorkBookCards,
            { imagePath: e.target.result as string },
          ]);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  return (
    <section className="flex flex-col gap-4">
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
                    {...register("videoUrl", {
                      required: "URL은 필수입니다.",
                    })}
                  />
                  <Button onClick={addRenderVideoUrl}>강의 등록</Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div
        className={`transition-opacity duration-300 ${
          renderVideoUrl ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        <iframe
          id="videoPlayer"
          width="100%"
          height="600"
          src={
            renderVideoUrl
              ? `https://www.youtube.com/embed/${renderVideoUrl}`
              : ""
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div
        onPaste={handlePaste}
        className="border-2 border-dashed border-gray-300 p-5 text-center"
      >
        <p>이미지를 캡처 후 여기를 클릭 후 Ctrl+V로 붙여넣기 해보세요.</p>
        <p>학습 카드가 생성 됩니다.</p>
      </div>
    </section>
  );
};

export default Video;
