"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Video = () => {
  const { control, register, getValues } = useFormContext();
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
    } else {
      alert("유효한 비디오 URL이 아닙니다.");
    }
  };

  return (
    <section className="flex flex-col gap-4">
      {/* <div>
        <Button onClick={handleAddWorkBookCard}>mock_card_add</Button>
      </div> */}

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
    </section>
  );
};

export default Video;
