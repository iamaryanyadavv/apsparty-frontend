import React from "react";
import { Grid, Text, Col, Image, Row } from "@nextui-org/react";
import Grey from '../assets/images/Grey.jpeg';
import Diamond from '../assets/images/diamond.png';
import Format from '../assets/images/tournament.png'
import Cash from '../assets/images/money.png'
import GoldMedal from '../assets/images/gold-medal.png'
import SilverMedal from '../assets/images/silver-medal.png'
import Rules from '../assets/images/regulation.png'
import Schedule from '../assets/images/schedule.png'

export default function CODTourneyPage(){

    return(
    <div>
        {/* Page Heading */}
        <Grid.Container 
        css={{
            jc: 'center',
            textAlign: 'center',
        }}>
            <Col>
                <Text
                css={{
                    fontFamily: 'bruce-forever',
                    '@xsMin':{
                        fontSize: '$5xl',
                        color: 'White',
                        paddingTop: '60px'
                    },
                    '@xsMax':{
                        fontSize: '$2xl',
                        paddingTop: '40px',
                        color: 'White',
                    },
                }}>
                    COD: BO3 🔪
                </Text>
                <Text
                css={{
                    fontFamily: 'bruce-forever',
                    '@xsMin':{
                        fontSize: '$4xl',
                        color: 'White',
                        paddingTop: '0px'
                    },
                    '@xsMax':{
                        fontSize: '$xl',
                        padding: '10px 20px 0px 20px',
                        color: 'White',
                    },
                    textGradient: '45deg, #388EE9 20%, #09EBEE 100%'
                }}>
                    Open-To-All Tournament
                </Text>
                <Text
                css={{
                    fontFamily: 'bruce-forever',
                    '@xsMin':{
                        fontSize: '$xl',
                        color: '$gray700',
                        padding: '10px 200px 40px 200px',
                    },
                    '@xsMax':{
                        fontSize: '$sm',
                        padding: '20px 60px',
                        color: '$gray700',
                    }
                }}>
                    From features latest upcoming tournament to details of all previous tournaments, you can find all of it here. Participate and earn massive rewards!
                </Text>
            </Col>
            
        </Grid.Container>

        {/* Latest Tournament */}
        <Grid.Container 
            css={{
                jc: 'center',
                textAlign: 'center',
                margin: '30px 0px 30px 0px',
                backgroundColor: 'rgb(20,20,20)',
                borderRadius: '20px'
            }}>
                <Grid>

                    {/* Heading */}
                    <Grid.Container
                    css={{
                        jc: 'center',
                        textAlign: 'center'
                    }}>
                        <Text
                        css={{
                            fontFamily: 'bruce-forever',
                            '@xsMin':{
                                fontSize: '$3xl',
                                color: 'White',
                                paddingTop: '40px'
                            },
                            '@xsMax':{
                                fontSize: '$lg',
                                paddingTop: '40px',
                                color: 'White',
                            }
                        }}>
                            Upcoming Tournament
                        </Text>
                    </Grid.Container>

                    {/* Content */}
                    <Grid.Container
                    css={{
                        jc: 'center',
                        alignItems: 'center',
                    }}>
                        {/* Poster */}
                        <Grid
                        css={{
                            margin: '40px 10px',
                            jc: 'center'
                        }}>
                            <Image
                            css={{
                                '@xsMin':{
                                    width:'500px',
                                    height: '750px',
                                },
                                '@xsMax':{
                                    width:'200px',
                                    height: '300px',
                                },
                                borderRadius: '20px',
                                objectFit: 'cover'
                            }} src={Grey}  />
                        </Grid>
                        
                        {/* Details */}
                        <Grid 
                        css={{
                            margin: '40px 10px',
                            jc: 'center',
                            '@xsMin':{
                                width: '800px'
                            },
                        }}>
                            <Col
                            css={{
                                textAlign: 'left'
                            }}>
                                {/* Name */}
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                                    '@xsMin':{
                                        fontSize: '$3xl',
                                        color: 'White',
                                        paddingTop: '40px'
                                    },
                                    '@xsMax':{
                                        fontSize: '$lg',
                                        paddingTop: '40px',
                                        color: 'White',
                                    },
                                    textGradient: '45deg, #388EE9 20%, #09EBEE 100%',
                                    paddingLeft: '40px'
                                }}>
                                    COD OPEN 1.0
                                </Text>
                                <Row>
                                    <img src={Diamond} width={30} height={30} style={{alignItems: 'center', margin: '10px 10px 0px 0px'}}/>
                                    <Text 
                                    css={{
                                        fontFamily: 'bruce-forever',
                                        '@xsMin':{
                                            fontSize: '$lg',
                                            color: 'White',
                                            paddingTop: '10px'
                                        },
                                        '@xsMax':{
                                            fontSize: '$xs',
                                            paddingTop: '10px',
                                            color: 'White',
                                        },
                                    }}>
                                        First edition of the COD Open-To-All Tournaments.
                                    </Text>
                                </Row>

                                {/* Time and Loc */}
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                                    '@xsMin':{
                                        fontSize: '$3xl',
                                        color: 'White',
                                        paddingTop: '40px'
                                    },
                                    '@xsMax':{
                                        fontSize: '$lg',
                                        paddingTop: '40px',
                                        color: 'White',
                                    },
                                    textGradient: '45deg, #388EE9 20%, #09EBEE 100%',
                                    paddingLeft: '40px'
                                }}>
                                    Time & Place
                                </Text>
                                <Row>
                                    <img src={Schedule} width={30} height={30} style={{alignItems: 'center', margin: '10px 10px 0px 0px'}}/>
                                    <Text 
                                    css={{
                                        fontFamily: 'bruce-forever',
                                        '@xsMin':{
                                            fontSize: '$lg',
                                            color: 'White',
                                            paddingTop: '10px'
                                        },
                                        '@xsMax':{
                                            fontSize: '$xs',
                                            paddingTop: '10px',
                                            color: 'White',
                                        },
                                    }}>
                                        9 PM - 12 AM. 3rd to 6th April, 2023. RH3 Common Room.
                                    </Text>
                                </Row>
                                
                                {/* Format */}
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                                    '@xsMin':{
                                        fontSize: '$3xl',
                                        color: 'White',
                                        paddingTop: '40px'
                                    },
                                    '@xsMax':{
                                        fontSize: '$lg',
                                        paddingTop: '40px',
                                        color: 'White',
                                    },
                                    textGradient: '45deg, #388EE9 20%, #09EBEE 100%',
                                    paddingLeft: '40px'
                                }}>
                                    Format
                                </Text>
                                <Row>
                                    <img src={Format} width={30} height={30} style={{alignItems: 'center', margin: '10px 10px 0px 0px'}}/>
                                    <Text 
                                    css={{
                                        fontFamily: 'bruce-forever',
                                        '@xsMin':{
                                            fontSize: '$lg',
                                            color: 'White',
                                            paddingTop: '10px'
                                        },
                                        '@xsMax':{
                                            fontSize: '$xs',
                                            paddingTop: '10px',
                                            color: 'White',
                                        },
                                    }}>
                                        2v2. PS4. 64 team bracket. Straight knockouts. Let's go.
                                    </Text>
                                </Row>

                                {/* Prizes */}
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                                    '@xsMin':{
                                        fontSize: '$3xl',
                                        color: 'White',
                                        paddingTop: '40px',
                                    },
                                    '@xsMax':{
                                        fontSize: '$lg',
                                        paddingTop: '40px',
                                        color: 'White',
                                    },
                                    textGradient: '45deg, #388EE9 20%, #09EBEE 100%',
                                    paddingLeft: '40px'
                                }}>
                                    Prizes
                                </Text>
                                <Col
                                css={{
                                    marginBottom: '30px'
                                }}>
                                    <Row>
                                        <img src={Cash} width={30} height={30} style={{alignItems: 'center', margin: '10px 10px 0px 0px'}}/>
                                        <Text 
                                        css={{
                                            fontFamily: 'bruce-forever',
                                            '@xsMin':{
                                                fontSize: '$lg',
                                                color: 'White',
                                                paddingTop: '10px'
                                            },
                                            '@xsMax':{
                                                fontSize: '$xs',
                                                paddingTop: '10px',
                                                color: 'White',
                                            },
                                        }}>
                                            Total prize pool - 10,000.
                                        </Text>  
                                    </Row>
                                    <Row>
                                        <img src={GoldMedal} width={30} height={30} style={{alignItems: 'center', margin: '10px 10px 0px 0px'}}/>
                                        <Text 
                                        css={{
                                            fontFamily: 'bruce-forever',
                                            '@xsMin':{
                                                fontSize: '$lg',
                                                color: 'White',
                                                paddingTop: '10px'
                                            },
                                            '@xsMax':{
                                                fontSize: '$xs',
                                                paddingTop: '10px',
                                                color: 'White',
                                            },
                                        }}>
                                            Winners - 5k
                                        </Text>
                                    </Row>
                                    <Row>
                                        <img src={SilverMedal} width={30} height={30} style={{alignItems: 'center', margin: '10px 10px 0px 0px'}}/>
                                        <Text 
                                        css={{
                                            fontFamily: 'bruce-forever',
                                            '@xsMin':{
                                                fontSize: '$lg',
                                                color: 'White',
                                                paddingTop: '10px'
                                            },
                                            '@xsMax':{
                                                fontSize: '$xs',
                                                paddingTop: '10px',
                                                color: 'White',
                                            },
                                        }}>
                                            Runners Up - 3k
                                        </Text>
                                    </Row>
                                </Col>

                                {/* Rules */}
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                                    '@xsMin':{
                                        fontSize: '$3xl',
                                        color: 'White',
                                        paddingTop: '40px'
                                    },
                                    '@xsMax':{
                                        fontSize: '$lg',
                                        paddingTop: '40px',
                                        color: 'White',
                                    },
                                    textGradient: '45deg, #388EE9 20%, #09EBEE 100%',
                                    paddingLeft: '40px'
                                }}>
                                    Rules
                                </Text>
                                <Row>
                                    <img src={Rules} width={30} height={30} style={{alignItems: 'center', margin: '10px 10px 0px 0px'}}/>
                                    <Text 
                                    css={{
                                        fontFamily: 'bruce-forever',
                                        '@xsMin':{
                                            fontSize: '$lg',
                                            color: 'White',
                                            paddingTop: '10px'
                                        },
                                        '@xsMax':{
                                            fontSize: '$xs',
                                            paddingTop: '10px',
                                            color: 'White',
                                        },
                                    }}>
                                        Routine TDM (Team Deathmatch), nothing fancy. Winner goes through to next knockout round. Any kind of cheating or usage of unfair means will have the duo banned from all APP Tournaments.
                                    </Text>
                                </Row>
                            </Col>
                        </Grid>

                    </Grid.Container>

                    {/* Form */}
                    

                </Grid>
            </Grid.Container>
    </div>
    )
}