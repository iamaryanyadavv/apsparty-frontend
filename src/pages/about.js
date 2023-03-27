import React from "react";
import { Grid, Text, Col } from "@nextui-org/react";
import Grey from '../assets/images/Grey.jpeg'

export default function About(){
    return(
        <div>
            <Grid.Container 
        css={{
            jc: 'center',
            textAlign: 'center',
        }}>
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
                    Behind-the-scenes.
                </Text>
            </Col>
            {/* Name, Role, Favourite Game, Quote, */}
            
        </Grid.Container>
        </div>
    )
}