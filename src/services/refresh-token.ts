import Cookies from "js-cookie";
import { IRequestDefault } from "../types/requests";

interface IRefreshAuthData {
    expiresIn: string;
    store: { name: string },
    token: string;
    refreshToken: string;
}

interface IResponseRefreshAuth extends IRequestDefault {
    data: IRefreshAuthData;
}

export const RefreshToken = async (): Promise<IResponseRefreshAuth> => {
    const API_URL = import.meta.env.VITE_API_URL;

    const REFRESH_TOKEN = Cookies.get("pbm-token-refresh");

    if (!REFRESH_TOKEN) {
        throw new Error('Refresh Token is not defined in cookies or is expired');
    }

    if (!API_URL) {
        throw new Error('API URL is not defined in environment variables');
    }

    const AUTH_TOKEN = Cookies.get("pbm-token");

    if (!AUTH_TOKEN) {
        throw new Error('Token is not defined in cookies or is expired');
    }

    const response = await fetch(`${API_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            refreshToken: REFRESH_TOKEN
        })
    })

    const dataResponse: IResponseRefreshAuth = await response.json();

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