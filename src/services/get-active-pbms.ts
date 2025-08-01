import Cookies from "js-cookie";
import { IRequestDefault } from "../types/requests";

interface IActivePBMS {
    id: string,
    name: string,
    description: string,
    priority: number,
    active: boolean
}

interface IResponseActivePBMs extends IRequestDefault {
    data: IActivePBMS[]
}

export const GetActivePBMs = async (): Promise<IResponseActivePBMs> => {
    const API_URL = import.meta.env.VITE_API_URL;

    const AUTH_TOKEN = Cookies.get("pbm-token");

    if (!AUTH_TOKEN) {
        throw new Error('Token is not defined in cookies or is expired');
    }

    const response = await fetch(`${API_URL}/pbms`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
            'Content-Type': 'application/json',
        },
    });

    const dataResponse: IResponseActivePBMs = await response.json();

    if (!dataResponse.success) {
        throw new Error(dataResponse.message || 'Failed to fetch authorization');
    }

    return dataResponse;
}