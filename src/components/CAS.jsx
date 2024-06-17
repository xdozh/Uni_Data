import { cas_courses } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { cas } from "../assets/index.js";

const CAS = () => {
    // Splitting the courses into categories
    const sciencesCourses = cas_courses.slice(0, 6);
    const mathematicsCourses = cas_courses.slice(6, 8);
    const gerCourses = cas_courses.slice(8,15);
    const engCourses = cas_courses.slice(15);

    // Helper function to render cards
    const renderCards = (courses) => (
        <div className="flex flex-wrap gap-10 mb-10">
            {courses.map((item) => (
                <a href={item.url} className="flex items-center mt-auto text-n-1 no-underline" key={item.id}>
                    <div
                        className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                        style={{ backgroundImage: `url(${item.backgroundUrl})` }}
                    >
                        <div className="relative z-2 flex flex-col min-h-[5rem] p-[2.4rem] pointer-events-none">
                            <h5 className="h5 mb-5">{item.title}</h5>
                            <p className="body-2 mb-6 text-n-3">{item.text}</p>
                            <div className="flex items-center mt-auto">
                                <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                                    Study Now
                                </p>
                                <Arrow />
                            </div>
                        </div>

                        {item.light && <GradientLight />}

                        <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#cas_images)" }}>
                            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                                {item.imageUrl && (
                                    <img
                                        src={item.imageUrl}
                                        width={380}
                                        height={362}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>
                        </div>

                        <ClipPath />
                    </div>
                </a>
            ))}
        </div>
    );

    return (
        <Section id="cas">
            <div className="container relative z-2">
                <div className="flex justify-center">
                    <img
                        src={cas}
                        className="relative z-1"
                        width={750}
                        height={400}
                        alt="College of Arts & Science"
                    />
                </div>

                {/* Sciences Section */}
                <div className="flex justify-center mt-15">
                    <Heading title="Sciences" />
                </div>
                {renderCards(sciencesCourses)}

                {/* Mathematics Section */}
                <div className="flex justify-center mt-15">
                    <Heading title="Mathematics" />
                </div>
                {renderCards(mathematicsCourses)}

                {/* All GERs Section */}
                <div className="flex justify-center mt-15">
                    <Heading title="General Education Requirements" />
                </div>
                {renderCards(gerCourses)}

                {/* All Eng & Wri Section */}
                <div className="flex justify-center mt-15">
                    <Heading title="Language" />
                </div>
                {renderCards(engCourses)}
            </div>
        </Section>
    );
};

export default CAS;
