import { useState } from "react";

import { BENEFITS_ITEMS } from "../../mocks/benefits";

import Title from "../UI/Title";
import Item from "./Item";
import { usePBMStore } from "../../libs/zustand/usePBM";
import Button from "../UI/Button";

function BenefitsTable({
  originalProductPrice,
}: {
  originalProductPrice: number;
}) {
  const { securityNumber, setState } = usePBMStore();
  const [selectedDiscout, setSelectedDiscount] = useState<string | null>(null);

  return (
    <section
      className="flex items-start justify-center gap-4 w-full h-auto flex-col"
      id="benefits_table_pbm"
    >
      <Title>Descontos disponíveis:</Title>

      <form
        className="flex flex-col items-center justify-start w-full gap-3"
        id="form_benefits_table_pbm"
      >
        {BENEFITS_ITEMS.map((item, index) => {
          const ID_INPUT = "unity_quantity_" + item.authorizedQuantity;

          return (
            <Item
              key={index}
              data={item}
              checked={selectedDiscout === ID_INPUT}
              onChange={() => setSelectedDiscount(ID_INPUT)}
              originalProductPrice={originalProductPrice}
            />
          );
        })}
      </form>

      {!securityNumber && (
        <Button
          onClick={() => setState("isEmpty")}
          className="bg-transparent p-0 pl-2 w-auto h-auto text-zinc-600 cursor-pointer hover:text-zinc-900 hover:bg-transparent text-start"
        >
          Atenção: não é possível utilizar os benefícos sem realizar a consulta
          do cpf, por favor{" "}
          <span className="underline">
            insira seu cpf para utilizar os benefícios
          </span>
        </Button>
      )}

      {securityNumber && (
        <Button
          onClick={() => setState("isEmpty")}
          className="bg-transparent p-0 pl-2 w-auto h-auto text-zinc-600 cursor-pointer hover:text-zinc-900 hover:bg-transparent text-start"
        >
          <span className="underline">Deseja editar o cpf digitado?</span>
        </Button>
      )}
    </section>
  );
}

export default BenefitsTable;
