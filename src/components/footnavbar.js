import { Grid, Image, Row, Link } from "@nextui-org/react";
import React from "react";
import Grey from '../assets/images/Grey.jpeg'

export default function FootNavbar () {
    return(
        <Grid.Container 
        css={{
            jc: 'center',
            textAlign: 'center',
            alignItems: 'center',
        }}>

            <Grid.Container gap={0}
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
                marginTop: '15px',
            }}>
                <Grid
                css={{
                    padding: '12px'
                }}>
                    <Image 
                    css={{
                        borderRadius: '10px'
                    }} src={Grey} width={'90px'} height={'90px'} />
                </Grid>
            </Grid.Container>

            <Grid.Container gap={0}
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
                
            }}>
                <Row
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center'
                }}>
                    <Grid.Container gap={0}
                    css={{
                        jc: 'center',
                        textAlign: 'center',
                        alignItems: 'center'
                    }}>
                        <Grid 
                        css={{
                            padding: '12px'
                        }}>
                            <Link css={{color: 'White'}} href="/">
                                Home 🏠
                            </Link>
                        </Grid>
                        <Grid 
                        css={{
                            padding: '12px'
                        }}>
                            <Link css={{color: 'White'}} href="/fifa" >
                                FIFA ⚽️
                            </Link>
                        </Grid>
                        <Grid 
                        css={{
                            padding: '12px'
                        }}>
                            <Link css={{color: 'White'}} href="/cod" >
                                COD 🔪
                            </Link>
                        </Grid>
                        <Grid 
                        css={{
                            padding: '12px'
                        }}>
                            <Link css={{color: 'White'}} href="/nba" >
                                NBA 🏀
                            </Link>
                        </Grid>
                    </Grid.Container>
                </Row>
                <Row
                css={{
                    jc: 'center',
                    textAlign: 'center',
                    alignItems: 'center'
                }}>
                    <Grid.Container gap={0}
                    css={{
                        jc: 'center',
                        textAlign: 'center',
                        alignItems: 'center'
                    }}>
                        <Grid 
                        css={{
                            padding: '12px'
                        }}>
                            <Link css={{color: 'White'}} href="/rocketleague">
                                Rocket League 🚀
                            </Link>
                        </Grid>
                        <Grid 
                        css={{
                            padding: '12px'
                        }}>
                            <Link css={{color: 'White'}} href="/ps4rent">
                                Rent A PS4 🎮
                            </Link>
                        </Grid>
                        <Grid 
                        css={{
                            padding: '12px'
                        }}>
                            <Link css={{color: 'White'}} href="/about" >
                                About 🧩
                            </Link>
                        </Grid>
                    </Grid.Container>
                </Row>
            </Grid.Container>

        </Grid.Container>
    )
}