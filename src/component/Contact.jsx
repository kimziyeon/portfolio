import React, { useEffect, useRef, useState } from 'react';
import { useStore } from '../store';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import resume from '../img/resume.png';
import github from '../img/github.png';
import velog from '../img/velog.png';
import send from '../img/send.png';



function Contact(props) {


    const [alter, setAlter] = useState('');
    const { data, getData, status, postData, deleteData, putData } = useStore();

    const elInput = useRef();

    const onSaveHandler = () => {
        if (elInput.current.value === "") return;

        let params = null;
        if (alter.id != '' && alter.id != undefined) {
            params = { id: alter.id, name: elInput.current.value }
            putData(params)
        }
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_eb3e5m1', 'template_5zk5oph', form.current, 'Xs4rVPKl_SRLqTshc',)
            .then(
                () => {
                    console.log("성공");
                    alert("성공적으로 이메일이 전송되었습니다.");
                }, (error) => {
                    console.log('실패', error.text);
                    alert("이메일이 전송이 실패되었습니다.");
                },
            );
    };


    return (
        <>
            <article className='c_main'>

                <div className='c_left'>

                    <div className='msg_list'>
                        <p className='bubble gray'>
                            <span > 그레이그레이 </span>
                        </p>

                        <p className='bubble blue'>
                            <span> 블루블루블루블루블루 </span>
                            <button>x</button>
                        </p>
                    </div>

                    <div className='msg_write'>
                        <div className='msg_btn'>
                            <button><img src={resume} alt="github" /></button>
                            <button><img src={github} alt="github" /></button>
                            <button><img src={velog} alt="velog" /></button>
                        </div>

                        <div className='msg_input'>
                            <input type='text' ref={elInput} placeholder="Message" />
                            <button onClick={() => { onSaveHandler() }} ><img src={send} alt="send" /></button>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>
                <div className='c_right'>
                    <h3>Thank you for<br /> watching!</h3>

                    <div className='please'>
                        <p>please feel free to reach out :&#41;</p>
                        <p>+82 10-4025-4037</p>
                        <p>aa40254037@gmail.com</p>
                        <b></b>
                    </div>

                    {/* //Email */}

                    {/* <form ref={form} onSubmit={sendEmail}>
                        <div className='input_box'>
                            <label htmlFor="">YOUR NAME</label>
                            <input type="text" id="name" name='user_name' placeholder="Jiyeon kim" />
                        </div>

                        <div className='input_box'>
                            <label htmlFor="">YOUR EMAIL</label>
                            <input type="email" id="email" name='user_email' placeholder="Jiyeon@kim.com" />
                        </div>

                        <div className='input_box'>
                            <label htmlFor="">YOUR MESSAGE</label>
                            <textarea type="text" id="message" name='message' cols="30" rows="3" />
                        </div>

                        <input className='send' type="submit" name="send" value="SEND MESSAGE" />
                    </form> */}


                </div>
            </article>
            <p className='c_title_sub'>
                <span>Jiyeon portfolio &copy; 2024</span>
            </p>
        </>
    );
}

export default Contact;