import { useState } from "react";

import { BENEFITS_ITEMS } from "@/mocks/benefits";

import Title from "@/components/UI/Title";
import Item from "./Item";

function BenefitsTable({
  originalProductPrice,
}: {
  originalProductPrice: number;
}) {
  const [selectedDiscout, setSelectedDiscount] = useState<string | null>(null);

  return (
    <section className="flex items-start-safe justify-center-safe gap-4 w-full h-auto flex-col">
      <Title>Descontos disponíveis:</Title>

      <form className="flex flex-col items-center-safe justify-start w-full gap-3">
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
