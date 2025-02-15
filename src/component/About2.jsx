import { useState } from 'react';
import arrowBlue from '../img/arrowBlue.png';
import arrowWhite from '../img/arrowWhite.png';
import ToggleBtn from './ToggleBtn';
import { motion } from 'framer-motion';
import myPhoto1 from '../img/photo1.jpg';
import myPhoto2 from '../img/photo2.jpg';


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
                    <div className={toggleIf === false ? 'title effect' : 'title'}>
                        <p className='txt_box'>
                            <span>감각적인</span> 센스 한 스푼을 담아
                        </p>
                        <div className='txt_box'>
                            <ToggleBtn setToggleIf={setToggleIf} className='toggle' /><span> 사용하기 쉬운</span> UI / UX를 개발하고 <br />
                            끊임없이 추구하고 <span> 성장하는</span> <br />
                            웹 개발자 <span>김지연</span>입니다.
                        </div>
                    </div>

                    <div className={toggleIf === false ? 'profile off' : 'profile'}>
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
                                <p>Css / Sass</p>
                                <p>jQuery</p>
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
                                <p>Photoshop</p>
                                <p>Illustrator</p>
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

                    <div className={toggleIf === false ? 'photoGrid' : 'photoGrid off'} >
                        {data.skill.map((item, key) => (
                            <div className='skillBox' key={key} style={{ gridArea: `area${key}` }}>
                                <p className='skillColor'>
                                    <img src={item.srcColor} alt="error" />
                                </p>

                                {/* <p className='skillGray'>
                                    <img src={item.srcGray} alt="error" />
                                </p> */}
                            </div>
                        )
                        )}

                        <p className='photo1 p1'>
                            <img src={myPhoto1} alt="error" />
                        </p>
                        <p className='photo2 p2'>
                            <img src={myPhoto2} alt="error" />
                        </p>
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