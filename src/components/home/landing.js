import React from "react";
import './home.css'
import LandingVideo from '../../assets/images/LandingVideo.mp4'
import LandingPoster from '../../assets/images/LandingPoster.jpg'
import NewsTicker from "../home/marquee";
import { Col, Text } from "@nextui-org/react";

export default function Landing(){
    return(
        <div>
            <div className="landing-main">
                <video src={LandingVideo} autoPlay loop muted poster={LandingPoster}/>
                <div className="text">
                    <Col>
                        <Text
                        css={{
                            fontFamily: 'bruce-forever',
                                lineHeight: '2',
                            '@xsMin':{
                                fontSize: '$5xl',
                                color: 'white'
                            },
                            '@xsMax':{
                                fontSize: '$3xl',
                                color: 'White',
                                padding: '0px 30px'
                            }
                        }}>
                            Welcome To The Party
                        </Text>

                        <Text
                        css={{
                            fontFamily: 'bruce-forever',
                                lineHeight: '2',
                            '@xsMin':{
                                fontSize: '$md',
                                color: 'white'
                            },
                            '@xsMax':{
                                fontSize: '$sm',
                                color: 'White',
                                padding: '10px 40px 0px 40px',
                            }
                        }}>
                            Ashoka Playstation Party's Official Hub
                        </Text>
                    </Col>
                </div>
            </div>
        </div>
    )
}