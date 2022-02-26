import useSWR from "swr";
import { fetcher } from "../../helpers/fetcher";
const URL = import.meta.env.VITE_REACT_APP_API_URL;
export const getNFTCollections = () => {
    const { data, error } = useSWR<NFTCollection[]>(
        `${URL}/wallet/nft/collections`,
        fetcher
    );
    return { data, error };
};
