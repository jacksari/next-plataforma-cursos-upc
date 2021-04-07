import React from 'react';

function ContactoForm() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h3 className="section-title">Your Message</h3>
                    <p>
                        Lorem Ipsum is inting and typesetting in simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the is dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <form className="form-light mt-20" role="form">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Your name"/>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="Email address"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" placeholder="Phone number"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Subject</label>
                            <input type="text" className="form-control" placeholder="Subject"/>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-control" id="message" placeholder="Write you message here..."/>
                        </div>
                        <button type="submit" className="btn btn-two">Send message</button>
                        <p><br/></p>
                    </form>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="section-title">Office Address</h3>
                            <div className="contact-info">
                                <h5>Address</h5>
                                <p>5th Street, Carl View - United States</p>

                                <h5>Email</h5>
                                <p>info@webthemez.com</p>

                                <h5>Phone</h5>
                                <p>+09 123 1234 123</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactoForm;
