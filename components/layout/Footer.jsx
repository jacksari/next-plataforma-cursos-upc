import React from 'react';

function Footer() {
    return (
        <footer id="footer">

            <div className="container">
                <div className="row">
                    <div className="footerbottom">
                        <div className="col-md-3 col-sm-6">
                            <div className="footerwidget">
                                <h4>
                                    Course Categories
                                </h4>
                                <div className="menu-course">
                                    <ul className="menu">
                                        <li><a href="#">
                                            List of Technology
                                        </a>
                                        </li>
                                        <li><a href="#">
                                            List of Business
                                        </a>
                                        </li>
                                        <li><a href="#">
                                            List of Photography
                                        </a>
                                        </li>
                                        <li><a href="#">
                                            List of Language
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footerwidget">
                                <h4>
                                    Products Categories
                                </h4>
                                <div className="menu-course">
                                    <ul className="menu">
                                        <li><a href="#">
                                            Individual Plans </a>
                                        </li>
                                        <li><a href="#">
                                            Business Plans
                                        </a>
                                        </li>
                                        <li><a href="#">
                                            Free Trial
                                        </a>
                                        </li>
                                        <li><a href="#">
                                            Academic
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footerwidget">
                                <h4>
                                    Browse by Categories
                                </h4>
                                <div className="menu-course">
                                    <ul className="menu">
                                        <li><a href="#">
                                            All Courses
                                        </a>
                                        </li>
                                        <li><a href="#">
                                            All Instructors
                                        </a>
                                        </li>
                                        <li><a href="#">
                                            All Members
                                        </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                All Groups
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footerwidget">
                                <h4>Contact</h4>
                                <p>Lorem reksi this dummy text unde omnis iste natus error sit volupum</p>
                                <div className="contact-info">
                                    <i className="fa fa-map-marker"></i> Kerniles 416 - United Kingdom<br/>
                                    <i className="fa fa-phone"></i>+00 123 156 711 <br/>
                                    <i className="fa fa-envelope-o"></i> youremail@email.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social text-center">
                    <a href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-dribbble"></i></a>
                    <a href="#"><i className="fab fa-flickr"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                </div>

                <div className="clear"></div>
            </div>
            <div className="footer2">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 panel">
                            <div className="panel-body">
                                <p className="simplenav">
                                    <a href="index.html">Home</a> |
                                    <a href="about.html">About</a> |
                                    <a href="courses.html">Courses</a> |
                                    <a href="price.html">Price</a> |
                                    <a href="videos.html">Videos</a> |
                                    <a href="contact.html">Contact</a>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 panel">
                            <div className="panel-body">
                                <p className="text-right">
                                    Copyright &copy; 2019. <a href="https://webthemez.com/tag/free" target="_blank">Free
                                    Website Templates</a> by WebThemez.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
