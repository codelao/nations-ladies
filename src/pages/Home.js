import React, {
    Component
} from "react"
import img1 from '../images/hom1.jpeg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default class Home extends Component {
    render(){
        return(
        <div id="home">
                <div id="nl_tag"><h3>Building Leaders</h3><h1>NATIONS LADIES</h1><h3>London(UK) Chapter of The Links, Incorporated</h3></div>
                <div id="carousel">
                <Carousel showThumbs={false} 
                          showArrows={false} 
                          showIndicators={false} 
                          showStatus={false} 
                          autoPlay={true}
                          interval={10000}
                          transitionTime={700}
                          infiniteLoop={true}
                          id="car">
                    <img alt="900x300" src={img1}/>
                    <img alt="900x300" src="https://www.tate.org.uk/art/images/work/T/T02/T02343_10.jpg"/>
                    <img alt="900x300" src="https://artsy-media-uploads.s3.amazonaws.com/9W-CnGwPPZ1tz5WU-gyd-g%2FPodcastTemplate.png"/>
                </Carousel>
                </div>
                <div id="left">
                    <h1 class="home_title">Our Mission</h1>
                </div>
                <div id="middle"/>
                <div id="homebar"/>
        </div>
        )
    }
}