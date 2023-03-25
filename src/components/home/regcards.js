import React from "react";
import { Grid, Text, Col, Card, Button } from "@nextui-org/react";
import FIFA from '../../assets/images/cardspictures/FIFA23.jpg'
import COD from '../../assets/images/cardspictures/CODBO3.png'
import NBA from '../../assets/images/cardspictures/nba2k23.webp'
import RL from '../../assets/images/cardspictures/rocket league.png'

export default function RegCards(){

    return(
        
        <div>
            <div className="regcards-main">
                <div className="regcards-bg">
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
                                padding: '80px 80px 10px 80px',
                            },
                            '@xsMax':{
                                fontSize: '$3xl',
                                padding: '80px 0px 10px 0px'
                            },
                        }}>
                            Events 🏆
                        </Text>
                        <Text
                        css={{
                            fontFamily: 'bruce-forever',
                            width: '100%',
                            textAlign: 'center',
                            '@xsMin':{
                                fontSize: '$lg',
                                padding: '0px 250px 40px 250px',
                            },
                            '@xsMax':{
                                fontSize: '$sm',
                                padding: '10px 20px'
                            },
                            color: '$gray900'
                        }}>
                            Find list of all upcoming tournaments below. Click on the card of whichever event you wish to register for or know more about.
                        </Text>

                        {/* FIFA */}
                        <Grid
                        css={{
                            '@xsMin':{
                            padding: '48px 90px'  
                            },
                            '@xsMax':{
                                padding: '24px 12px'  
                            },
                        }}>
                            <Card 
                            css={{ 
                                '@xsMin':{
                                    width: "350px",
                                    height: "500px"
                                },
                                '@xsMax':{
                                    width: '300px',
                                    height: '500px'
                                } 
                                }}>
                                <Card.Body css={{ p: 0 }}>
                                    <Card.Image 
                                    css={{
                                        opacity: '0.75'
                                    }}
                                        src={FIFA}
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                        alt="Card example background"
                                    />
                                </Card.Body>
                                <Card.Footer isBlurred
                                css={{
                                    position: "absolute",
                                    bgBlur: "#ffffff05",
                                    bottom: 0,
                                    zIndex: 1,
                                    jc: 'center',
                                    alignItems: 'center'
                                }}
                                >
                                    <Col css={{
                                        alignItems: 'center',
                                        jc: 'center'
                                    }}>
                                        <Text 
                                        css={{
                                            textAlign: 'center',
                                            '@xsMin':{
                                                fontSize: '$xl'
                                            },
                                            '@xsMax':{
                                                fontSize: '$md'
                                            },
                                            fontWeight: '$semibold',
                                            fontFamily: 'bruce-forever'
                                        }}>
                                            FIFA ⚽️
                                        </Text>
                                        <Text
                                        css={{
                                            color: '$gray900',
                                            textAlign: 'center',
                                            fontFamily: 'bruce-forever',
                                            '@xsMin':{
                                                fontSize: '0.75rem'
                                            },
                                            '@xsMax':{
                                                fontSize: '0.70rem'
                                            }
                                        }}>
                                            Kill them slowly with rabonas.
                                        </Text>
                                        <Grid.Container gap={1}
                                        css={{
                                            jc: 'center',
                                            paddingBottom: '1%'
                                        }}>
                                            <Grid
                                            css={{
                                                paddingTop: '10px'
                                            }}>
                                                <Button shadow rounded bordered auto color={'defualt'}
                                                onPress={()=>{
                                                    window.location.pathname='/fifa'
                                                }}>
                                                    <Text
                                                    css={{
                                                        fontFamily: 'bruce-forever',
                                                        color: 'White',
                                                        fontSize: '$xs'
                                                    }}>
                                                        DETAILS
                                                    </Text>
                                                </Button>
                                            </Grid>
                                        </Grid.Container>
                                    </Col>
                                </Card.Footer>
                            </Card>
                        </Grid>

                        {/* COD */}
                        <Grid
                        css={{
                            '@xsMin':{
                            padding: '48px 90px'  
                            },
                            '@xsMax':{
                                padding: '24px 12px'  
                            },
                        }}>
                            <Card 
                            css={{ 
                                '@xsMin':{
                                    width: "350px",
                                    height: "500px"
                                },
                                '@xsMax':{
                                    width: '300px',
                                    height: '500px'
                                } 
                                }}>
                                <Card.Body css={{ p: 0 }}>
                                    <Card.Image 
                                    css={{
                                        opacity: '0.75'
                                    }}
                                        src={COD}
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                        alt="Card example background"
                                    />
                                </Card.Body>
                                <Card.Footer isBlurred
                                css={{
                                    position: "absolute",
                                    bgBlur: "#ffffff05",
                                    bottom: 0,
                                    zIndex: 1,
                                    jc: 'center',
                                    alignItems: 'center'
                                }}
                                >
                                    <Col css={{
                                        alignItems: 'center',
                                        jc: 'center'
                                    }}>
                                        <Text 
                                        css={{
                                            textAlign: 'center',
                                            '@xsMin':{
                                                fontSize: '$xl'
                                            },
                                            '@xsMax':{
                                                fontSize: '$md'
                                            },
                                            fontWeight: '$semibold',
                                            fontFamily: 'bruce-forever'
                                        }}>
                                            COD 🔪
                                        </Text>
                                        <Text
                                        css={{
                                            color: '$gray900',
                                            textAlign: 'center',
                                            fontFamily: 'bruce-forever',
                                            '@xsMin':{
                                                fontSize: '0.75rem'
                                            },
                                            '@xsMax':{
                                                fontSize: '0.70rem'
                                            }
                                        }}>
                                            Anytime. Anywhere. 
                                        </Text>
                                        <Grid.Container gap={1}
                                        css={{
                                            jc: 'center',
                                            paddingBottom: '1%'
                                        }}>
                                            <Grid
                                            css={{
                                                paddingTop: '10px'
                                            }}>
                                                <Button shadow rounded bordered auto color={'defualt'}
                                                onPress={()=>{
                                                    window.location.pathname='/cod'
                                                }}>
                                                    <Text
                                                    css={{
                                                        fontFamily: 'bruce-forever',
                                                        color: 'White',
                                                        fontSize: '$xs'
                                                    }}>
                                                        DETAILS
                                                    </Text>
                                                </Button>
                                            </Grid>
                                        </Grid.Container>
                                    </Col>
                                </Card.Footer>
                            </Card>
                        </Grid>

                        {/* NBA */}
                        <Grid
                        css={{
                            '@xsMin':{
                            padding: '48px 90px'  
                            },
                            '@xsMax':{
                                padding: '24px 12px'  
                            },
                        }}>
                            <Card 
                            css={{ 
                                '@xsMin':{
                                    width: "350px",
                                    height: "500px"
                                },
                                '@xsMax':{
                                    width: '300px',
                                    height: '500px'
                                } 
                                }}>
                                <Card.Body css={{ p: 0 }}>
                                    <Card.Image 
                                    css={{
                                        opacity: '0.75'
                                    }}
                                        src={NBA}
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                        alt="Card example background"
                                    />
                                </Card.Body>
                                <Card.Footer isBlurred
                                css={{
                                    position: "absolute",
                                    bgBlur: "#ffffff05",
                                    bottom: 0,
                                    zIndex: 1,
                                    jc: 'center',
                                    alignItems: 'center'
                                }}
                                >
                                    <Col css={{
                                        alignItems: 'center',
                                        jc: 'center'
                                    }}>
                                        <Text 
                                        css={{
                                            textAlign: 'center',
                                            '@xsMin':{
                                                fontSize: '$xl'
                                            },
                                            '@xsMax':{
                                                fontSize: '$md'
                                            },
                                            fontWeight: '$semibold',
                                            fontFamily: 'bruce-forever'
                                        }}>
                                            NBA 🏀
                                        </Text>
                                        <Text
                                        css={{
                                            color: '$gray900',
                                            textAlign: 'center',
                                            fontFamily: 'bruce-forever',
                                            '@xsMin':{
                                                fontSize: '0.75rem'
                                            },
                                            '@xsMax':{
                                                fontSize: '0.70rem'
                                            }
                                        }}>
                                            Watch me break your ankles.
                                        </Text>
                                        <Grid.Container gap={1}
                                        css={{
                                            jc: 'center',
                                            paddingBottom: '1%'
                                        }}>
                                            <Grid
                                            css={{
                                                paddingTop: '10px'
                                            }}>
                                                <Button shadow rounded bordered auto color={'defualt'}
                                                onPress={()=>{
                                                    window.location.pathname='/nba'
                                                }}>
                                                    <Text
                                                    css={{
                                                        fontFamily: 'bruce-forever',
                                                        color: 'White',
                                                        fontSize: '$xs'
                                                    }}>
                                                        DETAILS
                                                    </Text>
                                                </Button>
                                            </Grid>
                                        </Grid.Container>
                                    </Col>
                                </Card.Footer>
                            </Card>
                        </Grid>

                        {/* Rocket League */}
                        <Grid
                        css={{
                            '@xsMin':{
                            padding: '48px 90px'  
                            },
                            '@xsMax':{
                                padding: '24px 12px'  
                            },
                        }}>
                            <Card 
                            css={{ 
                                '@xsMin':{
                                    width: "350px",
                                    height: "500px"
                                },
                                '@xsMax':{
                                    width: '300px',
                                    height: '500px'
                                } 
                                }}>
                                <Card.Body css={{ p: 0 }}>
                                    <Card.Image 
                                    css={{
                                        opacity: '0.75'
                                    }}
                                        src={RL}
                                        width="100%"
                                        height="100%"
                                        objectFit="cover"
                                        alt="Card example background"
                                    />
                                </Card.Body>
                                <Card.Footer isBlurred
                                css={{
                                    position: "absolute",
                                    bgBlur: "#ffffff05",
                                    bottom: 0,
                                    zIndex: 1,
                                    jc: 'center',
                                    alignItems: 'center'
                                }}
                                >
                                    <Col css={{
                                        alignItems: 'center',
                                        jc: 'center'
                                    }}>
                                        <Text 
                                        css={{
                                            textAlign: 'center',
                                            '@xsMin':{
                                                fontSize: '$xl'
                                            },
                                            '@xsMax':{
                                                fontSize: '$md'
                                            },
                                            fontWeight: '$semibold',
                                            fontFamily: 'bruce-forever'
                                        }}>
                                            Rocket League 🚀                                        
                                        </Text>
                                        <Text
                                        css={{
                                            color: '$gray900',
                                            textAlign: 'center',
                                            fontFamily: 'bruce-forever',
                                            '@xsMin':{
                                                fontSize: '0.75rem'
                                            },
                                            '@xsMax':{
                                                fontSize: '0.70rem'
                                            }
                                        }}>
                                            Can't catch this.
                                        </Text>
                                        <Grid.Container gap={1}
                                        css={{
                                            jc: 'center',
                                            paddingBottom: '1%'
                                        }}>
                                            <Grid
                                            css={{
                                                paddingTop: '10px'
                                            }}>
                                                <Button shadow rounded bordered auto color={'defualt'}
                                                onPress={()=>{
                                                    window.location.pathname='/rocketleague'
                                                }}>
                                                    <Text
                                                    css={{
                                                        fontFamily: 'bruce-forever',
                                                        color: 'White',
                                                        fontSize: '$xs'
                                                    }}>
                                                        DETAILS
                                                    </Text>
                                                </Button>
                                            </Grid>
                                        </Grid.Container>
                                    </Col>
                                </Card.Footer>
                            </Card>
                            
                        </Grid>

                    </Grid.Container>
                </div>
            </div>
        </div>
    )
}