import { FC } from "react";
import "./spinner.css";
interface SpinnerProps {}

const Spinner: FC<SpinnerProps> = () => {
    return (
        <div className="h-[50vh] w-full flex items-center justify-center">
            <div className="spinner"></div>
        </div>
    );
};

export default Spinner;
