import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_46kq33l', 'template_hs53xll', e.target, 'u4Pq7rUVeZokTmROG')
            .then(
                (result) => {
                    console.log(result.text);
                    setSuccess(true);
                    // Clear the form by resetting state
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                    });
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
    };

    return (
        <div className="container my-5">
            <h2 className='text-center mb-4 text-primary fw-bold'>Have any query? please submit the form</h2>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                rows="10"
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">
                            Submit
                        </button>
                        {success && (
                            <div className="alert alert-success mt-3">
                                Your message has been sent successfully!
                            </div>
                        )}
                    </form>
                </div>
                <div className="col-12 col-sm-6">
                    <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.33575603207814!2d90.44375562111425!3d23.69840271311258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9dbec0b272d%3A0xd8eb5c63dd318dbe!2sA.%20K.%20School%20and%20College!5e0!3m2!1sen!2sbd!4v1727012344049!5m2!1sen!2sbd"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactForm;
