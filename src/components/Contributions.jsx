import Heading from "./Heading";
import Section from "./Section";
import {Contribution} from "../constants";
import { Gradient } from "./design/Roadmap";
import Arrow from "../assets/svg/Arrow.jsx";
import {GradientLight} from "./design/Benefits.jsx";
import ClipPath from "../assets/svg/ClipPath.jsx";

const Contributions = () => {
    const contributed = Contribution.slice(0, 3);

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
    return(
        <Section className="overflow-hidden" id="contributions">
            <div className="container md:pb-10">
                <Heading
                    title="Contributed Resources"
                    tag="For the people by the people"
                />
                {renderCards(contributed)}

                <div className="flex justify-center mt-15">
                    <Heading
                        title="Help us grow by contributing or giving us feedback"
                    />
                </div>
                <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => window.location.href = 'https://forms.gle/gcQZSqcXszio9CXc6'}>
                        Contribute
                    </button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => window.location.href = 'https://forms.gle/gcQZSqcXszio9CXc6'}>
                        Give Feedback
                    </button>
                    <Gradient/>
                </div>
            </div>
        </Section>
    );
};

export default Contributions;