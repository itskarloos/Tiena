"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import CustomFormField from "../CustomFormField";


export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  CHECKBOX = 'checkbox',
  PHONE_INPUT = 'phoneinput',
  RADIO = 'radio',
  SELECT = 'select',
  DATE_PICKER = 'datepicker',
  SKELETON = "skeleton",
}
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const PatientForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  // ...

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 😊</h1>
          <p className="text-dark-700">Schedule your first appointment.</p>
        </section>
       <CustomFormField 
       fieldType = {FormFieldType.INPUT}
       control={form.control}
       name="name"
       label="Full name"
       placeholder="Michael seyoum"
       iconSrc="/assets/icons/user.svg"
       iconAlt="user"
       />
       <CustomFormField 
       fieldType = {FormFieldType.INPUT}
       control={form.control}
       name="email"
       label="Email"
       placeholder="michaelseyoum@gmail.com"
       iconSrc="/assets/icons/email.svg"
       iconAlt="email"
       />
       <CustomFormField 
       fieldType = {FormFieldType.PHONE_INPUT}
       control={form.control}
       name="phone"
       label="Phone number"
       placeholder="+251 912345678"
       
       />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PatientForm;
