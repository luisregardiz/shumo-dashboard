import { FC } from "react";
import StatsChart from "../../components/dashboard/stats/chart";

import StatsList from "../../components/dashboard/stats/list";
import Spinner from "../../components/spinner/spinner";

import {
    getSocialMediaStats,
    getTokenPrice1D,
    getTokenPrice1H,
    getTokenPrice1M,
    getTokenPrice7D,
    getTokenStats,
} from "../../services/api/stats";

interface StatsProps {}

const Stats: FC<StatsProps> = () => {
    //Data Stats
    const tokenStats = getTokenStats().data;
    const socialMediaStats = getSocialMediaStats().data;
    const errorSocialMediaStats = getSocialMediaStats().error;
    const errorTokenStats = getTokenStats().error;
    //Data Chart
    const tokenHour = getTokenPrice1H().data;
    const tokenDay = getTokenPrice1D().data;
    const tokenWeek = getTokenPrice7D().data;
    const tokenMonth = getTokenPrice1M().data;
    if (!tokenStats || !socialMediaStats) return <Spinner />;
    if (errorTokenStats || errorSocialMediaStats)
        return <p>{errorTokenStats || errorSocialMediaStats}</p>;
    return (
        <section className="my-5">
            <StatsList
                tokenStats={tokenStats}
                socialMediaStats={socialMediaStats}
            />
            <StatsChart
                tokenHour={tokenHour!}
                tokenDay={tokenDay!}
                tokenWeek={tokenWeek!}
                tokenMonth={tokenMonth!}
            />
        </section>
    );
};

export default Stats;
