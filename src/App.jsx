import { SpeedInsights } from '@vercel/speed-insights/react';

import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import CAS from "./components/CAS.jsx";
import SBA from "./components/SBA.jsx";
import CEN from "./components/CEN.jsx";
import Contributions from "./components/Contributions.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <>
            <div className="pt-[4,75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header />
                <Hero/>
                <CAS/>
                <SBA/>
                <CEN/>
                <Contributions/>
                <Footer/>
            </div>

            <ButtonGradient/>
            <SpeedInsights/>
        </>
    )
}
export default App
