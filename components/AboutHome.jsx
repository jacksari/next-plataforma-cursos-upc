import React from 'react';
import Link from "next/link";

function AboutHome() {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="title-box clearfix "><h2 className="title-box_primary">Sobre nosotros</h2></div>
                    <p><span>Perspiciatis unde omnis iste natus error sit voluptatem. Cum sociis natoque penatibus et magnis dis parturient montes ascetur ridiculus musull dui.</span>
                    </p>
                    <p>Lorem ipsumulum aenean noummy endrerit mauris. Cum sociis natoque penatibus et magnis dis
                        parturient montes ascetur ridiculus mus. Null dui. Fusce feugiat malesuada odio.</p><p>Lorem
                    ipsumulum aenean noummy endrerit mauris. Cum sociis natoque penatibus et magnis dis parturient
                    montes ascetur ridiculus mus. Null dui. Fusce feugiat malesuada odio.</p>
                    <Link href="/nosotros">
                        <a title="read more" className="btn-inline " target="_self">Leer más</a>
                    </Link>
                </div>


                <div className="col-md-4">
                    <div className="title-box clearfix "><h2 className="title-box_primary">Up Coming Courses</h2></div>
                    <div className="list styled custom-list">
                        <ul>
                            <li><a title="Snatoque penatibus et magnis dis partu rient montes ascetur ridiculus mus."
                                   href="#">Mathematics and Computer Science</a></li>
                            <li><a title="Fusce feugiat malesuada odio. Morbi nunc odio gravida at cursus nec luctus."
                                   href="#">Mathematics and Philosophy</a></li>
                            <li><a title="Penatibus et magnis dis parturient montes ascetur ridiculus mus." href="#">Philosophy
                                and Modern Languages</a></li>
                            <li><a
                                title="Morbi nunc odio gravida at cursus nec luctus a lorem. Maecenas tristique orci."
                                href="#">History (Ancient and Modern)</a></li>
                            <li><a title="Snatoque penatibus et magnis dis partu rient montes ascetur ridiculus mus."
                                   href="#">Classical Archaeology and Ancient History</a></li>
                            <li><a title="Fusce feugiat malesuada odio. Morbi nunc odio gravida at cursus nec luctus."
                                   href="#">Physics and Philosophy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutHome;
