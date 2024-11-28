import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import FormProviderWrapper from "./_store/FormProviderWrapper";
import Video from "./_formComponents/Video";
import SelfDictationBoard from "./_formComponents/SelfDictationBoard";
import WorkBookCardList from "./_formComponents/(WorkBookCardList)";
import Composition from "./_formComponents/Composition";

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
      <div className="flex flex-col gap-2">
        <Video />

        <Tabs defaultValue="dictation">
          <TabsList>
            <TabsTrigger value="dictation">dictation</TabsTrigger>
            <TabsTrigger value="workBookCardList">workBookCardList</TabsTrigger>
            <TabsTrigger value="composition">Composition</TabsTrigger>
          </TabsList>

          <TabsContent value="dictation">
            <SelfDictationBoard />
          </TabsContent>

          <TabsContent value="workBookCardList">
            <WorkBookCardList />
          </TabsContent>

          <TabsContent value="composition">
            <Composition />
          </TabsContent>
        </Tabs>
      </div>
    </FormProviderWrapper>
  );
};

export default WorkbookPage;
