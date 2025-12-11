import React from "react";

import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";

const Tech = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
                <div className='w-28 h-28' key={technology.name}>
                    {isMobile ? (
                        <div className="w-full h-full flex justify-center items-center bg-tertiary rounded-full p-2 shadow-card transition-all hover:scale-110">
                            <img
                                src={technology.icon}
                                alt={technology.name}
                                className="w-[70%] h-[70%] object-contain pointer-events-none"
                            />
                        </div>
                    ) : (
                        <BallCanvas icon={technology.icon} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default SectionWrapper(Tech, "");
