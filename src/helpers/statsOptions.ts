const label = (context: any) => {
    return "Token value: $" + context.parsed.y.toFixed(7);
};

export const options = {
    responsive: true,

    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        tooltip: {
            callbacks: {
                label: label,
            },
        },
    },

    scales: {
        xAxes: {
            ticks: {
                color: "#FFF",
                font: {
                    weight: "bold",
                    size: 14,
                },
            },
            grid: {
                color: "transparent",
            },
        },
        yAxes: {
            ticks: {
                color: "#FFF",
                font: {
                    weight: "bold",
                },
            },
            grid: {
                color: "#f5f5f550",
            },
        },
    },
};