import { useState } from 'react';
import arrowBlue from '../img/arrowBlue.png';
import arrowWhite from '../img/arrowWhite.png';
import ToggleBtn from './ToggleBtn';
import { motion } from 'framer-motion';


const RenderLink = ({ item }) => {
    let [isHover, setIsHover] = useState(false);

    return (

        <a href={item.link} target="_blank" onMouseOver={() => { setIsHover(true) }} onMouseOut={() => { setIsHover(false) }}>
            <div className='link_title'>
                <b>{item.title}</b>
                <p>{item.subtitle}</p>
            </div>
            <p>
                <img src={isHover ? arrowWhite : arrowBlue} alt="link" />
            </p>
        </a>
    )
}


function About2({ data, mouseHandle, bigCircle, smallCircle }) {

    let [toggleIf, setToggleIf] = useState();
    // console.log(data)
    // console.log(toggleIf)
    // console.log(mouseHandle, 'dd')

    return (
        <>
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

                <article className='about_main' onMouseMove={mouseHandle}>
                    <div className='title'>
                        <p>
                            <b>감각적인</b> 센스 한 스푼을 담아
                        </p>
                        <p>
                            <ToggleBtn setToggleIf={setToggleIf} /><b> 사용하기 쉬운</b> UI / UX를 개발하고 <br />
                            끊임없이 <b>추구하고</b> 성장하는 <br />
                            웹 개발자 <b>김지연</b>입니다.
                        </p>
                    </div>

                    <div className={toggleIf ? 'profile off' : 'profile'}>
                        <h4>About</h4>
                        <h4>Skill</h4>
                        <h4>Education</h4>
                        <h4>Experience</h4>
                        <div className='a_about'>
                            <div>
                                <p>김지연</p>
                                <p>Jiyeon Kim</p>
                                <p>1994.02.28</p>
                                <p>ESFJ</p>
                            </div>
                        </div>
                        <div className='a_skill'>
                            <div>
                                <p>Html5</p>
                                <p>Css</p>
                                <p>Sass</p>
                                <p>Java Script</p>
                                <p>Type Script</p>
                                <p>React.js</p>
                                <p>Next.js</p>
                                <p>GitHub</p>
                                <p>Velcel</p>
                            </div>
                            <div>
                                <p>MongoDB</p>
                                <p>MySQL</p>
                                <p>Notion</p>
                                <p>Figma</p>
                                <p>Adobe Photoshop</p>
                                <p>Adobe illustrator</p>
                            </div>
                        </div>
                        <div className='a_edu'>
                            <div>
                                <p>2012 - 2016</p>
                                <p>전주대학교 산업디자인과</p>
                            </div>
                            <div>
                                <p>2023 - 2024</p>
                                <p>그린컴퓨터 아카데미</p>
                            </div>
                        </div>
                        <div className='a_exp'>
                            <div>
                                <p>2016 - 2018</p>
                                <p>인휴 ㅣ 디스플레이팀</p>
                            </div>
                            <div>
                                <p>2019 - 2023</p>
                                <p>KDF ㅣ 디자인팀</p>
                            </div>
                        </div>
                    </div>

                    <div className='link' onMouseOver={bigCircle} onMouseLeave={smallCircle}>
                        {data.about.map((item) => (
                            <RenderLink key={item.id} item={item} />
                        ))

                        }
                    </div>
                </article>
            </motion.div >

        </>
    )
}

export default About2;