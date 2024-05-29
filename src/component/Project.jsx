import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import scroll from '../scrolldown.svg';
import { motion } from 'framer-motion';

function Project({ data, menuRef, menuclick, mouseHandle }) {
    // console.log(data)

    const renderProjects = () => {
        return data.project.map((item) => (
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
                <article className='p_main' key={item.id} onMouseMove={mouseHandle}>
                    <div className='p_left'>
                        <div className='p_left_content1'>
                            <span>{item.subtitle}</span>
                            <div className='contents_title'>
                                <h3>{item.title}</h3>
                                <h4>{item.person}</h4>
                            </div>
                            <p>{item.detail}</p>
                        </div>

                        <div className='p_left_content2'>
                            <div className='content_icon'>
                                <a href={item.gitUrl} target="_blank"><img src="/img/git_icon_blue.png" alt="github" /></a>
                                <a href={item.webUrl} target="_blank"><img src="/img/link_icon_blue.png" alt="link" /></a>
                            </div>
                            <div className='p_c_flex'>
                                <p>주요업무</p>
                                <p>{item.work}</p>
                            </div>
                            <div className='p_c_flex_bottom'>
                                <p>기술스택</p>
                                <p>{item.stack}</p>
                            </div>
                        </div>
                    </div>

                    <div className='p_right'>
                        <a href={item.webUrl} target="_blank">
                            <div className='p_mockup_w' target="_blank">
                                <p className='ipadW'>
                                    <span className='box01'><img src={item.img01} alt="img01" /></span>
                                    <img src='/img/iPadPro11_w.png' alt="오류" /></p>

                            </div>

                            <div className='p_mockup_h'>
                                <p className='box02'><img src={item.img02} alt="img02" /></p>
                                <p className='ipadH'><img src='/img/iPadPro11_h.png' alt="오류" /></p>

                            </div>
                        </a>
                    </div>
                </article>
            </motion.div>
        )
        )
    }


    return (
        <>
            {renderProjects()}
            {/* <p className='scroll' onClick={() => { menuclick(menuRef.current[3]) }}>
                <Link> <img src={scroll} alt="scroll down" /></Link>
            </p> */}

        </>
    );
}

export default Project;