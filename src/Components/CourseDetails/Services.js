import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './Services.css'

const CourseDetails = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/ifaz5/fd/main/fd2.json
        `)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Banner />
            <div className="courses container">
                <h1>More Courses</h1>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        services.map((service) => (

                            <div class="col">
                                <div class="card-services ">
                                    <img className=" img" src={service.image} alt="" />
                                    <div class="card-body">
                                        <h4 >{service.name}</h4>
                                        <p class="card-text">{service.description}</p>
                                        <h4>${service.price}</h4>

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