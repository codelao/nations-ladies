import React, {
    Component
} from "react"
import styled from 'styled-components';
import img1 from '../images/hom1.jpeg';
import img2 from '../images/about_n.jpeg';
import img3 from '../images/home_i2.jpeg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default class Home extends Component {
    render(){
        return(
        <div class="home">
                <div id="carousel">
                <Carousel showThumbs={false} 
                          showArrows={false} 
                          showIndicators={false} 
                          showStatus={false} 
                          autoPlay={true}
                          swipeScrollTolerance={10}
                          infiniteLoop={true}
                          id="car">
                    <img alt="900x500" src={img1}/>
                    <img src="https://www.tate.org.uk/art/images/work/T/T02/T02343_10.jpg"/>
                    <img src="https://artsy-media-uploads.s3.amazonaws.com/9W-CnGwPPZ1tz5WU-gyd-g%2FPodcastTemplate.png"/>
                </Carousel>
                </div>
                <div id="middle"/>
                <div id="homebar"/>
                <div id="info">
                </div>
                <div id="bottombar">
                </div>
        </div>
        )
    }
}