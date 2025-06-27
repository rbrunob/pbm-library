export interface IBenefitsItem {
    id: number;
    ean: string;
    authorizedQuantity: number;
    discountValue: number;
    discountPercentual: number;
}

export const BENEFITS_ITEMS: IBenefitsItem[] = [
    {
        id: 1,
        ean: "001",
        authorizedQuantity: 1,
        discountValue: 4800,
        discountPercentual: 2400
    },
    {
        id: 2,
        ean: "002",
        authorizedQuantity: 2,
        discountValue: 4800,
        discountPercentual: 2400
    },
    {
        id: 3,
        ean: "003",
        authorizedQuantity: 3,
        discountValue: 9400,
        discountPercentual: 4700
    }

]