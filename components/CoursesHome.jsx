import React, { useContext } from 'react';
import CourseItemHome from "./CourseItemHome";
import pageContext from "../context/pages/pageContext";

function CoursesHome() {
    const { courses } = useContext(pageContext)
    //console.log(courses)
    return (
        <section className="news-box top-margin">
            <div className="container">
                <h2><span>New Courses</span></h2>
                <div className="row">
                    {
                        courses.length > 0 ? (
                            courses.map((course, index) => (
                                <CourseItemHome key={index} course={course}/>
                            ))
                        ) : null
                    }

                </div>
            </div>
        </section>
    );
}

export default CoursesHome;
