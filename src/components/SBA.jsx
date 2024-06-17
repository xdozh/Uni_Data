import Section from "./Section";
import Heading from "./Heading";
import {sba} from "../assets";
import {sba_courses} from "../constants";
import Arrow from "../assets/svg/Arrow.jsx";
import {GradientLight} from "./design/Benefits.jsx";
import ClipPath from "../assets/svg/ClipPath.jsx";
import {Tilt} from "react-tilt";

const SBA = () => {

    const sbacourse = sba_courses;

    const renderCards = (courses) => (
        <div className="flex flex-wrap gap-10 mb-10">
            {courses.map((item) => (
                <Tilt
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
                >
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
            </Tilt>
            ))}
        </div>
    );
    return (
        <Section id="sba">
            <div className="container relative z-2">
                <div className="flex justify-center mb-20">
                    <img
                        src={sba}
                        className="relative z-1"
                        width={750}
                        height={400}
                        alt="College of Arts & Science"
                    />
                </div>
                <Heading
                    tag="Time to invest in your courses"
                    title="Resources related to SBA courses"
                />
                {renderCards(sbacourse)}
            </div>
        </Section>
    );
};

export default SBA;