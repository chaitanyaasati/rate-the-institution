import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CourseList.css';

const CourseList = ({courses}) => {
    return (
        <div className='courselist'>
        {
            courses.map(course => {
                return  <div key={uuidv4()} className="courselist__course">{course}</div>
            })              
        }
        </div>
    )
}

export default CourseList;
