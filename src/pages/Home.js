import React, {
    Component
} from "react"
import img1 from '../images/hom1.jpeg';
import group_photo from '../images/group_photo.jpeg';
import img2 from '../images/home_i2.jpeg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default class Home extends Component {
    render(){
        return(
            <div>
                <div class="homepage">
                <div id="nl_tag"><h3>Building Leaders</h3><h1>NATIONS LADIES</h1><h3>London(UK) Chapter of The Links, Incorporated</h3></div>
                <div id="home">
                <div id="carousel">
                <Carousel showThumbs={false} 
                          showArrows={false} 
                          showIndicators={false} 
                          showStatus={false} 
                          stopOnHover={false}
                          autoPlay={true}
                          interval={10000}
                          transitionTime={700}
                          infiniteLoop={true}
                          dynamicHeight={true}
                          id="car">
                    <img alt="900x300" src={img1}/>
                    <img alt="900x300" src={group_photo}/>
                    <img alt="900x300" src={img2}/>
                    <img alt="900x300" src="https://www.tate.org.uk/art/images/work/T/T02/T02343_10.jpg"/>
                    <img alt="900x300" src="https://artsy-media-uploads.s3.amazonaws.com/9W-CnGwPPZ1tz5WU-gyd-g%2FPodcastTemplate.png"/>
                </Carousel>
                </div>
                </div>
            </div>
            <div id="below_carousel">
                <div id="left">
                <span class="home_title">Dorem Latum</span>
                    <div id="break"/>
                    <div id="middle_text">
                        Changing lives, one girl at a time. <br/><br/> 
                        Nations Ladies  supports girls from disadvantaged communities through mentoring and career skills development - preparing them to be future contributors and leaders of society.
                    </div>
                </div>
                <div id="middle">
                    <span class="home_title">Our Mission</span>
                    <div id="break"/>
                    <div id="middle_text">
                        Changing lives, one girl at a time. <br/><br/> 
                        Nations Ladies  supports girls from disadvantaged communities through mentoring and career skills development - preparing them to be future contributors and leaders of society.
                    </div>
                </div>
                <div id="right">
                <span class="home_title">Larem Ipsum</span>
                    <div id="break"/>
                    <div id="middle_text">
                        Changing lives, one girl at a time. <br/><br/> 
                        Nations Ladies  supports girls from disadvantaged communities through mentoring and career skills development - preparing them to be future contributors and leaders of society.
                    </div>
                </div>
                <div id="homebar"/>
            </div>
        </div>
        )
    }
}