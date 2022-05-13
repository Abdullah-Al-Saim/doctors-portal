import React, { useState } from 'react';
import Chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={Chair} class="max-w-sm rounded-lg shadow-2xl ml-32" alt='Dentist Chair' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>Your selected date: {format(date, 'PP')}.</p>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;