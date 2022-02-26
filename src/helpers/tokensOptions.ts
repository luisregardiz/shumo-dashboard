const label = (context: any) => {
    let label = context.dataset.label || "";

    if (label) {
        label += ": ";
    }
    if (context.parsed.y !== null) {
        label += new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(context.parsed.y);
    }
    return label;
};

export const options = {
    responsive: true,

    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: "TOTAL VALUE",
            color: "#f5f5f5",
            font: {
                size: 16,
            },
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
