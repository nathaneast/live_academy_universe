import FormProviderWrapper from "./_store/FormProviderWrapper";
import Video from "./_formComponents/Video";
import DictationForm from "./_formComponents/DictationForm";
import WorkBookCardList from "./_formComponents/WorkBookCardList";

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
   * create: 하위 컴포넌트 그냥 렌더
   */

  // TODO: onSubmit 함수 생성
  // 최상위 폼태그 랩핑

  return (
    <FormProviderWrapper defaultValues={{}}>
      <div>
        <Video />
        <DictationForm />
        <WorkBookCardList />
        <div>gpt 작문연습</div>
      </div>
    </FormProviderWrapper>
  );
};

export default WorkbookPage;
