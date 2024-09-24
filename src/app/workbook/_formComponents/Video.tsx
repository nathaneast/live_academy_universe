"use client";

import { useFormContext } from "react-hook-form";

const Video = () => {
  const { register } = useFormContext();

  // const handleAddLecture = () => {
  //   if (url) {
  //     // 실제로는 여기서 유튜브 API를 사용하여 썸네일을 가져와야 합니다.
  //     addWorkBookItem("mock_image_url");
  //   }
  // };

  return (
    <div>
      <div>
        <span>유튜브 url 입력</span>
        <input
          type="text"
          {...register("videoUrl", { required: "URL은 필수입니다." })}
        />
        <button>강의 등록</button>
      </div>
      <div>비디오 플레이어</div>
    </div>
  );
};

export default Video;
