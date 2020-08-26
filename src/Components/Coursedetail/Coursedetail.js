import React, { useState } from 'react';
import Courses from '../Courses/Courses';
import fakeData from '../../Fakedata/Fakedata';
import Cart from '../Cart/Cart';
import './Coursedetail.css'

const Coursedetail = () => {
    const courseData = fakeData;

    const [price, setPrice] = useState([]);
    const btnClick = (Price) => {const newPrice = [...price, Price]; setPrice(newPrice)}

    return (
        <div className="courseDetailArea">
            <div className="courseSection d-flex flex-wrap justify-content-center">
                {
                    courseData.map((course) => <Courses key={course.key} btnClick={btnClick} courseObject={course}></Courses>)
                }
            </div>
            <div className="cartSection">
                <Cart orderedCourseValue={price}></Cart>
            </div>
        </div>
    );
};

export default Coursedetail;