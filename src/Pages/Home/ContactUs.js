import React from 'react';
import appointment from '../../assets/images/appointment.png';
import Button from "../Shared/Button";

const ContactUs = () => {
    return (
        <div style={{ background: `url(${appointment})` }} className='px-10 py-14'>

            <div className='text-center pb-14 '>
                <p className='text-xl font-bold '>
                    <span className='text-[#19D3AE]'>Contact Us</span>
                </p>
                <h1 className='text-4xl text-white'>Stay connected with us</h1>
            </div>

            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text' placeholder='Email Address' className='input w-full max-w-md' />
                <input type='text' placeholder='Subject' className='input w-full max-w-md' />
                <textarea className='textarea w-full max-w-md' placeholder='Your message' rows={6} />
                <Button>Submit</Button>
            </div>
        </div>
    );
};

export default ContactUs;