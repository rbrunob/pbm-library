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