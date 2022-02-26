import { FC } from "react";
import { FaCoins, FaWallet } from "react-icons/fa";
import {
    HiCurrencyDollar,
    HiDatabase,
    HiPresentationChartLine,
    HiUserAdd,
    HiUsers,
} from "react-icons/hi";
import Card from "../card";
import Line from "../../../images/line.svg";

interface StatsListProps {
    tokenStats: TokenStats;
    socialMediaStats: SocialMedia;
}

const StatsList: FC<StatsListProps> = ({ tokenStats, socialMediaStats }) => {
    const formatter = new Intl.NumberFormat();
    return (
        <div className="list-cards">
            <Card
                title="Price"
                statsInfo={tokenStats.priceUSD}
                icon={
                    <HiCurrencyDollar className="text-2xl text-shumo-red mr-1" />
                }
                dollar={true}
                decimal={6}
            />
            <Card
                title="MC"
                statsInfo={tokenStats.marketcap}
                icon={
                    <HiCurrencyDollar className="text-2xl text-shumo-red mr-1" />
                }
                dollar={true}
                formatted={true}
            />
            <Card
                title="Holders"
                statsInfo={tokenStats.holders}
                icon={<HiUsers className="text-2xl text-shumo-red mr-1" />}
                formatted={true}
            />
            <Card
                title="Liquidity"
                statsInfo={tokenStats.liquidity}
                icon={<FaCoins className="text-2xl text-shumo-red mr-1" />}
                formatted={true}
                dollar={true}
            />
            <Card
                title="Fund"
                statsInfo={tokenStats.funds}
                icon={<FaWallet className="text-2xl text-shumo-red mr-1" />}
                formatted={true}
                dollar={true}
            />
            <Card
                title="Marketing"
                statsInfo={tokenStats.marketing}
                icon={
                    <HiPresentationChartLine className="text-2xl text-shumo-red mr-1" />
                }
                formatted={true}
                dollar={true}
            />
            <Card
                title="Volume"
                statsInfo={tokenStats.volume24}
                icon={<HiDatabase className="text-2xl text-shumo-red mr-1" />}
                formatted={true}
                dollar={true}
            />
            <div className="px-5 bg-shumo-soft-yellow  flex-col rounded-lg shadow-lg pt-5">
                <div className="my-5  flex flex-col ">
                    <div className="h-5"></div>
                    <span className="text-2xl font-bold pb-5 dark:text-shumo-soft-brown">
                        {formatter.format(socialMediaStats.followers)}
                    </span>
                    <img src={Line} alt="Line" />
                    <div className=" flex items-center pt-2">
                        <HiUserAdd className="text-2xl text-shumo-red mr-1" />
                        <span className="uppercase font-bold text-lg dark:text-shumo-soft-brown">
                            Social Followers
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsList;
