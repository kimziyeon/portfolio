import { useState } from 'react';


function ToggleBtn({ setToggleIf }) {

    let [isOn, setIsOn] = useState(true);

    const toggleOn = () => {
        // console.log(isOn, 'click')

        setIsOn(!isOn)
        setToggleIf(isOn)
    }

    return (
        <>
            <div className='toggle' onClick={toggleOn}>
                <div className='toggleContainer' style={{ backgroundColor: isOn ? '#057FFE' : '#8b8b8b' }} />
                <div className={`toggleCircle ${isOn ? 'active' : ''}`} />
            </div>
        </>
    )
}

export default ToggleBtn;