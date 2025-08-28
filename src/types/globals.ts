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
    };
    campaign: "pbm_campaign";
    targetProduct: ITargetProductPBM | null;
}

interface IEpharma {
    name: string;
    presentationId: string;
    presentation: string;
    maximumPrice: number;
    salePrice: number;
    discountPercent: number;
    comboAvailable: boolean;
    progressiveDiscount: boolean;
    replacementIndustryPrice: number;
    replacementPurchasePrice: number;
    replacementIndustryDiscount: number;
    commercialGradeId: number;
    commercialGrade: string;
    calculationRuleTypeId: number;
    calculationRuleType: string;
}

interface IFuncional {
    name: string;
    presentationId: string;
    presentation: string;
    maximumPrice: number | null;
    salePrice: number | null;
    discountPercent: number | null;
    comboAvailable: boolean;
    progressiveDiscount: boolean;
}

export interface IProduct {
    productId: string;
    ean: string;
    upc: string;
    sku: string;
    name: string;
    stock: number;
    listPrice: number;
    salesPrice: number;
    availabilityText: string;
    discountMin: number;
    requestHolderId: string;
    requestCoupon: string;
    discountMaxNewPatient: number;
    suggestedPriceValue: number;
    discountMax: number;
    industryName: string;
    informativeMessage: string;
    authorizer: string;
    discountMinNewPatient: number;
    qtyForDiscountMax: number;
    discountFirstBox: number;
    programName: string;
    discountAbsolute: number | null;
    pointing: string;
    epharma: IEpharma;
    funcional: IFuncional;
    platformId: string;
    dataSource: string;
    lastUpdated: string;
}

export interface ITargetProductPBM {
    productId: string;
    ean: string;
    sku: string;
    name: string;
    stock: number;
    listPrice: number;
    salesPrice: number;
    availabilityText: string;
    discountMin: number;
    discountMaxNewPatient: number;
    discountMax: number;
    industryName: string;
    informativeMessage: string;
    authorizer: string;
    discountMinNewPatient: number;
    qtyForDiscountMax: number;
    programName: string;
    dataSource: string;
    epharma: IEpharma;
}