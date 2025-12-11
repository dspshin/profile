import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { education } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    My Academic background
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Education.
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col gap-5'>
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
                    >
                        <div className='bg-tertiary rounded-[20px] py-5 px-8 flex flex-col sm:flex-row justify-between items-center'>
                            <div className="flex flex-col">
                                <h4 className='text-default-text text-[20px] font-bold'>{edu.school}</h4>
                                <p className='text-secondary text-[16px]'>{edu.degree}</p>
                            </div>
                            <p className='text-default-text text-[16px] font-bold'>{edu.date}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Education, "education");
