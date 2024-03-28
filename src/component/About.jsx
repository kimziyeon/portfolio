import React from 'react';
import { Link } from 'react-router-dom';
import scroll from '../scrolldown.svg';

function About(props) {
    return (
        <>
            <article className='a_main'>
                <div className='a_title'>
                    <h4>Hello, I’m</h4>
                    <p>상상한 무궁무진한 아이디어를 제가 배운 기술로 sdfsdfsㄴd ME!!!!!!!!!!!!<br />
                        ㅇ헬롷아닐ㄴㅇ린ㅇㄹㄴㅇㄹㄴㅇㄹㄴ자기소개가 제일 어렵고 힘들어ㅇㄴㄹ </p>
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
                            <div>css</div>
                            <div>sass</div>
                            <div>Java<br />script</div>
                            <div>Type<br />script</div>
                            <div>React</div>
                            <div>Next.js</div>
                            <div>Vue.js</div>
                            <div>Server</div>
                            <div>GitHub</div>
                            <div>Notion</div>
                            <div>Figma</div>
                            <div>+</div>
                            <div>+</div>
                            <div>+</div>
                            <div>+</div>
                        </div>
                    </div>

                </div>

            </article >

            <p className='scroll'>
                <Link> <img src={scroll} alt="scroll down" /></Link>

            </p>

        </>
    );
}

export default About;