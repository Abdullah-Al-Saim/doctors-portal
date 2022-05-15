import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment }) => {
    const { name, slots } = treatment;
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form className='grid grid-cols-1 gap-2 mt-4'>
                        <input type="text" value={format(date, 'PP')} class="input input-bordered input-secondary w-full max-w-full" />
                        <input type="text" placeholder="Type here" class="input input-bordered input-secondary w-full max-w-full" />
                        <input type="text" placeholder="Type here" class="input input-bordered input-secondary w-full max-w-full" />
                        <input type="text" placeholder="Type here" class="input input-bordered input-secondary w-full max-w-full" />
                        <input type="Submit" placeholder="Submit" class="btn btn-secondary w-full max-w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;