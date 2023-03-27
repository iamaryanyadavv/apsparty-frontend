import React from "react";
import { Grid, Text, Col, Image } from "@nextui-org/react";
import Grey from '../assets/images/Grey.jpeg'
import AryanYadav from '../assets/images/aryanyadav.jpeg'

export default function About(){
    return(
        <div>
            <Grid.Container 
            css={{
                jc: 'center',
                textAlign: 'center',
            }}>
                {/* Heading */}
                <Col>
                    <Text
                    css={{
                        fontFamily: 'bruce-forever',
                        '@smMin':{
                            fontSize: '$5xl',
                            color: 'White',
                            paddingTop: '60px'
                        },
                        '@smMax':{
                            fontSize: '$2xl',
                            padding: '40px 60px 0px 60px',
                            color: 'White',
                        },
                        textGradient: '45deg, $red600 30%, $purple600 100%'
                    }}>
                        Ashoka Playstation Party
                    </Text>
                    <Text
                    css={{
                        fontFamily: 'bruce-forever',
                        '@smMin':{
                            fontSize: '$xl',
                            color: '$gray700',
                            padding: '10px 200px 40px 200px',
                        },
                        '@smMax':{
                            fontSize: '$sm',
                            padding: '20px 60px',
                            color: '$gray700',
                        }
                    }}>
                        by
                    </Text>
                </Col>
                
                {/* Name, Role, Favourite Game, */}
                
                <Grid.Container gap={0}
                css={{
                    jc: 'space-evenly',
                    textAlign: 'center',
                }}>
                    <Grid
                    css={{
                        padding: '24px'
                    }}>
                        <Col 
                        css={{
                            display: 'flex',
                            flexDirection: 'column',
                            jc: 'center',
                            alignItems: 'center',
                        }}>
                            <Image
                            css={{
                                '@smMin':{
                                    width: '300px',
                                    height: '300px',
                                    borderRadius: '200px',
                                },
                                '@smMax':{
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '100px'
                                },
                                objectFit: 'cover'
                            }}  src={AryanYadav}  />
                            <Text hideIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$3xl',
                                fontWeight: '$semibold',
                                paddingTop: '5px',
                                fontFamily: 'bruce-forever'
                            }}> 
                                Aryan Yadav
                            </Text>
                            <Text showIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$xl',
                                fontWeight: '$semibold',
                                paddingTop: '5px',
                                fontFamily: 'bruce-forever'
                            }}> 
                                Aryan Yadav
                            </Text>

                            <Text hideIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$xl',
                                color: '$gray800',
                                fontFamily: 'bruce-forever'
                            }}>
                                Founder
                            </Text>
                            <Text showIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$md',
                                color: '$gray800',
                                fontFamily: 'bruce-forever'
                            }}>
                                Founder
                            </Text>
                            <Text hideIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$xl',
                                color: '$gray800',
                                fontFamily: 'bruce-forever'
                            }}>
                                Developer
                            </Text>
                            <Text showIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$md',
                                color: '$gray800',
                                fontFamily: 'bruce-forever'
                            }}>
                                Developer
                            </Text>
                            <Text
                            css={{
                                padding: '0% 2.5%',
                                fontFamily: 'bruce-forever'
                            }}>
                                <a target="_blank" rel="noreferrer" href="https://aryanyadav.com/">aryanyadav.com</a>
                            </Text>
                            
                        </Col>
                    </Grid>

                    <Grid 
                    css={{
                        padding: '24px'
                    }}>
                        <Col 
                        css={{
                            display: 'flex',
                            flexDirection: 'column',
                            jc: 'center',
                            alignItems: 'center'
                        }}>
                            <Image 
                            css={{
                                '@smMin':{
                                    width: '300px',
                                    height: '300px',
                                    borderRadius: '200px',
                                },
                                '@smMax':{
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '100px'
                                },
                                objectFit: 'cover'
                            }}   src={Grey}/>
                            <Text hideIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$3xl',
                                fontWeight: '$semibold',
                                paddingTop: '5px',
                                fontFamily: 'bruce-forever'
                            }}> 
                                Krishna Bala
                            </Text>
                            <Text showIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$xl',
                                fontWeight: '$semibold',
                                paddingTop: '5px',
                                fontFamily: 'bruce-forever'
                            }}> 
                                Krishna Bala
                            </Text>

                            <Text hideIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$xl',
                                color: '$gray800',
                                fontFamily: 'bruce-forever'
                            }}>
                                Founder
                            </Text>
                            <Text showIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$md',
                                color: '$gray800',
                                fontFamily: 'bruce-forever'
                            }}>
                                Founder
                            </Text>
                            <Text hideIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$xl',
                                color: '$gray800',
                                fontFamily: 'bruce-forever'
                            }}>
                                Data Scientist
                            </Text>
                            <Text showIn={'sm'}
                            css={{
                                jc: 'center',
                                textAlign: 'center',
                                fontSize: '$md',
                                color: '$gray800',
                                fontFamily: 'bruce-forever'
                            }}>
                                Data Scientist
                            </Text>
                            <Text 
                            css={{
                                padding: '0% 2.5%',
                                fontFamily: 'bruce-forever'
                            }}>
                                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/krishna__bala/">@krishna__bala</a>
                            </Text>
                        </Col>
                    </Grid>

                </Grid.Container>

            </Grid.Container>
        </div>
    )
}