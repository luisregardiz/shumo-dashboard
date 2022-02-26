import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Layout from "./components/layout/layout";
import PortfolioNFT from "./pages/portfolio/nfts";
import PortfolioTokens from "./pages/portfolio/tokens";
import Stats from "./pages/stats";
import useDarkMode from "./store/darkMode";

function App() {
    const navigate = useNavigate();
    const location = useLocation();
    const isDark = useDarkMode((state) => state.isDark);
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
        }
    }, [isDark]);
    useEffect(() => {
        location.pathname === "/" && navigate("/stats");
    }, []);

    return (
        <Layout>
            <Routes>
                <Route path="/stats" element={<Stats />} />
                <Route path="/portfolio/tokens" element={<PortfolioTokens />} />
                <Route path="/portfolio/nfts" element={<PortfolioNFT />} />
            </Routes>
        </Layout>
    );
}

export default App;
