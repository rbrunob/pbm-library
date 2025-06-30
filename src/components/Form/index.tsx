import {
  validationSchema,
  validationSchemaType,
} from "../../schema/validation-schema";
import { toFormat } from "../../utils/format";

import classNames from "classnames";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { ArrowRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { ISecurityNumber } from "../../types/globals";

import { usePBMStore } from "../../libs/zustand/usePBM";

interface IForm {
  setData: Dispatch<SetStateAction<ISecurityNumber>>;
}

function Form({ setData }: IForm) {
  const { setSecurityNumber, setState, securityNumber } = usePBMStore();

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<validationSchemaType>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      securityNumber: securityNumber || "",
    },
  });

  const onSubmitDefault = (values: validationSchemaType) => {
    setData((prev) => ({ ...prev, isLoading: true }));

    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          securityNumber: values.securityNumber,
          state: "isActivated",
        });
      }, 2000);
    })
      .then((result) => {
        const response = result as ISecurityNumber;

        setData((prev) => ({
          ...prev,
          securityNumber: response.securityNumber,
          state: response.state,
        }));

        setSecurityNumber(response.securityNumber);
        setState(response.state);
      })
      .finally(() => {
        setData((prev) => ({ ...prev, isLoading: false }));
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitDefault)}
      className="w-full h-auto flex items-center justify-center"
    >
      <label
        htmlFor="cpf"
        className="w-4/5 h-auto flex items-start flex-col justify-center relative py-2"
      >
        <input
          type="text"
          className={classNames(
            "w-full h-8 bg-blue-100 rounded-s-full text-sm font-semibold focus:outline focus:outline-blue-200 text-zinc-600 placeholder:text-zinc-600 px-4 placeholder:text-sm placeholder:font-semibold",
            { "outline outline-red-600": errors.securityNumber }
          )}
          placeholder="Digite seu CPF aqui..."
          required
          maxLength={14}
          {...register("securityNumber", {
            onChange: (e) => {
              const formatted = toFormat(e.target.value);
              setValue("securityNumber", formatted as string, {
                shouldValidate: true,
              });
            },
          })}
        />
        {errors.securityNumber && (
          <span className="text-red-400 text-xs font-semibold  absolute -bottom-3 left-2 text-nowrap">
            {errors.securityNumber.message}
          </span>
        )}
      </label>
      <button
        type="submit"
        className="bg-gray-400 w-1/5 h-8 flex items-center justify-center rounded-e-full cursor-pointer"
      >
        <ArrowRight size={24} color="white" strokeWidth={2} />
      </button>
    </form>
  );
}

export default Form;
