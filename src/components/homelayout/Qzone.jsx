import React from 'react';
import swiming from '../../assets/swimming.png';
import classimg from '../../assets/class.png';
import playimg from '../../assets/playground.png';
import bgimg from '../../assets/bg.png';

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div className='space-y-5'>
                <img src={swiming} alt="" />
                <img src={classimg} alt="" />
                <img src={playimg} alt="" />
                <img src={bgimg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;