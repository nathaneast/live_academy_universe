import Video from "./(Forms)/Video";

interface WorkbookPageProps {
  searchParams: {
    type: "create" | "read";
    id: string;
  };
}

const WorkbookPage = ({ searchParams }: WorkbookPageProps) => {
  const isCreate = searchParams.type === "create";
  const id = searchParams.id;

  // fetch

  /**
   * TODO:
   * read 모드: fetch -> 하위 컴포넌트에 기본 값 전달
   * create: 하위 컴포넌트 그냥 렌더링
   */

  return (
    <div>
      WorkbookPage ID: {isCreate} {id}
      <Video />
      <div>받아쓰기</div>
      <div>워크북 카드</div>
      <div>gpt 작문연습</div>
    </div>
  );
};

export default WorkbookPage;
