import React, { useState, useEffect } from 'react';
import Heading from "./Heading";
import Section from "./Section";
import { Contribution } from "../constants";
import { Gradient } from "./design/Roadmap";
import Arrow from "../assets/svg/Arrow.jsx";
import { GradientLight } from "./design/Benefits.jsx";
import ClipPath from "../assets/svg/ClipPath.jsx";

const Contributions = () => {
    const contributed = Contribution.slice(0, 3);
    const [showContributions, setShowContributions] = useState(false);
    const [showContributeButton, setShowContributeButton] = useState(false);
    const [showJotFormButton, setShowJotFormButton] = useState(false);

    const toggleContributions = () => {
        setShowContributions(!showContributions);
    };

    const toggleContributeButton = () => {
        setShowContributeButton(!showContributeButton);
        if (!showContributeButton) {
            setShowJotFormButton(false);
        }
    };

    const toggleJotFormButton = () => {
        setShowJotFormButton(!showJotFormButton);
        if (!showJotFormButton) {
            setShowContributeButton(false);
        }
    };

    useEffect(() => {
        let contributeScript;
        if (showContributeButton) {
            contributeScript = document.createElement('script');
            contributeScript.src = "https://form.jotform.com/jsform/241913278858469";
            contributeScript.async = true;
            document.getElementById("contribute-container").appendChild(contributeScript);
        }

        return () => {
            if (contributeScript) {
                contributeScript.remove();
                const contributeEmbed = document.getElementById("contribute-container");
                if (contributeEmbed) contributeEmbed.innerHTML = "";
            }
        };
    }, [showContributeButton]);

    useEffect(() => {
        let jotformScript;
        if (showJotFormButton) {
            jotformScript = document.createElement('script');
            jotformScript.src = "https://form.jotform.com/jsform/241913335377459";
            jotformScript.async = true;
            document.getElementById("jotform-container").appendChild(jotformScript);
        }

        return () => {
            if (jotformScript) {
                jotformScript.remove();
                const jotformEmbed = document.getElementById("jotform-container");
                if (jotformEmbed) jotformEmbed.innerHTML = "";
            }
        };
    }, [showJotFormButton]);

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
        <Section className="overflow-hidden" id="contributions">
            <div className="container md:pb-10">
                <Heading
                    title="Contributed Resources"
                    tag="For the people by the people"
                />

                <div className="flex justify-around mt-15">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={toggleContributions}
                    >
                        {showContributions ? "Hide Contributions" : "Show Contributions"}
                    </button>
                </div>

                {showContributions && renderCards(contributed)}

                <div className="flex justify-center mt-15">
                    <Heading
                        title="Help us grow by contributing or giving us feedback"
                    />
                </div>

                <div className="flex justify-around mt-15">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={toggleContributeButton}
                    >
                        {showContributeButton ? "Hide Contribute" : "Contribute Here"}
                    </button>
                    <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        onClick={toggleJotFormButton}
                    >
                        {showJotFormButton ? "Hide Feedback" : "Give us Feedback"}
                    </button>
                </div>

                <div className="relative flex justify-center mt-10">
                    {showContributeButton && (
                        <div className="w-full max-w-2xl mx-auto">
                            <div id="contribute-container"></div>
                        </div>
                    )}
                    {showJotFormButton && (
                        <div className="w-full max-w-2xl mx-auto">
                            <div id="jotform-container"></div>
                        </div>
                    )}
                </div>

                <Gradient/>
            </div>
        </Section>
    );
};

export default Contributions;