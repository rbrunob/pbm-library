export interface ISecurityNumber {
    state: "isRegistered" | "isActivated" | "isInvalid" | "isEmpty";
    securityNumber: string;
    isLoading: boolean;
}

export const initialValuesSecutiryNumber: ISecurityNumber = {
    isLoading: false,
    securityNumber: "",
    state: "isEmpty",
}

export interface ILinkHref {
    pathname: string;
    param?: { [key: string]: string | number };
}

interface discountTypes {
    unit: number;
    total: number;
}

export interface usePBMTypes {
    securityNumber: string;
    state: "isRegistered" | "isActivated" | "isInvalid" | "isEmpty";
    availableDiscountSelected: {
        quantity: number;
        discount: discountTypes;
        totalPrice: number;
    }
}