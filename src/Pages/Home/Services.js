import React from 'react';
import Service from './Service';
import fluoried from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoried Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoried,
        },
        {
            _id: 2,
            name: 'Cavity Filling ',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity,
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening,
        },
    ]
    return (
        <div>
            <div className='text-center'>
                <h3 className='uppercase text-primary text-xl font-bold mt-32 text-[#19D3AE]'>Our Services</h3>
                <h2 className='text-4xl pb-20'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
