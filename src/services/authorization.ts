import Cookies from "js-cookie";
import { IRequestDefault } from "../types/requests";

interface GetAuthorizationParams {
    clientID: string;
}

interface IAuthData {
    expiresIn: string;
    store: {
        CNPJ: string;
        name: string;
    },
    token: string;
    refreshToken: string;
}

interface IResponseAuth extends IRequestDefault {
    data: IAuthData;
}

export const GetAuthorization = async ({ clientID }: GetAuthorizationParams): Promise<IResponseAuth> => {
    const API_URL = import.meta.env.VITE_API_URL;
    const STORE_ID = import.meta.env.VITE_STORE_ID;
    const STORE_NAME = import.meta.env.VITE_STORE_NAME;

    if (!API_URL) {
        throw new Error('API URL is not defined in environment variables');
    }

    if (!STORE_ID || !STORE_NAME) {
        throw new Error('Store ID or Store Name is not defined in environment variables');
    }

    const response = await fetch(`${API_URL}/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            StoreID: STORE_ID,
            StoreName: STORE_NAME,
            ClientID: clientID
        })
    });

    const dataResponse: IResponseAuth = await response.json();

    if (!dataResponse.success) {
        throw new Error(dataResponse.message || 'Failed to fetch authorization');
    }

    Cookies.set('pbm-token', dataResponse.data.token, {
        expires: parseInt(dataResponse.data.expiresIn, 10) / (60 * 60),
        secure: true,
        sameSite: 'Strict'
    });

    Cookies.set('pbm-token-refresh', dataResponse.data.refreshToken, {
        secure: true,
        sameSite: 'Strict'
    });

    return dataResponse;
}