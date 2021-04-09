import React, { useContext } from 'react';
import CourseItem from "./CourseItem";
import pageContext from "../context/pages/pageContext";

function Courses() {
    const { courses } = useContext(pageContext);
    return (
        <div className="container">
            <h3>Cursos</h3>
            <p>Listado de cursos en las diversas categorías.</p>
            <br/>
            <ul className="list-unstyled video-list-thumbs row">
                {
                    courses.map((course, index) => (
                        <CourseItem course={course} key={index}/>
                    ))
                }
            </ul>

        </div>
    );
}

export default Courses;
