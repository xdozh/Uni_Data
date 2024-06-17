import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import CAS from "./components/CAS.jsx";
import Services from "./components/Sevices.jsx";
import CEN from "./components/CEN.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <>
            <div className="pt-[4,75rem] lg:pt-[5.25rem] overflow-hidden">
                <Header />
                <Hero/>
                <CAS/>
                <Services/>
                <CEN/>
                <Roadmap/>
                <Footer/>
            </div>

            <ButtonGradient/>
        </>
    )
}
export default App
