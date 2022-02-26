import { FC } from "react";
import { FaWallet } from "react-icons/fa";
import ETHIcon from "../../../../images/icons/eth-icon.svg";
import ShumoIcon from "../../../../images/icons/shumo-icon.svg";
import USDTIcon from "../../../../images/icons/usdt-icon.svg";
import Line from "../../../../images/line-2.svg";
interface TokenTableProps {
    walletTokens: WalletToken[];
}

const TokenTable: FC<TokenTableProps> = ({ walletTokens }) => {
    const formatter = new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
    });
    const formatterDollar = new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 2,
        style: "currency",
        currency: "USD",
    });
    return (
        <div className="bg-shumo-soft-yellow p-10 rounded-xl shadow-lg text-shumo-soft-brown">
            <div className="flex items-center">
                <FaWallet className="text-2xl text-shumo-red mr-2" />
                <h4 className="text-2xl text-shumo-soft-brown font-bold">
                    Token Wallet Assets
                </h4>
            </div>
            <div className="my-5">
                <ul>
                    {walletTokens.map((token) => (
                        <li key={token.symbol} className=" p-2">
                            <div className="flex items-center justify-between pb-2">
                                <div className="flex items-center space-x-5">
                                    <img
                                        src={
                                            (token.symbol === "ETH" &&
                                                ETHIcon) ||
                                            (token.symbol === "SHUMO" &&
                                                ShumoIcon) ||
                                            USDTIcon
                                        }
                                        alt={token.symbol}
                                        className="w-6 object-contain"
                                    />
                                    <div className="flex flex-col">
                                        <span className="text-shumo-red font-bold uppercase text-lg">
                                            {token.symbol}
                                        </span>
                                        <span>
                                            {formatter.format(
                                                Number(token.tokens)
                                            )}{" "}
                                            {token.symbol}
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <span>
                                        {formatterDollar.format(
                                            Number(token.value.now)
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                    background: `url(${Line}) no-repeat`,
                                }}
                                className=" h-1"
                            ></div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TokenTable;
