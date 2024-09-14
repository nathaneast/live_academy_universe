"use client";
import Image from "next/image";
import { useWorkBookStore } from "../_store/workBookstore";

const WorkBookList = () => {
  const { workBookList, updateWorkBookText } = useWorkBookStore();

  return (
    <div>
      {workBookList.map((item, index) => (
        <div key={index}>
          <Image
            src={item.img}
            alt={`mock_image_${index}`}
            width={500}
            height={300}
          />
          <textarea
            value={item.text}
            onChange={(e) => updateWorkBookText(index, e.target.value)}
            placeholder="강의 내용을 입력하세요"
          />
        </div>
      ))}
    </div>
  );
};

export default WorkBookList;
