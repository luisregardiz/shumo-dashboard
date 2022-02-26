import { FC } from "react";
import Line from "../../../../images/line.svg";
import useDarkMode from "../../../../store/darkMode";
interface NFTCardProps {
    value: string | number;
    icon: React.ReactNode;
    title: string;
}

const NFTCard: FC<NFTCardProps> = ({ value, icon, title }) => {
    const isDark = useDarkMode((state) => state.isDark);
    return (
        <div
            className={`px-5 bg-card-light ${
                isDark ? "bg-card-dark" : "bg-card-light"
            } flex-col rounded-lg shadow-lg pt-5`}
        >
            <div className="my-5  flex flex-col ">
                <span className="text-3xl font-bold pb-5 text-shumo-soft-brown dark:text-gray-50 self-center">
                    {value}
                </span>
                <img src={Line} alt="Line" />
                <div className=" flex items-center pt-2">
                    {icon}
                    <span className="uppercase font-bold text-lg text-shumo-soft-brown dark:text-gray-50">
                        {title}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NFTCard;
