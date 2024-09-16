import { ReactNode } from 'react';
import { FormProvider, useForm } from "react-hook-form";

type FormProviderWrapperProps = {
  children: ReactNode;
  initialValues?: Record<string, any>;
};

const FormProviderWrapper = ({ children, initialValues = {} }: FormProviderWrapperProps) => {
  const methods = useForm({ defaultValues: initialValues });
  return (
    <FormProvider {...methods}>
      {children}  
    </FormProvider>  
  )
}

export default FormProviderWrapper;
