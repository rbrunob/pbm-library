import { useState } from "react";

import { BENEFITS_ITEMS } from "../../mocks/benefits";

import Title from "../UI/Title";
import Item from "./Item";

function BenefitsTable({
  originalProductPrice,
}: {
  originalProductPrice: number;
}) {
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
    </section>
  );
}

export default BenefitsTable;
