import React from "react";
import './home.css'
import LandingVideo from '../../assets/images/LandingVideo3.mp4'
import { Col, Text } from "@nextui-org/react";

export default function Landing(){
    return(
        <div className="landing-main">
            <div className="landing-overlay"></div>
            <video src={LandingVideo} autoPlay loop muted />
            <div className="text">
                <Col>
                    <Text
                    css={{
                        fontFamily: 'bruce-forever',
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
    )
}