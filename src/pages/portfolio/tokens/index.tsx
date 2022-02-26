import { FC } from "react";
import TokenChart from "../../../components/dashboard/portfolio/tokens/chart";
import TokenTable from "../../../components/dashboard/portfolio/tokens/table";
import Spinner from "../../../components/spinner/spinner";
import {
    getTokenValue30D,
    getTokenValue7D,
    getWalletTokens,
} from "../../../services/api/tokens";

interface PortfolioTokensProps {}

const PortfolioTokens: FC<PortfolioTokensProps> = () => {
    const tokenWeek = getTokenValue7D().data;
    const tokenMonth = getTokenValue30D().data;
    const walletTokens = getWalletTokens().data;
    const errorWalletTokens = getWalletTokens().error;
    const errorTokenWeek = getTokenValue7D().error;
    const errorTokenMonth = getTokenValue30D().error;
    if (!tokenWeek || !tokenMonth || !walletTokens) return <Spinner />;
    if (errorTokenWeek || errorTokenMonth || errorWalletTokens)
        return (
            <div>{errorTokenMonth || errorTokenWeek || errorWalletTokens}</div>
        );
    return (
        <section className="my-5">
            <TokenChart tokenMonth={tokenMonth} tokenWeek={tokenWeek} />
            <TokenTable walletTokens={walletTokens} />
        </section>
    );
};

export default PortfolioTokens;
