import React from "react";
import { Grid, Text, Col, Card, Button, Popover } from "@nextui-org/react";

export default function EventsLanding(props){

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
                            lineHeight: '2',
                        '@xsMin':{
                            fontSize: '$5xl',
                            color: 'White',
                            paddingTop: '60px'
                        },
                        '@xsMax':{
                            fontSize: '$2xl',
                            paddingTop: '40px',
                            color: 'White',
                        }
                    }}>
                        {props.heading}
                    </Text>
                    <Text
                    css={{
                        fontFamily: 'bruce-forever',
                        '@xsMin':{
                            fontSize: '$xl',
                            color: '$gray700',
                            paddingTop: '10px',
                            paddingBottom: '40px',
                        },
                        '@xsMax':{
                            fontSize: '$md',
                            paddingTop: '20px',
                            paddingBottom: '20px',
                            color: '$gray700',
                        }
                    }}>
                        Pick your poison 🧪
                    </Text>
                </Col>
                
            </Grid.Container>

            {/* Page Content */}
            <Grid.Container 
            css={{
                jc: 'center',
                textAlign: 'center',
                margin: '30px 0px 30px 0px',
                backgroundColor: 'rgb(20,20,20)',
                borderRadius: '20px'
            }}>
                <Grid>

                    {/* Cards */}
                    <Grid.Container
                    css={{
                        jc: 'center',
                        textAlign: 'center'
                    }}>

                        {/* Open-To-All Tournament */}
                        <Grid
                        css={{
                            '@xsMin':{
                            margin: '60px 36px',
                            width: "350px",
                            height: "680px"
                            },
                            '@xsMax':{
                                margin: '24px 12px',
                                width: '300px',
                                height: '616px'
                            },
                        }}>
                            <Col>
                                <Text
                                css={{
                                    fontFamily: 'bruce-forever',
                                        lineHeight: '2',
                                    '@xsMin':{
                                        fontSize: '$md',
                                        color: '$gray900',
                                        paddingBottom: '20px'
                                    },
                                    '@xsMax':{
                                        fontSize: '$xs',
                                        paddingTop: '20px',
                                        paddingBottom: '0px',
                                        color: '$gray900',
                                    }
                                }}>
                                    Casual, fun, chill, win money back in 3 wins? ↓
                                </Text>
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
                                            src={props.OTATimage}
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
                                                    fontSize: '$lg'
                                                },
                                                '@xsMax':{
                                                    fontSize: '$md'
                                                },
                                                fontWeight: '$semibold',
                                                fontFamily: 'bruce-forever'
                                            }}>
                                                Open Tournament
                                            </Text>
                                            <Text
                                            css={{
                                                color: '$gray900',
                                                textAlign: 'center',
                                                fontFamily: 'bruce-forever',
                                lineHeight: '2',
                                                '@xsMin':{
                                                    fontSize: '@xs'
                                                },
                                                '@xsMax':{
                                                    fontSize: '0.70rem'
                                                }
                                            }}>
                                                Open-To-All!
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
                                                    {props.OTATpopover==='no' &&
                                                    <Button shadow rounded bordered auto color={'defualt'}
                                                    onPress={()=>{
                                                        window.location.pathname=props.OTAThref
                                                    }}>
                                                        <Text
                                                        css={{
                                                            fontFamily: 'bruce-forever',
                                lineHeight: '2',
                                                            color: 'White',
                                                            fontSize: '$xs'
                                                        }}>
                                                            Register
                                                        </Text>
                                                    </Button>
                                                    }
                                                    {props.OTATpopover==='yes' &&
                                                    <Popover>
                                                        <Popover.Trigger>
                                                            <Button shadow rounded bordered auto color={'defualt'}>
                                                                <Text
                                                                css={{
                                                                    fontFamily: 'bruce-forever',
                                lineHeight: '2',
                                                                    color: 'White',
                                                                    fontSize: '$xs'
                                                                }}>
                                                                    Register
                                                                </Text>
                                                            </Button>
                                                        </Popover.Trigger>
                                                        <Popover.Content>
                                                            <Text
                                                            css={{
                                                                fontFamily: 'bruce-forever',
                                lineHeight: '2',
                                                                color: 'White',
                                                                fontSize: '$sm',
                                                                padding: '12px'
                                                            }}>
                                                                Stay tuned. Coming soon!
                                                            </Text>
                                                        </Popover.Content>
                                                    </Popover>
                                                    }
                                                </Grid>
                                            </Grid.Container>
                                        </Col>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Grid>

                        {/* League */}
                        {props.OTAL==='yes' &&
                        <Grid
                        css={{
                            '@xsMin':{
                            margin: '60px 36px',
                            width: "350px",
                            height: "680px"
                            },
                            '@xsMax':{
                                margin: '24px 12px',
                                width: "350px",
                                height: "616px"
                            },
                        }}>
                            <Col>
                                <Text
                                css={{
                                    fontFamily: 'bruce-forever',
                                        lineHeight: '2',
                                    '@xsMin':{
                                        fontSize: '$md',
                                        color: '$gray900',
                                        paddingBottom: '20px'
                                    },
                                    '@xsMax':{
                                        fontSize: '$xs',
                                        paddingTop: '20px',
                                        paddingBottom: '0px',
                                        color: '$gray900',
                                    }
                                }}>
                                    Slow, chill, league, semester-long? ↓
                                </Text>

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
                                            src={props.OTALimage}
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
                                                    fontSize: '$lg'
                                                },
                                                '@xsMax':{
                                                    fontSize: '$md'
                                                },
                                                fontWeight: '$semibold',
                                                fontFamily: 'bruce-forever'
                                            }}>
                                                League
                                            </Text>
                                            <Text
                                            css={{
                                                color: '$gray900',
                                                textAlign: 'center',
                                                fontFamily: 'bruce-forever',
                                lineHeight: '2',
                                                '@xsMin':{
                                                    fontSize: '@xs'
                                                },
                                                '@xsMax':{
                                                    fontSize: '0.70rem'
                                                }
                                            }}>
                                                Open-To-All!
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
                                                    {props.OTALpopover==='no' &&
                                                    <Button shadow rounded bordered auto color={'defualt'}
                                                    onPress={()=>{
                                                        window.location.pathname=props.OTALhref
                                                    }}>
                                                        <Text
                                                        css={{
                                                            fontFamily: 'bruce-forever',
                                lineHeight: '2',
                                                            color: 'White',
                                                            fontSize: '$xs'
                                                        }}>
                                                            Register
                                                        </Text>
                                                    </Button>
                                                    }
                                                    {props.OTALpopover==='yes' &&
                                                    <Popover>
                                                        <Popover.Trigger>
                                                            <Button shadow rounded bordered auto color={'defualt'}>
                                                                <Text
                                                                css={{
                                                                    fontFamily: 'bruce-forever',
                                lineHeight: '2',
                                                                    color: 'White',
                                                                    fontSize: '$xs'
                                                                }}>
                                                                    Register
                                                                </Text>
                                                            </Button>
                                                        </Popover.Trigger>
                                                        <Popover.Content>
                                                            <Text
                                                            css={{
                                                                fontFamily: 'bruce-forever',
                                lineHeight: '2',
                                                                color: 'White',
                                                                fontSize: '$sm',
                                                                padding: '12px'
                                                            }}>
                                                                Stay tuned. Coming soon!
                                                            </Text>
                                                        </Popover.Content>
                                                    </Popover>
                                                    }
                                                </Grid>
                                            </Grid.Container>
                                        </Col>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Grid>
                        }

                        {/* Elite Tournament */}
                        <Grid
                        css={{
                            '@xsMin':{
                            margin: '60px 36px',
                            width: "350px",
                            height: "680px"
                            },
                            '@xsMax':{
                                margin: '24px 12px',
                                width: '300px',
                                height: '616px' 
                            },
                        }}>
                            <Col>
                                <Text
                                css={{
                                    fontFamily: 'bruce-forever',
                                        lineHeight: '2',
                                    '@xsMin':{
                                        fontSize: '$md',
                                        color: '$gray900',
                                        paddingBottom: '20px'
                                    },
                                    '@xsMax':{
                                        fontSize: '$xs',
                                        paddingTop: '20px',
                                        paddingBottom: '0px',
                                        color: '$gray900',
                                    }
                                }}>
                                    Higher stakes, higher rewards, sweats only? ↓
                                </Text>
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
                                            src={props.ETimage}
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
                                                    fontSize: '$lg'
                                                },
                                                '@xsMax':{
                                                    fontSize: '$md'
                                                },
                                                fontWeight: '$semibold',
                                                fontFamily: 'bruce-forever'
                                            }}>
                                                Elite Tournament
                                            </Text>
                                            <Text
                                            css={{
                                                color: '$gray900',
                                                textAlign: 'center',
                                                fontFamily: 'bruce-forever',
                                lineHeight: '2',
                                                '@xsMin':{
                                                    fontSize: '@xs'
                                                },
                                                '@xsMax':{
                                                    fontSize: '0.70rem'
                                                }
                                            }}>
                                                Invitation only!
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
                                                    {props.ETpopover==='no' &&
                                                    <Button shadow rounded bordered auto color={'defualt'}
                                                    onPress={()=>{
                                                        window.location.pathname=props.EThref
                                                    }}>
                                                        <Text
                                                        css={{
                                                            fontFamily: 'bruce-forever',
                                lineHeight: '2',
                                                            color: 'White',
                                                            fontSize: '$xs'
                                                        }}>
                                                            Register
                                                        </Text>
                                                    </Button>
                                                    }
                                                    {props.ETpopover==='yes' &&
                                                    <Popover>
                                                        <Popover.Trigger>
                                                            <Button shadow rounded bordered auto color={'defualt'}>
                                                                <Text
                                                                css={{
                                                                    fontFamily: 'bruce-forever',
                                lineHeight: '2',
                                                                    color: 'White',
                                                                    fontSize: '$xs'
                                                                }}>
                                                                    Register
                                                                </Text>
                                                            </Button>
                                                        </Popover.Trigger>
                                                        <Popover.Content>
                                                            <Text
                                                            css={{
                                                                fontFamily: 'bruce-forever',
                                lineHeight: '2',
                                                                color: 'White',
                                                                fontSize: '$sm',
                                                                padding: '12px'
                                                            }}>
                                                                Stay tuned. Coming soon!
                                                            </Text>
                                                        </Popover.Content>
                                                    </Popover>
                                                    }
                                                </Grid>
                                            </Grid.Container>
                                        </Col>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Grid>


                    </Grid.Container>

                </Grid>

                

            </Grid.Container>
        </div>
    )
}