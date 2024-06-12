import Section from "./Section";
import { cen, stars } from "../assets";
import Heading from "./Heading";
import CourseCard from "./CourseCard.jsx";  // Ensure the import name matches the export
import { CenCourses } from "../constants";     // Import CenCourses here

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

                <div className='mt-20 flex flex-wrap gap-7'>
                    <CourseCard courses={CenCourses} />
                </div>
            </div>
        </Section>
    );
};

export default CEN;
