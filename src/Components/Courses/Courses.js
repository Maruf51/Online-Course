import React from 'react';
import './Courses.css';

const Courses = (props) => {
    const data = props.courseObject;

    return (
        <div className="single-course">
            <img className="m-auto" src={data.img} alt=""/>
            <h4 className="text-center">{data.name}</h4>
            <small>by: {data.owner}</small>
            <h4 className="price">${data.price}</h4>
            <button onClick={() => props.btnClick(data.price)} className="btn btn-success">Enroll Now</button>
        </div>
    );
};

export default Courses;