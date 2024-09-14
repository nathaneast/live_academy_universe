"use client";

const DictationForm = () => {
  /**
   * TODO: 사용안함 기능 추가 고려
   */
  return (
    <div>
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="받아쓰기 내용을 입력하세요"
        rows={4}
      />
    </div>
  );
};

export default DictationForm;
