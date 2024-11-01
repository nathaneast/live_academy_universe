"use client";

import { ReactNode } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";

type FormProviderWrapperProps = {
  children: ReactNode;
  defaultValues?: Record<string, any>;
};

const defaultValues_mock = {
  // workBookCards: [{ imagePath: "mock_image_1", memo: "첫 번째 카드 메모" }],
};

const FormProviderWrapper = ({
  children,
  defaultValues = {},
}: FormProviderWrapperProps) => {
  const methods = useForm({ defaultValues: defaultValues_mock });
  const watchedValues = useWatch({ control: methods.control });

  console.log(watchedValues, "watchedValues");

  return (
    <FormProvider {...methods}>
      {children}
    </FormProvider>
  );
};

export default FormProviderWrapper;
