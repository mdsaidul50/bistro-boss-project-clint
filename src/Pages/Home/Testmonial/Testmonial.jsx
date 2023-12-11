import Section from "../../../Component/section/Section";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testmonial = () => {

    const [reviews, setreviews] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setreviews(data)

            )
    }, [])

    return (
        <div>
            <Section subheading="What Our Clients Say" heading="TESTIMONIALS">
            </Section>

            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="mx-24 flex flex-col items-center space-y-5">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review
                                    .rating}
                                    readOnly
                                />
                                <p>{review.details}</p>
                                <p>{review.name}</p>
                            </div>

                        </SwiperSlide>)
                    }
                </Swiper>

            </div>
        </div>
    );
};

export default Testmonial;