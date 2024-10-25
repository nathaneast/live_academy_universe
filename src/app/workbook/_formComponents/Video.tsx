"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
  const { control, register, getValues } = useFormContext();
  const [renderVideoUrl, setRenderVideoUrl] = useState("");
  const [capturedImageUrl, setCapturedImageUrl] = useState<string | null>(null);

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
      // FIXME: 모달 or 포탈로 변경하기
      alert("유효한 비디오 URL이 아닙니다.");
    }
  };

  const captureImage = async () => {
    try {
      const response = await fetch("/api/youtube");

      // 응답 상태 확인
      if (!response.ok) {
        throw new Error(`HTTP 오류! 상태: ${response.status}`);
      }

      const data = await response.json();
      console.log(response, data, "response, data"); // API 응답 메시지 출력
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
    }
  };

  // console.log(capturedImageUrl, "capturedImageUrl");

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
                    {...register("videoUrl", { required: "URL은 필수입니다." })}
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

        <div className="flex justify-center">
          <Button className="mt-1" onClick={captureImage}>
            이미지 생성
          </Button>
        </div>

        {capturedImageUrl && (
          <div className="flex justify-center mt-4">
            <Image
              src={capturedImageUrl}
              alt="Captured"
              className="max-w-full h-auto"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Video;
