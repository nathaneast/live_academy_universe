"use client";

import { ReactNode } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";

type FormProviderWrapperProps = {
  children: ReactNode;
  defaultValues?: Record<string, any>;
};

const FormProviderWrapper = ({
  children,
  defaultValues = {},
}: FormProviderWrapperProps) => {
  const methods = useForm({ defaultValues });
  const watchedValues = useWatch({ control: methods.control });

  console.log(watchedValues, "watchedValues");

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default FormProviderWrapper;
