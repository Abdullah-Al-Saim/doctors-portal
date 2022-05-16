import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 mt-4'>
                        <input type="text" readOnly value={format(date, 'PP')} className="input input-bordered input-secondary w-full max-w-full" />
                        <select name='slot' className="select input input-bordered input-secondary w-full max-w-full">
                            {
                                slots.map(slots => <option value={slots}>{slots}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered input-secondary w-full max-w-full" />
                        <input type="email" name='email' placeholder="Email Address" className="input input-bordered input-secondary w-full max-w-full" />
                        <input type="text" name='Phone' placeholder="Phone number" className="input input-bordered input-secondary w-full max-w-full" />
                        <input type="Submit" placeholder="Submit" className="btn btn-secondary w-full max-w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;