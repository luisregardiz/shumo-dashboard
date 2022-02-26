import { FC } from "react";
import { FaBuffer } from "react-icons/fa";
import { HiCollection, HiCurrencyDollar } from "react-icons/hi";
import NFTStats from "../../../components/dashboard/portfolio/nfts/stats";
import NFTTable from "../../../components/dashboard/portfolio/nfts/table";
import Spinner from "../../../components/spinner/spinner";
import { getNFTCollections } from "../../../services/api/nfts";

interface PortfolioNFTProps {}

const PortfolioNFT: FC<PortfolioNFTProps> = () => {
    const nftsCollections = getNFTCollections().data;
    const errorNftsCollections = getNFTCollections().error;
    const formatterDollar = new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
        style: "currency",
        currency: "USD",
    });
    const totalNFT = nftsCollections?.reduce((total, currentValue) => {
        return total + currentValue.balance;
    }, 0);

    const totalBUSD = nftsCollections?.reduce((total, currentValue) => {
        return total + Number(currentValue.floor_value_busd);
    }, 0);

    const collections = {
        value: nftsCollections?.length!,
        icon: <HiCollection className="text-2xl text-gray-50 mr-2" />,
        title: "Collections",
    };
    const NFTs = {
        value: totalNFT!,
        icon: <FaBuffer className="text-2xl text-gray-50 mr-2" />,
        title: "NFT",
    };
    const NFTValue = {
        value: formatterDollar.format(totalBUSD!)!,
        icon: <HiCurrencyDollar className="text-2xl text-gray-50 mr-2" />,
        title: "NFT Value",
    };
    if (!nftsCollections) return <Spinner />;
    if (errorNftsCollections) return <div>{errorNftsCollections}</div>;
    return (
        <section>
            <NFTStats
                collectionsStats={collections}
                nftStats={NFTs}
                nftValueStats={NFTValue}
            />
            <NFTTable nftsCollections={nftsCollections} />
        </section>
    );
};

export default PortfolioNFT;
