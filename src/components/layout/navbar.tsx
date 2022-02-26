import { FC } from "react";
import { HiBriefcase, HiCollection, HiSun, HiViewGrid } from "react-icons/hi";
import { FaChevronRight, FaCoins, FaMoon } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import useDarkMode from "../../store/darkMode";

interface NavbarProps {}
type Pages = {
    name: string;
    path: string;

    icon?: React.ReactElement;
    parentRouteName?: string;
    parentRoutePath?: string;
    parentRouteIcon?: React.ReactElement;
};
const Navbar: FC<NavbarProps> = () => {
    const setDarkMode = useDarkMode((state) => state.setDarkMode);
    const isDark = useDarkMode((state) => state.isDark);
    const location = useLocation();
    const pages: Pages[] = [
        {
            name: "Stats",
            path: "/stats",
            icon: <HiViewGrid className="text-shumo-red text-2xl" />,
        },
        {
            name: "Tokens",
            path: "/portfolio/tokens",
            icon: <FaCoins className="text-shumo-red text-2xl" />,
            parentRouteName: "Portfolio",
            parentRoutePath: "/portfolio",
            parentRouteIcon: (
                <HiBriefcase className="text-shumo-red text-2xl" />
            ),
        },
        {
            name: "NFTS",
            path: "/portfolio/nfts",
            icon: <HiCollection className="text-shumo-red text-2xl" />,
            parentRouteName: "Portfolio",
            parentRoutePath: "/portfolio",
            parentRouteIcon: (
                <HiBriefcase className="text-shumo-red text-2xl" />
            ),
        },
    ];
    return (
        <header className="w-full py-10 flex items-center justify-between ">
            {pages.map((page) => {
                return (
                    location.pathname === page.path && (
                        <div
                            key={page.name}
                            className="flex items-center space-x-2"
                        >
                            {page.parentRouteName && (
                                <div className="flex items-center space-x-2">
                                    {page.parentRouteIcon}
                                    <a className="text-shumo-soft-brown dark:text-shumo-soft-red font-bold uppercase ">
                                        {page.parentRouteName}
                                    </a>

                                    <FaChevronRight className="text-xl text-shumo-red" />
                                </div>
                            )}
                            {page.icon}
                            <Link
                                to={page.path}
                                className="text-shumo-soft-brown dark:text-shumo-soft-red  font-bold uppercase"
                            >
                                {page.name}
                            </Link>
                        </div>
                    )
                );
            })}

            <button onClick={() => setDarkMode()}>
                {!isDark ? (
                    <FaMoon className="text-shumo-soft-brown text-2xl" />
                ) : (
                    <HiSun className="text-shumo-soft-red text-2xl" />
                )}
            </button>
        </header>
    );
};

export default Navbar;
