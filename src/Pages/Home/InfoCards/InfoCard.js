import React from 'react';
const InfoCard = ({card}) => {
    const { name, description, icon, bgClass} = card;
    return (
        <div>
            <div class={`card text-white p-6 md:card-side shadow-xl ${bgClass}`}>
                <figure>
                    <img src={icon} alt="Movie"/>
                </figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
            </div>
            </div>
        </div>
    );
};
export default InfoCard;