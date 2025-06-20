import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { validationSchema } from "./schema/validation-schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toFormat } from "./utils/format";
import classNames from "classnames";

function PBM() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof validationSchema>>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      cpf: "",
    },
  });

  const onSubmit = (values: z.infer<typeof validationSchema>) => {
    // aqui vou fazer a requisição para a api e validadar o cpf se está cadastrado e se já aceitou os termos
    console.log(values);
  };

  return (
    <main className="flex flex-col items-center-safe justify-center-safe max-w-[var(--width-container)] w-full h-auto rounded-2xl p-4 bg-gray-100 gap-4">
      <header className="flex items-center-safe justify-between w-full p-0.5 rounded-full bg-blue-200">
        <span className="py-1 px-6 rounded-full bg-blue-500 shrink-0 text-white text-sm font-bold">
          R$ 250,50
        </span>
        <h1 className="text-center w-full text-blue-500 font-bold text-sm px-4">
          Benefício de Laboratório
        </h1>
      </header>

      <form
        onSubmit={handleSubmit(onSubmit)}
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
            {...register("cpf")}
            onChange={(e) => {
              const { value } = e.target;
              e.target.value = toFormat(value) || value;
            }}
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
    </main>
  );
}

export default PBM;
