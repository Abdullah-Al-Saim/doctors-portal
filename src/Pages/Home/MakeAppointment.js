import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-200px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='pb-5 text-xl font-medium text-[#19D3AE]'>Appointment</h3>
                <h2 className='pb-5 text-3xl text-white'>Make an appointment Today</h2>
                <p className='text-white pb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button>Get started</Button>
            </div>
        </section>
    );
};

export default MakeAppointment;