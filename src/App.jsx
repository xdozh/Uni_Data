import React, { useEffect } from 'react';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import CAS from "./components/CAS.jsx";
import SBA from "./components/SBA.jsx";
import CEN from "./components/CEN.jsx";
import Contributions from "./components/Contributions.jsx";
import Footer from "./components/Footer.jsx";

const logPerformance = (metric) => {
    console.log(metric);
    // Optionally send the metric to your analytics endpoint
    fetch('/analytics', {
        method: 'POST',
        body: JSON.stringify(metric),
        headers: { 'Content-Type': 'application/json' },
    });
};

const usePerformanceMetrics = () => {
    useEffect(() => {
        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                logPerformance(entry.toJSON());
            });
        });
        observer.observe({ type: 'navigation', buffered: true });
        observer.observe({ type: 'paint', buffered: true });

        return () => observer.disconnect();
    }, []);
};

const App = () => {
    usePerformanceMetrics();

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
        </>
    )
}

export default App;