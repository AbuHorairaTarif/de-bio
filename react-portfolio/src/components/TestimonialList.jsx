import React, { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import testimonialsData from '../../public/data/testimonial.json';

import './TestimonialCard.css';

const TestimonialList = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        setTestimonials(testimonialsData);
    }, []);

    return (
        <section className='testimonials'>
            <div className="container my-5">
                <h2 className="text-center mb-4 text-primary fw-bold">What Clients Say</h2>

                <div className="row testimonials-row">
                    {testimonials.map((testimonial) => (
                        <div className='col-12 col-md-4' key={testimonial.id}>

                            <TestimonialCard
                                name={testimonial.name}
                                role={testimonial.role}
                                testimonial={testimonial.testimonial}
                                image={testimonial.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialList;
