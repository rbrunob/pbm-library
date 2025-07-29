import Cookies from "js-cookie";

interface GetAuthorizationParams {
    clientID: string;
}

interface IResponseAuth {
    data: {
        expiresIn: string;
        store: {
            CNPJ: string;
            name: string;
        },
        token: string;
    },
    success: boolean;
    message: string;
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
            storeId: STORE_ID,
            storeName: STORE_NAME,
            clientId: clientID
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

    return dataResponse;
}