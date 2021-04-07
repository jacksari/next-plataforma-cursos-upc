import React from 'react';
import CourseItemHome from "./CourseItemHome";

function CoursesHome() {
    return (
        <section className="news-box top-margin">
            <div className="container">
                <h2><span>New Courses</span></h2>
                <div className="row">
                    <CourseItemHome/>
                    <CourseItemHome/>
                </div>
            </div>
        </section>
    );
}

export default CoursesHome;
