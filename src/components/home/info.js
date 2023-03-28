import React from "react";
import { Grid, Text, Col } from "@nextui-org/react";
import { IoIosPeople } from "react-icons/io";
import { BsController } from "react-icons/bs";
import { GiThreeFriends } from "react-icons/gi";
import { FaYinYang } from "react-icons/fa";

export default function Info(){
    return(
        <div>
            <div className="info1-main">
                <div className="info1-bg">
                    <Grid.Container 
                    css={{
                        jc: 'center',
                    }}>
                        <Text
                        css={{
                            fontFamily: 'bruce-forever',
                            lineHeight: '2',
                            width: '100%',
                            textAlign: 'center',
                            '@xsMin':{
                                fontSize: '$5xl',
                                padding: '80px',
                            },
                            '@xsMax':{
                                fontSize: '$3xl',
                                padding: '80px 0px 40px 0px'
                            },
                            filter: 'drop-shadow(0px 0px 12px rgb(255, 255, 255))'
                        }}>
                            What We Do
                        </Text>

                        {/* Gaming */}
                        <Grid
                        css={{
                            '@xsMin':{
                                width: '400px'
                            },
                            '@xsMax':{
                                width: '300px'
                            },
                            padding: '20px',
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            borderRadius: '20px',
                            borderColor: 'rgb(0 255 110)',
                            margin: '36px',
                            boxShadow: '0px 0px 12px rgb(0 255 110)'
                        }}>
                            <Col
                            css={{
                                display: 'flex',
                                flexDirection: 'column',
                                jc:'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                padding: '15px'
                            }}>
                                <BsController className="svg-green" color="rgb(0 255 110)" size={60} />
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                            lineHeight: '2',
                                    '@xsMin':{
                                        fontSize: '$3xl'
                                    },
                                    '@xsMax':{
                                        fontSize: '$xl'
                                    },
                                    padding: '20px 0px',
                                    filter: 'drop-shadow(0px 0px 12px rgb(255, 255, 255))'
                                }}>
                                    Gaming
                                </Text>
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                            lineHeight: '2',
                                    '@xsMin':{
                                        fontSize: '$lg'
                                    },
                                    '@xsMax':{
                                        fontSize: '$sm'
                                    },
                                    color: '$gray900',
                                }}>
                                    A chance to showcase your gaming skills in not just one but multiple games across the board. Only the best of the best!
                                </Text>
                            </Col>
                        </Grid>

                        {/* Culture */}
                        <Grid
                        css={{
                            '@xsMin':{
                                width: '400px'
                            },
                            '@xsMax':{
                                width: '300px'
                            },
                            padding: '20px',
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            borderRadius: '20px',
                            borderColor: 'rgb(248, 251, 41)',
                            margin: '36px',
                            boxShadow: '0px 0px 12px rgb(248, 251, 41)'
                        }}>
                            <Col
                            css={{
                                display: 'flex',
                                flexDirection: 'column',
                                jc:'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                padding: '15px'
                            }}>
                                <FaYinYang className="svg-yellow" color="rgb(255 209 0)" size={50} />
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                            lineHeight: '2',
                                    '@xsMin':{
                                        fontSize: '$3xl'
                                    },
                                    '@xsMax':{
                                        fontSize: '$xl'
                                    },
                                    padding: '20px 0px',
                                    filter: 'drop-shadow(0px 0px 12px rgb(255, 255, 255))'
                                }}>
                                    Culture
                                </Text>
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                            lineHeight: '2',
                                    '@xsMin':{
                                        fontSize: '$lg'
                                    },
                                    '@xsMax':{
                                        fontSize: '$sm'
                                    },
                                    color: '$gray900'
                                }}>
                                    At Ashoka Playstation Party, we are true fans of the gaming culture and have made it our mission to spread awareness to those who misunderstand it.
                                </Text>
                            </Col>
                        </Grid>

                        {/* Community */}
                        <Grid
                        css={{
                            '@xsMin':{
                                width: '400px'
                            },
                            '@xsMax':{
                                width: '300px'
                            },
                            padding: '20px',
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            borderRadius: '20px',
                            borderColor: 'rgb(1 147 255)',
                            margin: '36px',
                            boxShadow: '0px 0px 12px rgb(1 147 255)'
                        }}>
                            <Col
                            css={{
                                display: 'flex',
                                flexDirection: 'column',
                                jc:'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                padding: '15px'
                            }}>
                                <IoIosPeople className="svg-blue" color="rgb(1 147 255)" size={60} />
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                            lineHeight: '2',
                                    '@xsMin':{
                                        fontSize: '$3xl'
                                    },
                                    '@xsMax':{
                                        fontSize: '$xl'
                                    },
                                    padding: '20px 0px',
                                    filter: 'drop-shadow(0px 0px 12px rgb(255, 255, 255))'
                                }}>
                                    Community
                                </Text>
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                            lineHeight: '2',
                                    '@xsMin':{
                                        fontSize: '$lg'
                                    },
                                    '@xsMax':{
                                        fontSize: '$sm'
                                    },
                                    color: '$gray900'
                                }}>
                                    At our tournaments people come together and celebrate the high and lows of e-sports against and with friends - all in an environment of healthy competition.
                                </Text>
                            </Col>
                        </Grid>

                    </Grid.Container>
                    <Grid.Container 
                    css={{
                        jc: 'center',
                    }}>
                        <Text
                        css={{
                            fontFamily: 'bruce-forever',
                            lineHeight: '2',
                            width: '100%',
                            textAlign: 'center',
                            '@xsMin':{
                                fontSize: '$5xl',
                                padding: '80px',
                            },
                            '@xsMax':{
                                fontSize: '$3xl',
                                padding: '80px 0px 40px 0px'
                            },
                            filter: 'drop-shadow(0px 0px 16px rgba(255, 255, 255, 1))'
                        }}>
                            Who We Are
                        </Text>

                        {/* About */}
                        <Grid
                        css={{
                            '@xsMin':{
                                width: '500px'
                            },
                            '@xsMax':{
                                width: '300px'
                            },
                            padding: '20px',
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            borderRadius: '20px',
                            borderColor: '#F31260',
                            margin: '36px',
                            boxShadow: '0px 0px 12px #F31260'
                        }}>
                            <Col
                            css={{
                                display: 'flex',
                                flexDirection: 'column',
                                jc:'center',
                                alignItems: 'center',
                                textAlign: 'center',
                                padding: '15px'
                            }}>
                                <GiThreeFriends className="svg-red" color="#F31260" size={60} />
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                            lineHeight: '2',
                                    '@xsMin':{
                                        fontSize: '$3xl'
                                    },
                                    '@xsMax':{
                                        fontSize: '$xl'
                                    },
                                    padding: '20px 0px',
                                    filter: 'drop-shadow(0px 0px 16px rgba(255, 255, 255, 1))'
                                }}>
                                    Us
                                </Text>
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                            lineHeight: '2',
                                    '@xsMin':{
                                        fontSize: '$lg'
                                    },
                                    '@xsMax':{
                                        fontSize: '$sm'
                                    },
                                    color: '$gray900'
                                }}>
                                    We are Ashoka's first and only e-sports organisation dedicated to giving each and every single gaming fan a chance to showcase and hone their skills, helping them earn rewards for doing what they love and providing a path into the gaming culture for whoever wants it.
                                </Text>
                            </Col>
                        </Grid>

                    </Grid.Container>
                </div>
            </div>

            {/* <div className="info2-main">
                <div className="info2-bg">
                </div>
            </div> */}

        </div>
    )
}