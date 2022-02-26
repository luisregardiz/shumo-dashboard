import { FC } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import Line from "../../images/line.svg";
interface CardProps {
    statsInfo: StatsInformation;
    title: string;
    icon: React.ReactElement;
    dollar?: boolean;
    token?: boolean;
    formatted?: boolean;
    decimal?: number;
}

const Card: FC<CardProps> = ({
    statsInfo,
    title,
    icon,
    dollar,
    token,
    formatted,
    decimal,
}) => {
    const formatter = new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
    });

    const priceDifference = Number(statsInfo.now) - Number(statsInfo.yesterday);
    const priceDifferencePercentage =
        (priceDifference / Number(statsInfo.yesterday)) * 100;

    return (
        <div className="px-5 bg-shumo-soft-yellow  flex-col rounded-lg shadow-lg pt-5">
            <div
                className={`text-sm flex items-center ${
                    Number(statsInfo.now) < Number(statsInfo.yesterday)
                        ? "text-red-600"
                        : "text-green-600"
                }`}
            >
                <span>
                    {formatted
                        ? formatter.format(priceDifference)
                        : priceDifference.toFixed(6)}
                </span>
                <span className="mx-1">
                    ({priceDifferencePercentage.toFixed(2)}
                    %)
                </span>
                {Number(statsInfo.now) < Number(statsInfo.yesterday) ? (
                    <FaChevronDown className="text-red-600 " />
                ) : (
                    <FaChevronUp className="text-green-600 " />
                )}
            </div>
            <div className="my-5  flex flex-col ">
                <span className="text-2xl font-bold pb-5 dark:text-shumo-soft-brown">
                    {dollar && "$"}
                    {formatted
                        ? formatter.format(Number(statsInfo.now))
                        : Number(statsInfo.now).toFixed(decimal)}

                    {token && " SHUMO"}
                </span>
                <img src={Line} alt="Line" />
                <div className=" flex items-center pt-2">
                    {icon}
                    <span className="uppercase font-bold text-lg dark:text-shumo-soft-brown">
                        {title}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;
