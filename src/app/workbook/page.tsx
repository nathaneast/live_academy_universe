import FormProviderWrapper from "./_store/FormProviderWrapper";
import Video from "./_formComponents/Video";
import DictationForm from "./_formComponents/DictationForm";

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

  // onSubmit 함수 생성

  return (
    <FormProviderWrapper initialValues={{}}>
      <div>
        <Video />
        <DictationForm />
        <div>워크북 카드</div>
        <div>gpt 작문연습</div>
      </div>
    </FormProviderWrapper>
  );
};

export default WorkbookPage;
