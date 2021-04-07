import React from 'react';
import Link from "next/link";

function CourseItemHome() {
    return (
        <Link href="/cursos/dsf">
            <a>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="newsBox">
                        <div className="thumbnail">
                            <figure><img src="/img/news2.jpg" alt=""/></figure>
                            <div className="caption maxheight2">
                                <div className="box_inner">
                                    <div className="box">
                                        <p className="title">Developer</p>
                                        <p>Lorem ipsum dolor sit amet, conc tetu er adipi scing. Praesent ves tibuum
                                            molestie lacuiirhs. Aenean.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default CourseItemHome;
