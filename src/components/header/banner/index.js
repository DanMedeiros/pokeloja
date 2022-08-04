import Slider from "react-slick";

import Img1 from "../../../assest/img/banner01.jpg";
import Img2 from "../../../assest/img/banner02.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";

  function FullBanner(){
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 7000,
        cssEase: "linear",
      };

      return(
        <Slider {...settings}>
                <div className="pk-header-fullBanner__img">
                    <img src={Img1} alt="pokeloja" />
                </div>
                <div className="pk-header-fullBanner__img">
                    <img src={Img2} alt="pokeloja" />
                </div>
        </Slider>
      )
  }

  export default FullBanner;