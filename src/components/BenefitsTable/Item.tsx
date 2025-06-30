import { IBenefitsItem } from "../../mocks/benefits";

import { usePBMStore } from "../../libs/zustand/usePBM";

import { Badge, BadgeCheck } from "lucide-react";
import { useCallback, useEffect } from "react";

interface ItemProps {
  data: IBenefitsItem;
  onChange: VoidFunction;
  checked: boolean;
  originalProductPrice: number;
}

function Item({ data, onChange, checked, originalProductPrice }: ItemProps) {
  const { setAvailableDiscountSelected } = usePBMStore();

  const ID_INPUT = "unity_quantity_" + data.authorizedQuantity;

  const decimalDiscount = data.discountPercentual / 10000;

  const unitDiscountValue = originalProductPrice * decimalDiscount;

  const discountValue = unitDiscountValue * data.authorizedQuantity;

  const totalPriceProductWithDiscountBenefit =
    originalProductPrice * data.authorizedQuantity - discountValue;

  const updateStorageData = useCallback(() => {
    if (checked) {
      setAvailableDiscountSelected({
        discount: {
          total: discountValue,
          unit: unitDiscountValue,
        },
        quantity: data.authorizedQuantity,
        totalPrice: totalPriceProductWithDiscountBenefit,
      });
    }
  }, [
    checked,
    data.authorizedQuantity,
    setAvailableDiscountSelected,
    discountValue,
    totalPriceProductWithDiscountBenefit,
    unitDiscountValue,
  ]);

  useEffect(() => {
    updateStorageData();
  }, [updateStorageData]);

  return (
    <label
      htmlFor={ID_INPUT}
      className="w-full flex items-center justify-start bg-zinc-300/60 border border-zinc-400/50 px-4 py-2 hover:bg-zinc-300 transition-colors cursor-pointer rounded-full gap-1"
    >
      <input
        type="radio"
        name="benefits_discount"
        id={ID_INPUT}
        className="hidden"
        checked={checked}
        onChange={onChange}
      />

      {!checked ? (
        <Badge color="#9f9fa9" size={20} />
      ) : (
        <BadgeCheck color="#00d492" size={20} />
      )}

      <span className="text-zinc-900 font-semibold text-sm">
        {data.authorizedQuantity}un
      </span>

      <section className="ml-auto relative">
        <span className="absolute -top-4 text-emerald-900 py-0.5 font-semibold text-xs bg-emerald-400 px-2 w-auto text-nowrap rounded-2xl -right-4">
          {discountValue.toLocaleString("pt-BR", {
            currency: "BRL",
            currencyDisplay: "symbol",
            currencySign: "standard",
            style: "currency",
          })}{" "}
          OFF
        </span>
        <strong className="text-zinc-900 font-semibold text-sm text-center">
          {totalPriceProductWithDiscountBenefit.toLocaleString("pt-BR", {
            currency: "BRL",
            currencyDisplay: "symbol",
            currencySign: "standard",
            style: "currency",
          })}
        </strong>
      </section>
    </label>
  );
}

export default Item;
