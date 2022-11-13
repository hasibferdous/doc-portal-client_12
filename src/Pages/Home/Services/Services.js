import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import cavity from '../../../assets/images/cavity.png'
import Service from './Service';
const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluoride treatment',
            description: 'Lorem LoremLoremLoLoremLoremLorem',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem LoremoreemLoremLoremLorem',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'LoremoremLoremLoremLoremLoremLorem',
            img: whitening
        },
    ]
    return (
        <div className='mt-16 mb-11'>
            <div className='text-center'>
                <h3 className='text-xl text-primary uppercase'>Our Services</h3>
                <h2 className='text-xl'>Services We Provide</h2>
            </div>
            <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        serviceData.map(service => <Service
                            key={service.id}
                            service={service}
                            ></Service>)
                    }
            </div>
        </div>
    );
};
export default Services;