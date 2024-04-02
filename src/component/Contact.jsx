import React, { useEffect, useRef, useState } from 'react';
import { useStore } from '../store';
import resume from '../img/resume.png';
import github from '../img/github.png';
import velog from '../img/velog.png';
import send from '../img/send.png';
import msgImg from '../img/chat.png';
import left from '../img/arrowLeftGrayDark.svg';




function Contact(props) {


    const { data, getData, status, postData, deleteData } = useStore();
    const elInput = useRef();


    const onSaveHandler = (e) => {
        e.preventDefault();
        const date = new Date();
        const nowDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        const value = elInput.current.value;
        const user = localStorage.user || 'client';
        const tamp = { num: Date.now(), id: user, msg: value, date: nowDate };

        if (value === "") return;
        postData(tamp);

        elInput.current.value = "";

        //scroll 하단위치
        setTimeout(() => {
            const elMsg = document.querySelector('.msg_list');
            elMsg.scrollTo(0, elMsg.scrollHeight)
        }, 200)

    }

    const delData = (obj) => {
        deleteData(obj.num)
    }

    useEffect(() => {
        getData();
    }, [])




    return (
        <>
            <article className='c_main'>

                <div className='c_left'>
                    <div className='msg_chat'>
                        <div><img src={left} alt="left" /></div>
                        <div className='msg_name'>ziyeon Kim</div>
                        <div className='msg_img'><img src={msgImg} alt="msgImg" /></div>
                    </div>
                    <div className='msg_list'>
                        {
                            data.map((obj, idx) => (
                                obj.id === 'admin' ?
                                    <p className='bubble gray' key={idx}>
                                        <span > {obj.msg} </span>
                                    </p>
                                    :
                                    <p className='bubble blue' key={idx}>
                                        <span> {obj.msg}<button onClick={() => delData(obj)}>X</button> </span>
                                    </p>
                            ))
                        }
                    </div>

                    <div className='msg_write'>
                        <div className='msg_btn'>
                            <a href="./resume_kimjiyeon.pdf" target="_blank">
                                <button><img src={resume} alt="github" /></button>
                            </a>
                            <a href="https://github.com/kimziyeon" target="_blank">
                                <button><img src={github} alt="github" /></button>
                            </a>
                            <a href="https://velog.io/@aa40254037" target="_blank">
                                <button><img src={velog} alt="velog" /></button>
                            </a>
                        </div>

                        <div className='msg_input'>
                            <form onSubmit={onSaveHandler}>
                                <input type='text' ref={elInput} placeholder="Message" />
                                <button><img src={send} alt="send" /></button>
                            </form>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
                <div className='c_right'>
                    <h3>Thank you for<br /> watching!</h3>

                    <div className='call'>
                        <p>+82 10-4025-4037</p>
                        <p>aa40254037@gmail.com</p>
                    </div>
                </div>
            </article>
            <div className='c_title_sub'>
                <span onClick={() => { localStorage.user = 'admin' }}>.</span>
                <p>Jiyeon portfolio &copy; 2024</p>
            </div>
        </>
    );
}

export default Contact;