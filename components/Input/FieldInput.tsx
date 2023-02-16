import { Field, FieldHookConfig, useField } from "formik"
import { FieldInputProps } from "interfaces"
import { ClassAttributes, InputHTMLAttributes } from "react"

export const FieldInput = ({
  label,
  ...props
}: FieldInputProps &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>) => {
  const [field, meta] = useField(props)

  return (
    <>
      <div className="flex w-full rounded-md">
        <label> {label} </label>
        <Field className="w-full px-3 py-1" {...props} {...field} />
      </div>
      {meta.touched && meta.error ? (
        <p className="text-xs text-red-500">{meta.error}</p>
      ) : null}
    </>
  )
}
