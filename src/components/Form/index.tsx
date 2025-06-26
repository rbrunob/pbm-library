import {
  validationSchema,
  validationSchemaType,
} from "@/schema/validation-schema";
import { toFormat } from "@/utils/format";

import classNames from "classnames";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { ArrowRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { ISecurityNumber } from "@/types/globals";

interface IForm {
  onSubmit?: VoidFunction;
  setData: Dispatch<SetStateAction<ISecurityNumber>>;
}

function Form({ onSubmit, setData }: IForm) {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<validationSchemaType>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      cpf: "",
    },
  });

  const onSubmitDefault = (values: validationSchemaType) => {
    setData((prev) => ({ ...prev, isLoading: true }));

    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ cpf: values.cpf, isValid: false });
      }, 2000);
    })
      .then((result) => {
        const response = result as ISecurityNumber;
        setData((prev) => ({
          ...prev,
          securityNumber: response.securityNumber,
          state: "isRegistered",
        }));
      })
      .finally(() => {
        setData((prev) => ({ ...prev, isLoading: false }));
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit || onSubmitDefault)}
      className="w-full h-auto flex items-center-safe justify-center-safe"
    >
      <label
        htmlFor="cpf"
        className="w-4/5 h-auto flex items-start flex-col justify-center-safe relative py-2"
      >
        <input
          type="text"
          className={classNames(
            "w-full h-8 bg-blue-100 rounded-s-full text-sm font-semibold focus:outline focus:outline-blue-200 text-zinc-600 placeholder:text-zinc-600 px-4 placeholder:text-sm placeholder:font-semibold",
            { "outline outline-red-600": errors.cpf }
          )}
          placeholder="Digite seu CPF aqui..."
          required
          maxLength={14}
          {...register("cpf", {
            onChange: (e) => {
              const formatted = toFormat(e.target.value);
              setValue("cpf", formatted as string, { shouldValidate: true });
            },
          })}
        />
        {errors.cpf && (
          <span className="text-red-400 text-xs font-semibold  absolute -bottom-3 left-2 text-nowrap">
            {errors.cpf.message}
          </span>
        )}
      </label>
      <button
        type="submit"
        className="bg-gray-400 w-1/5 h-8 flex items-center-safe justify-center-safe rounded-e-full cursor-pointer"
      >
        <ArrowRight size={24} color="white" strokeWidth={2} />
      </button>
    </form>
  );
}

export default Form;
