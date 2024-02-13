import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ipadW from '../img/mockup/ipad/iPad Pro11_w.png';
import ipadH from '../img/mockup/ipad/iPad Pro11_h.png';
import scroll from '../scrolldown.svg';
import data from '../data.json';


function Project({data}) {
    console.log(data)
    
    const renderProjects=()=>{
        return data.project.map((item)=>(

            <article className='p_main' key={item.id} >
                <div className='p_left'>
                    <div className='p_left_c1'>
                        <span>RESPONSIVE WEBSITE &#91;PC, MOB&#93;</span>
                        <h3>서울특별시 홈페이지</h3>
                        <p>
                            프로젝트 내용내용프로젝트 내용내용 프로젝트 내용내용
                            프로젝트 내용내용프로젝트 내용내용프로젝트 내용내용
                            프로젝트 내용내용 프로젝트 내용내용프로젝트 내용내용
                            프로젝트 내용내용 프로젝트 내용내용
                            프로젝트 내용내용프로젝트 내용내용 프로젝트 내용내용
                            프로젝트 내용내용프로젝트 내용내용프로젝트 내용내용
                            프로젝트 내용내용 프로젝트 내용내용프로젝트 내용내용
                            프로젝트 내용내용 프로젝트 내용내용
                        </p>
                    </div>

                    <div className='p_left_c2'>
                        <div className='p_c_flex'>
                            <p>주요업무</p>
                            <p>마크업 / 레이아웃 디자인</p>
                        </div>
                        <div className='p_c_flex'>
                            <p>기술스택</p>
                            <p>Figma / Html / Css / Javascript / json</p>
                        </div>
                        <div className='p_c_flex'>
                            <p>Git hub</p>
                            <a href="#">Http://ddddddddddddddd.</a>
                        </div>
                        <div className='p_c_flex2'>
                            <p>Web</p>
                            <a href="#">Http://ddddddddddddddd.</a>
                        </div>
                    </div>
                </div>
                <a href='https://dragon1431.github.io/teamA_hit/' className='p_right' target="_blank" >
                    <div className='p_mockup'>
                        <p className='ipadW'><img src={ipadW} /></p>
                        <p className='ipadH'><img src={ipadH} /></p>
                    </div>
                    <div className='p_seoul'></div>
                </a>

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