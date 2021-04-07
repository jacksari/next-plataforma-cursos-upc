import React from 'react';
import CourseItem from "./CourseItem";

function Courses() {
    return (
        <div className="container">
            <h3>Courses</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </p>
            <br/>
            <ul className="list-unstyled video-list-thumbs row">
                <CourseItem/>
                <CourseItem/>

            </ul>

        </div>
    );
}

export default Courses;
