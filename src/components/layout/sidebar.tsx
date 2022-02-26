import { FC } from "react";
import ShumoLogo from "../../images/shumo-logo.svg";
import { HiBriefcase, HiViewGrid } from "react-icons/hi";
import { GoPrimitiveDot } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
interface SidebarProps {}
type NavItems = {
    name: string;
    path: string;
    icon?: React.ReactElement;
    subItems?: NavItems[];
};

export const navItems: NavItems[] = [
    {
        name: "Stats",
        path: "/stats",
        icon: <HiViewGrid className="text-shumo-red text-2xl" />,
    },
    {
        name: "Portfolio",
        path: "/portfolio",
        icon: <HiBriefcase className="text-shumo-red text-2xl" />,
        subItems: [
            {
                name: "Tokens",
                path: "/portfolio/tokens",
                icon: <GoPrimitiveDot className="text-shumo-red text-2xl" />,
            },
            {
                name: "NFTS",
                path: "/portfolio/nfts",
                icon: <GoPrimitiveDot className="text-shumo-red text-2xl" />,
            },
        ],
    },
];
const Sidebar: FC<SidebarProps> = () => {
    const location = useLocation();

    return (
        <aside className="bg-gray-50 dark:bg-stone-800 min-h-screen p-10 lg:flex hidden flex-col justify-between  shadow-xl">
            <div className="flex flex-col">
                <div className="self-center">
                    <img src={ShumoLogo} alt="Shumo Logo" />
                </div>
                <nav className="my-10">
                    <ul className="space-y-2">
                        {navItems.map((item) => {
                            return item.subItems ? (
                                <li key={item.name}>
                                    <a
                                        className={`flex items-center  py-3 px-5 ${
                                            location.pathname.match(
                                                item.path
                                            ) &&
                                            "bg-shumo-soft-yellow dark:bg-stone-900 shadow"
                                        }   rounded-lg space-x-5 cursor-default`}
                                    >
                                        {item.icon}
                                        <span className="uppercase font-bold">
                                            {item.name}
                                        </span>
                                    </a>

                                    <ul className="pl-10 my-3 space-y-5">
                                        {item.subItems.map((subItem) => (
                                            <li key={subItem.name}>
                                                <Link
                                                    to={subItem.path}
                                                    className="flex items-center space-x-2"
                                                >
                                                    {location.pathname ===
                                                    subItem.path ? (
                                                        subItem.icon
                                                    ) : (
                                                        <div className="h-4 w-4"></div>
                                                    )}

                                                    <span className="uppercase font-bold">
                                                        {subItem.name}
                                                    </span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ) : (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className={`flex items-center  py-3 px-5 ${
                                            location.pathname === item.path &&
                                            "bg-shumo-soft-yellow dark:bg-stone-900 shadow"
                                        }   rounded-lg space-x-5  cursor-pointer`}
                                    >
                                        {item.icon}
                                        <span className="uppercase font-bold">
                                            {item.name}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
            <div className="w-full">
                <a
                    href="https://app.uniswap.org/#/swap?outputCurrency=0xeaa2c985abf14ac850f6614faebd6e4436bea65f&chain=mainnet&inputCurrency=ETH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uppercase font-bold bg-shumo-red text-gray-50 w-full rounded-lg py-3 inline-block text-center"
                >
                    Buy Shumo
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
