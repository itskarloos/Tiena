"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import CustomFormField from "../CustomFormField";
import Submitbutton from "../Submitbutton";

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
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 characters." }), // Example validation
});

const PatientForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const isLoading = false; // Define isLoading state if needed, e.g., useState or hardcoded for now

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 😊</h1>
          <p className="text-dark-700">Schedule your first appointment.</p>
        </section>
        <CustomFormField 
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="Michael Seyoum"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomFormField 
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="michaelseyoum@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomFormField 
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone number"
          placeholder="+251 912345678"
        />
        <Submitbutton isLoading={isLoading}>Submit</Submitbutton> {/* Fixed children prop */}
      </form>
    </Form>
  );
};

export default PatientForm;
