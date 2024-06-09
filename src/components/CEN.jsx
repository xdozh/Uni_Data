import Section from "./Section";
import { cen, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const CEN = () => {
    return (
        <Section className="overflow-hidden" id="cen">
            <div className="container relative z-2">
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                    <img
                        src={cen}
                        className="relative z-1"
                        width={750}
                        height={400}
                        alt="college of engineering"
                    />
                    <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img
                            src={stars}
                            className="w-full"
                            width={950}
                            height={400}
                            alt="Stars"
                        />
                    </div>
                </div>

                <Heading
                    tag="Gear up for better grades"
                    title="Resources related to CEN courses"
                />

                <div className="relative">
                    <PricingList />
                    <LeftLine />
                    <RightLine />
                </div>

                <div className="flex justify-center mt-10">
                    <a
                        className="text-xs font-code font-bold tracking-wider uppercase border-b"
                        href="/CEN.jsx"
                    >
                        See the full details
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default CEN;