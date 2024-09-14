"use client";

import { useState } from "react";
// import { useWorkBookStore } from "../_store/workBookstore";

const Video = () => {
  const [url, setUrl] = useState("");
  // const addWorkBookItem = useWorkBookStore((state) => state.addWorkBookItem);

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
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button>강의 등록</button>
      </div>
      <div>비디오 플레이어</div>
    </div>
  );
};

export default Video;
