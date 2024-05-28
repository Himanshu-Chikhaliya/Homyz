import React from 'react';
import "swiper/css"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import './Recidencies.css'
import data from '../../utils/slider.json'
import { sliderSettings } from "../../utils/common";
// import PropertyCard from '../PropertyCard/PropertyCard';
// import useProperties from '../../hooks/useProperties';
// import { PuffLoader } from 'react-spinners';

function Recidencies(){

    // const {data, isError, isLoading} = useProperties()

    // if(isError){
    //     return(
    //         <div className="wrapper">
    //             <span>Error while fetching data</span>
    //         </div>
    //     )
    // }

    // if(isLoading){
    //     return(
    //         <div className="wrapper flexCenter" style={{height: "60vh"}}>
    //             <PuffLoader
    //                 height="80"
    //                 width="80"
    //                 radius="{1}"
    //                 color = "#4066ff"
    //                 arial-label = "puff-loading"
    //             />
    //         </div>
    //     )
    // }


    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className="orangeText">Best Choices</span>
                    <span className="primaryText">Popular Residencies</span>
                </div>

                <Swiper {...sliderSettings}>
                    <SliderButtons/>
                    {
                        
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                {/* <PropertyCard card={card}/> */}
                                <div className="flexColStart r-card">
                                    <img src={card.image} alt="home" />

                                    <span className="secondaryText r-price">
                                        <span style={{color: "orange"}}>$</span>
                                        <span>{card.price}</span>
                                    </span>

                                    <span className="primaryText">{card.name}</span>
                                    <span className="secondaryText">{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Recidencies;

const SliderButtons = () => {
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button>
            <button onClick={() => swiper.slideNext()}>&gt;</button>
        </div>
    );
};