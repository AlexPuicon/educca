import React from 'react';

interface Prop {
    img: string;
    title: string;
    description: string;
}

const CardS3: React.FC<Prop> = ({ img, title, description }) => {
    return (
        <div className='bg-green-300'>
            <img src={img} className='h-400' alt="" />
            <h4 className='font-bold text-lg text-700'>{title}</h4>
            <p className='text-green-700'>{description}</p>
        </div>
    );
};

export default CardS3;