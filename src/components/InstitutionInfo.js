import React from "react";
import "./InstitutionInfo.css";
import CourseList from "./CourseList";

const InstitutionInfo = ({address,name,campus,courses,id}) => {

    return (
        <div className="institution-info institution-info_sticky" key={id}>
            <div className="institution-info__avatar" style={{backgroundImage: "url('https://lh5.googleusercontent.com/p/AF1QipMTgaMBLZJXSXayWyXFVK3J9nTlg9MDm4gYHT9g=w1080-k-no')" }}>
            </div>
            <div>{name}</div>
            <div>{campus}</div>
            <div>{address}</div>
            <div className="institution-info__courses">
            {
                <CourseList courses={courses}></CourseList>               
            }
            </div>            
            {/* <div className="institution-info__courses">

                {/* <span className="course">{course}</span><span className="course">{course}</span><span className="course">{course}</span><span className="course">{course}</span><span className="course">{course}</span> */}
            {/* </div>  */}
        </div>
    )
}

export default InstitutionInfo;