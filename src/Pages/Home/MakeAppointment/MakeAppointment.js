import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-24'
        style={{
            background: `url(${appointment})`
        }}
        >
            <div className="hero">
              <div className="hero-content flex-col lg:flex-row">
                <img src={doctor} alt='doctor' className="-mt-36 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h4 className='text-lg font-bold text-primary'>Appointment</h4>
                    <h1 className="text-white text-4xl font-bold">Make an Apointment</h1>
                    <p className="text-white py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Appointment</PrimaryButton>
                </div>
              </div>
            </div>
        </section>
    );
};
export default MakeAppointment;