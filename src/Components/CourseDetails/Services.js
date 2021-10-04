import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';


const CourseDetails = () => {
    const [courses, setCourse] = useState([])
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/ifaz5/fd/main/fd2.json
        `)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div>
            <Banner />
            <div className="courses container">
                <h1>More Courses</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        courses.map((course) => (

                            <div class="col">
                                <div class="card-services ">
                                    <img className=" img" src={course.image} alt="" />
                                    <div class="card-body">
                                        <h4 >{course.name}</h4>
                                        <p class="card-text">{course.description}</p>
                                        <h4>${course.price}</h4>

                                    </div>
                                </div>
                            </div>


                        ))

                    }

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CourseDetails;