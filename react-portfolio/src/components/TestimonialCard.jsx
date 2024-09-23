import React from 'react';

const TestimonialCard = ({ name, role, testimonial, image }) => {
    return (


        <div className="testimonial">
            <div className='testimonial-img'>
                <img src={image} alt={name} className='object-fit-cover' />
            </div>

            <div className="testimonial-name">{name}</div>
            <div className="testimonial-rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>

            <p>
                {testimonial}
            </p>
            <p>{role}</p>
        </div>

    );
};

export default TestimonialCard;
