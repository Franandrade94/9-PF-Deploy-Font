import "./reviewcardcontainer.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Redux/actions/index";
import ReviewCard from "./ReviewCard/ReviewCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ReviewCardContainer extends Component {

    componentDidMount() {
        this.props.getAllReviews();
    }

    render(){
        let reviews=[]
        reviews = this.props.reviews
         
        console.log(reviews, '1 ReVIEWS')
        
        const reviews2 = reviews?.filter((r) => r?.comment?.length > 1)
    
        console.log(reviews2, 'REVIEWs')
    
        // Configuración del slider
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        };
    
        return(
            <div className="ReviewCard-Container">
                <h1>Clientes Felices</h1>
                <div className="ReviewCard-Home">
                    {/* Utilice el componente Slider de react-slick */}
                    <Slider {...settings}>
                        {reviews2?.map((review) => {
                            return <div key={review.id}>
                                <ReviewCard
                                    id={review.id}
                                    name={review.name}
                                    productname={review.productname}
                                    comment={review.comment} 
                                />
                            </div>
                        })}
                    </Slider>
                </div>
            </div>
        )
    }
    
};

export const mapStateToProps = (state) => {
    return {
        reviews: state.reviews
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        getAllReviews: () => dispatch(actions.getAllReviews()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewCardContainer);
