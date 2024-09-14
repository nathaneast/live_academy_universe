import DictationForm from "./_forms/DictationForm";
import Video from "./_forms/Video";

interface WorkbookPageProps {
  searchParams: {
    type: "create" | "update";
    id: string;
  };
}

const WorkbookPage = ({ searchParams }: WorkbookPageProps) => {
  const isCreate = searchParams.type === "create";
  const id = searchParams.id;

  /**
   * TODO:
   * update 모드: fetch -> 하위 컴포넌트에 기본 값 전달
   * create: 하위 컴포넌트 그냥 렌더링
   */

  return (
    <div>
      WorkbookPage ID: {isCreate} {id}
      <Video />
      <DictationForm />
      <div>워크북 카드</div>
      <div>gpt 작문연습</div>
    </div>
  );
};

export default WorkbookPage;
