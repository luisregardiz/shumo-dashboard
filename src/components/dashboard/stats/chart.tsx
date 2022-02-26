import { FC, useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { options } from "../../../helpers/statsOptions";
import useDarkMode from "../../../store/darkMode";

interface StatsChartProps {
    tokenHour: TokenChart[];
    tokenDay: TokenChart[];
    tokenWeek: TokenChart[];
    tokenMonth: TokenChart[];
}
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface TokenData {
    labels: string[];
    datasets: [
        {
            tension: number;
            data: number[];
            fill: boolean;
            borderColor: string;
            backgroundColor: string;
        }
    ];
}

const StatsChart: FC<StatsChartProps> = ({
    tokenHour,
    tokenDay,
    tokenWeek,
    tokenMonth,
}) => {
    //State
    const isDark = useDarkMode((state) => state.isDark);
    const initialState: TokenData = {
        labels: [],
        datasets: [
            {
                tension: 0.5,
                data: [],
                fill: false,
                borderColor: "#ED5135",
                backgroundColor: "#ED5135",
            },
        ],
    };

    const [tokenData, setTokenData] = useState<TokenData>(initialState);
    //Token Data
    const token1h: TokenData = {
        labels: tokenHour?.map(({ date }) => moment(date).format("LT"))!,
        datasets: [
            {
                tension: 0.5,
                data: tokenHour?.map(({ price }) => price)!,
                fill: false,
                borderColor: "#ED5135",
                backgroundColor: "#ED5135",
            },
        ],
    };

    const token1d: TokenData = {
        labels: tokenDay?.map(({ date }) => moment(date).format("LT"))!,
        datasets: [
            {
                tension: 0.5,
                data: tokenDay?.map(({ price }) => price)!,
                fill: false,
                borderColor: "#ED5135",
                backgroundColor: "#ED5135",
            },
        ],
    };
    const token7d: TokenData = {
        labels: tokenWeek?.map(({ date }) => moment(date).format("L"))!,
        datasets: [
            {
                tension: 0.5,
                data: tokenWeek?.map(({ price }) => price)!,
                fill: false,
                borderColor: "#ED5135",
                backgroundColor: "#ED5135",
            },
        ],
    };
    const token30d: TokenData = {
        labels: tokenMonth?.map(({ date }) => moment(date).format("ll"))!,
        datasets: [
            {
                tension: 0.5,
                data: tokenMonth?.map(({ price }) => price)!,
                fill: false,
                borderColor: "#ED5135",
                backgroundColor: "#ED5135",
            },
        ],
    };

    return (
        <div
            className={`my-10 ${
                isDark ? "bg-chart-dark" : "bg-chart-light"
            } p-5 rounded-xl shadow-xl flex flex-col`}
        >
            <div className="mb-5 border-2 rounded-lg inline-flex self-end divide-x-2 mx-5">
                <button
                    onClick={() => setTokenData(token1h)}
                    className="py-1 px-4 font-bold text-gray-50 focus:text-shumo-soft-brown dark:focus:text-shumo-red"
                >
                    1H
                </button>
                <button
                    onClick={() => setTokenData(token1d)}
                    className="py-1 px-4 font-bold text-gray-50 focus:text-shumo-soft-brown dark:focus:text-shumo-red"
                >
                    1D
                </button>
                <button
                    onClick={() => setTokenData(token7d)}
                    className="py-1 px-4 font-bold text-gray-50 focus:text-shumo-soft-brown dark:focus:text-shumo-red"
                >
                    7D
                </button>
                <button
                    onClick={() => setTokenData(token30d)}
                    className="py-1 px-4 font-bold text-gray-50 focus:text-shumo-soft-brown dark:focus:text-shumo-red"
                >
                    30D
                </button>
            </div>

            {tokenData.labels.length === 0 ? (
                <Line data={token1h} options={options} height={110} />
            ) : (
                <Line data={tokenData} options={options} height={110} />
            )}
        </div>
    );
};

export default StatsChart;
