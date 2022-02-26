import useSWR from "swr";
import { fetcher } from "../../helpers/fetcher";
const URL = import.meta.env.VITE_REACT_APP_API_URL;
export const getTokenValue7D = () => {
    const { data, error } = useSWR<TokenValueChart[]>(
        `${URL}/wallet/tokens/value/7d`,
        fetcher
    );
    return { data, error };
};

export const getTokenValue30D = () => {
    const { data, error } = useSWR<TokenValueChart[]>(
        `${URL}/wallet/tokens/value/month`,
        fetcher
    );
    return { data, error };
};

export const getWalletTokens = () => {
    const { data, error } = useSWR<WalletToken[]>(
        `${URL}/wallet/tokens`,
        fetcher
    );
    return { data, error };
};
