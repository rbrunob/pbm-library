import Cookies from "js-cookie";
import { IRequestDefault } from "../types/requests";
import { IProduct } from "../types/globals";

interface IPagination {
    page: number,
    limit: number,
    total: number,
    totalPages: number,
    hasNextPage: boolean,
    hasPrevPage: boolean
}

interface IMessageData {
    products: IProduct[],
    pagination: IPagination
}

interface IDataRequestListProducts {
    message: IMessageData,
    data: string,
    statusCode: number
}

interface IResponseGetProducts extends IRequestDefault {
    data: IDataRequestListProducts
}

export const GetProductByEAN = async ({ PRODUCT_EAN }: { PRODUCT_EAN: string }): Promise<IResponseGetProducts> => {
    const API_URL = import.meta.env.VITE_API_URL;

    const AUTH_TOKEN = Cookies.get("pbm-token");

    if (!AUTH_TOKEN) {
        throw new Error('Token is not defined in cookies or is expired');
    }

    const response = await fetch(`${API_URL}/core/products?ean=${PRODUCT_EAN}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
            'Content-Type': 'application/json',
        },
    });

    const dataResponse: IResponseGetProducts = await response.json();

    if (!dataResponse.success) {
        throw new Error(dataResponse.message || 'Failed to fetch authorization');
    }

    return dataResponse;
}