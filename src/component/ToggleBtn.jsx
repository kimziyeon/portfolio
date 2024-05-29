import { useState } from 'react';




function ToggleBtn({ setToggleIf }) {

    let [isOn, setIsOn] = useState(false);

    const toggleOn = () => {
        // console.log('click')

        setIsOn(!isOn)
        setToggleIf(isOn)
    }

    return (
        <>
            <div className='toggle' onClick={toggleOn}>
                <div className='toggleContainer' style={{ backgroundColor: isOn ? '#8b8b8b' : '#057FFE' }} />
                <div className={`toggleCircle ${isOn ? 'active' : ''}`} />
            </div>
        </>
    )
}

export default ToggleBtn;