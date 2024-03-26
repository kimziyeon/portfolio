import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import scroll from '../scrolldown.svg';


function Project({ data }) {
    console.log(data)

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

                        {/* <div className='p_c_flex'>
                            <p>Git hub</p>
                            <a href="#" target="_blank">{item.gitUrl}</a>
                        </div>
                        <div className='p_c_flex_bottom'>
                            <p>Web</p>
                            <a href="#" target="_blank">{item.webUrl}</a>
                        </div> */}

                    </div>
                </div>

                {/* <a href={item.deployUrl} className='p_right' target="_blank" > */}

                <div className='p_right'>
                    <div className='p_mockup_w'>

                        <p className='box01'><img src={item.img02} alt="img01" /></p>
                        <p className='ipadW'><img src='/img/iPadPro11_w.png' alt="오류" /></p>

                    </div>

                    <div className='p_mockup_h'>

                        <p className='box02'><img src={item.img02} alt="img02" /></p>
                        <p className='ipadH'><img src='/img/iPadPro11_h.png' alt="오류" /></p>

                    </div>
                </div>
            </article>
        )
        )
    }


    return (
        <>
            {renderProjects()}
            <p className='scroll'>
                <Link> <img src={scroll} alt="scroll down" /></Link>

            </p>
        </>
    );
}

export default Project;