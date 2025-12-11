import React from "react";
import ReactKey from "react"; // Dummy import to fix React usage if needed, though we imported it above.

import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";



const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                SK 그룹 내에서 약 15년, 삼성전자에서 10년동안 다양한 서비스와 플랫폼을 개발해 온 소프트웨어 엔지니어입니다.
                <br className='block mb-2' />
                웹 프론트엔드(Vue, Nuxt)를 중심으로, 챗봇 플랫폼, 웹 저작 도구, 임베디드 미들웨어 등 폭넓은 영역을 경험했습니다.
                <br className='block mb-2' />
                사용자 경험과 서비스 품질을 고려한 <strong>프론트엔드 아키텍처 설계</strong>, <strong>웹뷰 기반 서비스 개발</strong>, <strong>플랫폼 개발 및 운영</strong>에 강점을 가지고 있습니다.
            </motion.p>



        </>
    );
};

export default SectionWrapper(About, "about");
