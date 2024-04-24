import React from 'react';
import { Link } from 'react-router-dom';
import itsme from '../img/aa.gif';
import scroll from '../scrolldown.svg';

function Home({ menuclick, menuRef }) {

    return (
        <>
            <article className='h_main'>
                <div className='h_left'>
                    <p className='title'>
                        WEB -<br />
                        DEVELOPER

                    </p>
                    <p className='title_sub'>
                        <span>Jiyeon portfolio &copy; 2024</span>
                    </p>
                </div>

                <div className='h_right'>

                    <div className='bubble1'>
                        <div className='bubble_txt'>
                            <h3>Hello !</h3>
                            {/* <h3>I have a diverse range of code</h3> */}
                        </div>
                    </div>
                    <div className='bubble2'>
                        <div className='bubble_txt'>
                            <h3>I’m &lt; &emsp;&emsp;&emsp; &#47; &gt;</h3>
                        </div>
                    </div>

                    <div className='mimoticon'>
                        <img src={itsme} />
                    </div>
                </div>
            </article>

            {/* <p className='scroll' onClick={() => menuclick(menuRef.current[1])}>
                <Link> <img src={scroll} alt="scroll down" /></Link>
            </p> */}
        </>
    );
}

export default Home;