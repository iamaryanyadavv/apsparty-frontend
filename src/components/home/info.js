import React from "react";
import { Grid, Text, Image, Col } from "@nextui-org/react";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineNoiseAware } from "react-icons/md";
import { BsController } from "react-icons/bs";
import { GiThreeFriends } from "react-icons/gi";

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
                            width: '100%',
                            textAlign: 'center',
                            '@xsMin':{
                                fontSize: '$5xl',
                                padding: '80px',
                            },
                            '@xsMax':{
                                fontSize: '$3xl',
                                padding: '80px 0px'
                            },
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
                            borderColor: '$gray800',
                            margin: '10px'
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
                                <BsController color="#17C964" size={60} />
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                                    '@xsMin':{
                                        fontSize: '$3xl'
                                    },
                                    '@xsMax':{
                                        fontSize: '$xl'
                                    },
                                    padding: '20px 0px'
                                }}>
                                    Gaming
                                </Text>
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                                    '@xsMin':{
                                        fontSize: '$lg'
                                    },
                                    '@xsMax':{
                                        fontSize: '$sm'
                                    },
                                    color: '$gray900'
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
                            borderColor: '$gray800',
                            margin: '10px'
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
                                <MdOutlineNoiseAware color="#F5A524" size={60} />
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                                    '@xsMin':{
                                        fontSize: '$3xl'
                                    },
                                    '@xsMax':{
                                        fontSize: '$xl'
                                    },
                                    padding: '20px 0px'
                                }}>
                                    Culture
                                </Text>
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
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
                            borderColor: '$gray800',
                            margin: '10px'
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
                                <IoIosPeople color="#0072F5" size={60} />
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                                    '@xsMin':{
                                        fontSize: '$3xl'
                                    },
                                    '@xsMax':{
                                        fontSize: '$xl'
                                    },
                                    padding: '20px 0px'
                                }}>
                                    Community
                                </Text>
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
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
                            width: '100%',
                            textAlign: 'center',
                            '@xsMin':{
                                fontSize: '$5xl',
                                padding: '80px',
                            },
                            '@xsMax':{
                                fontSize: '$3xl',
                                padding: '80px 0px'
                            },
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
                            borderColor: '$gray800',
                            margin: '10px'
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
                                <GiThreeFriends color="#F31260" size={60} />
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                                    '@xsMin':{
                                        fontSize: '$3xl'
                                    },
                                    '@xsMax':{
                                        fontSize: '$xl'
                                    },
                                    padding: '20px 0px'
                                }}>
                                    Us
                                </Text>
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
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