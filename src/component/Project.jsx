import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import scroll from '../scrolldown.svg';


function Project({ data, menuRef, menuclick }) {
    // console.log(data)

    const renderProjects = () => {
        return data.project.map((item) => (

            <article className='p_main' key={item.id} >
                <div className='p_left'>
                    <div className='p_left_content1'>
                        <span>{item.subtitle}</span>
                        <h3>{item.title}</h3>
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
                    <a href={item.webUrl}>
                        <div className='p_mockup_w' target="_blank">
                            <p className='ipadW'>
                                <span className='box01'><img src={item.img02} alt="img01" /></span>
                                <img src='/img/iPadPro11_w.png' alt="오류" /></p>

                        </div>

                        <div className='p_mockup_h'>
                            <p className='box02'><img src={item.img02} alt="img02" /></p>
                            <p className='ipadH'><img src='/img/iPadPro11_h.png' alt="오류" /></p>

                        </div>
                    </a>
                </div>
            </article>
        )
        )
    }


    return (
        <>
            {renderProjects()}
            <p className='scroll' onClick={() => { menuclick(menuRef.current[3]) }}>
                <Link> <img src={scroll} alt="scroll down" /></Link>

            </p>
        </>
    );
}

export default Project;