import { FC } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="grid grid-flow-col lg:grid-cols-5 grid-cols-1 ">
            <Sidebar />
            <main className="col-span-4  max-w-screen-xl w-full mx-auto px-10">
                <Navbar />
                {children}
            </main>
        </div>
    );
};

export default Layout;
