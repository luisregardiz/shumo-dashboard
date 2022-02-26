import { FC } from "react";
import NFTCard from "./card";

interface NFTStats {
    value: string | number;
    icon: React.ReactElement;
    title: string;
}

interface NFTStatsProps {
    collectionsStats: NFTStats;
    nftStats: NFTStats;
    nftValueStats: NFTStats;
}

const NFTStats: FC<NFTStatsProps> = ({
    collectionsStats,
    nftStats,
    nftValueStats,
}) => {
    return (
        <div className="list-cards mb-10">
            <NFTCard
                value={collectionsStats.value!}
                icon={collectionsStats.icon}
                title={collectionsStats.title}
            />
            <NFTCard
                value={nftStats.value!}
                icon={nftStats.icon}
                title={nftStats.title}
            />
            <NFTCard
                value={nftValueStats.value!}
                icon={nftValueStats.icon}
                title={nftValueStats.title}
            />
        </div>
    );
};

export default NFTStats;
