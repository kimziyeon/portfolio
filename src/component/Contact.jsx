import React, { useEffect, useRef, useState } from 'react';
import { useStore } from '../store';
import notion from '../img/profile.png';
import github from '../img/github.png';
import velog from '../img/velog.png';
import send from '../img/send.png';
import msgImg from '../img/chat.png';
import left from '../img/arrowLeftGrayDark.svg';
import { motion } from 'framer-motion';


function Contact({ mouseHandle, bigCircle, smallCircle }) {


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
            <article className='c_main' onMouseMove={mouseHandle}>

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
                                        <span> {obj.msg}</span>
                                    </p>

                                // 삭제버튼
                                //     <p className='bubble blue' key={idx}>
                                //     <span> {obj.msg}<button onClick={() => delData(obj)}>X</button> </span>
                                //     </p>


                            ))
                        }
                    </div>

                    <div className='msg_write' onMouseOver={bigCircle} onMouseLeave={smallCircle}>
                        <div className='msg_btn' >

                            <a href="https://github.com/kimziyeon" target="_blank">
                                <button><img src={github} alt="github" /></button>
                            </a>

                            <a href="https://joyous-friction-254.notion.site/profile-6c2ff30e5d6a4eaeb50169633e8783f0?pvs=4" target="_blank">
                                <button><img src={notion} alt="notion" /></button>
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
        </motion.div>
    );
}

export default Contact;