import React from 'react';
import { Link } from 'react-router-dom';
import scroll from '../scrolldown.svg';
import { motion } from 'framer-motion';



function About({ menuRef, menuclick }) {

    // console.log(props.menuRef.current[0])
    return (
        <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
                ease: "easeInOut",
                duration: 1,
                y: { duration: 1 },
            }}
        >
            <article className='a_main'>
                <div className='a_title'>
                    <h4>Hello, I’m</h4>
                    <p>주변에 좋은 영향을 전하며 사용하기 쉬운 UI와 기억에 남는 UX를 개발하고,<br />
                        지속적인 배움과 성장 속에서 발전하는, 어제보다 더 나은 내가 되기 위한 목표를 가지고 꾸준히 성장 중인 김지연입니다.</p>

                </div>

                <div className='a_conts'>

                    <div className='a_g1'>
                        <h5>About</h5>
                        <p>김지연</p>
                        <p>Jiyeon Kim</p>
                        <p>1994.02.28</p>
                        <p>ESFJ</p>
                    </div>

                    <div className='a_g2'>
                        <h5>Contact</h5>
                        <p>010 - 4025 - 4037</p>
                        <p>aa40254037@gmail.com</p>
                        <a href="https://github.com/kimziyeon">--------------- GitHub</a>
                        <a href='https://velog.io/@aa40254037'>---------------- Velog</a>
                    </div>

                    <div className='a_g3'>
                        <h5>Education</h5>
                        <div className='a_g_flex'>
                            <div>
                                <p>2012 - 2016</p>
                                <p>2023 - 2024</p>
                            </div>
                            <div>
                                <p>전주대학교 산업디자인과</p>
                                <p>그린컴퓨터 아카데미</p>
                            </div>
                        </div>
                    </div>

                    <div className='a_g4'>
                        <h5>Experience</h5>
                        <div className='a_g_flex'>
                            <div>
                                <p>2016 - 2018</p>
                                <p>2019 - 2023</p>
                            </div>
                            <div>
                                <p>인휴 ㅣ 디스플레이팀</p>
                                <p>KDF ㅣ 디자인팀</p>
                            </div>
                        </div>
                    </div>

                    <div className='a_g5'>
                        <h5>Skills</h5>
                        <div className='a_skill_flex'>
                            <div>Html5</div>
                            <div>Css</div>
                            <div>Sass</div>
                            <div>Java<br />script</div>
                            <div>Type<br />script</div>
                            <div>React.js</div>
                            <div>Next.js</div>
                            <div>GitHub</div>
                            <div>Velcel</div>
                            <div>Notion</div>
                            <div>MongoDB</div>
                            <div>MySQL</div>
                            <div>Figma</div>
                            <div>Adobe<br />photoshop</div>
                            <div>Adobe<br />illustrator</div>
                            <div>+</div>
                        </div>
                    </div>

                </div>

            </article >

            {/* <p className='scroll' onClick={() => { menuclick(menuRef.current[2]) }}>
                <Link> <img src={scroll} alt="scroll down" /></Link>

            </p> */}

        </motion.div>
    );
}

export default About;