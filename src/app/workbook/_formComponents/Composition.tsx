"use client";

import { useFormContext } from "react-hook-form";

import useTextArea from "@/components/hooks/useTextArea";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";

const Composition = () => {
  const { control, getValues } = useFormContext();
  const { textareaRef, handleInputAutoHeight } = useTextArea();

  const copyToClipboard = () => {
    if (textareaRef.current) {
      navigator.clipboard.writeText(getValues("composition"));
    }
  };

  return (
    <section>
      <FormField
        control={control}
        name="composition"
        render={({ field }) => (
          <FormItem>
            <FormLabel>작문 연습</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="학습한것으로 작문을 해보세요"
                className="resize-none"
                rows={5}
                ref={textareaRef}
                onInput={handleInputAutoHeight}
              />
            </FormControl>
            <FormDescription></FormDescription>
          </FormItem>
        )}
      />

      <div className="flex flex-row gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button>Open tip</Button>
          </PopoverTrigger>
          <PopoverContent className="w-100 mt-3 ml-12 bg-gray-200 p-4 rounded-lg">
            만약 배운 문장이 going to 라면 아래와 같이 작문해보세요! <br />
            <br />
            나는 숙제할 예정이야 <br />
            I'm going to do my homework. <br />
            <br />
            우리는 오늘밤 새로운 레스토랑에 갈 예정이야. <br />
            We're going to try a new restaurant tonight. <br />
            <br />
            그리고 작문한것을 복사하여 chat gpt에서 검토를 받으면 됩니다!
          </PopoverContent>
        </Popover>

        <Button onClick={copyToClipboard}>작성한 문장 복사</Button>
      </div>
    </section>
  );
};

export default Composition;
