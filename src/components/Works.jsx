import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
                <div className='relative w-full h-[350px]'>
                    <img
                        src={image}
                        alt={name}
                        className='w-full h-full object-contain rounded-2xl bg-[#050816]'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <span className="text-white text-xs">LINK</span>
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-default-text font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>Publications</p>
                <h2 className={`${styles.sectionHeadText}`}>저서 및 강의.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    지난 15년 이상의 개발 경험을 바탕으로 집필한 저서와 강연들입니다.
                    모바일 게임, 파이썬, 웹 개발, 임베디드 등 다양한 분야의 지식을 공유해왔습니다.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "books");
