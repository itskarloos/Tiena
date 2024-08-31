import React from 'react';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues } from 'react-hook-form';
import { FormFieldType } from './forms/PatientForm';
import Image from "next/image"
interface CustomFormFieldProps {
  control: Control<any>,
  fieldType: FormFieldType,
  name: string,
  label?: string,
  placeholder?: string,
  iconSrc?: string,
  iconAlt?: string,
  disabled?:boolean,
  dateFormat?:string,
  showTimeSelect?:boolean,
  children?: React.ReactNode,
  renderSkeleton?: (field:any) => React.ReactNode
}
const RenderField = ({field,props} : {field:any,props:CustomFormFieldProps}) => {
  const { control,fieldType,placeholder,name,label,iconSrc,iconAlt }= props
  switch(fieldType){
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image 
            src={iconSrc}
            height={24}
            width={24}
            alt={iconAlt || "Icon"}
            className="ml-2"
            />
          )}
          <FormControl>
            <Input
            placeholder={placeholder}
            {...field}
            className="shad-input border-0"
            />
            </FormControl>
        </div>
      )
  }
}


const CustomFormField: React.FC<CustomFormFieldProps> = (props) => {
  const { control,fieldType,name,label } = props;
  return (
    <FormField
      control={control}
      name="username"
      render={({ field }) => (
        <FormItem className='flex-1'>
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>)}

            <RenderField field = {field} props={props} />
            <FormMessage className="shad-error" />
          
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
