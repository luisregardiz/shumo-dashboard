interface TokenStats {
    priceUSD: StatsInformation;
    marketcap: StatsInformation;
    holders: StatsInformation;
    liquidity: StatsInformation;
    volume24: StatsInformation;
    funds: StatsInformation;
    marketing: StatsInformation;
}

interface StatsInformation {
    now: number | string;
    yesterday: number | string;
}

interface SocialMedia {
    followers: number;
}
interface TokenChart {
    date: string;
    price: number;
}

interface TokenValueChart {
    date: string;
    value: number;
}

interface WalletToken {
    name: string;
    symbol: string;
    logo: string;
    thumbnail: string;
    tokens: string;
    value: {
        now: string;
        yesterday: string;
    };
}

interface NFTCollection {
    name: string;
    balance: number;
    floor_value_eth: number;
    floor_value_busd: string;
    image_url: string;
}
