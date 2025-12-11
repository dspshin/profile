import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 w-full mb-10 text-default-text">
            <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-[#915eff]" />
                <div className="w-1 h-full violet-gradient" />
            </div>
            <div className="bg-tertiary p-5 rounded-2xl w-full relative">
                <h3 className='text-default-text text-[24px] font-bold'>{experience.title}</h3>
                <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
                    {experience.company_name}
                </p>
                <p className="text-secondary text-[12px] mb-4">{experience.date}</p>
                <ul className='mt-2 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                        <li
                            key={`experience-point-${index}`}
                            className='text-default-text text-[14px] pl-1 tracking-wider'
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    What I have done so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Work Experience.
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={`experience-${index}`}
                        experience={experience}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
