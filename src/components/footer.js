import React from "react";
import { Container, Row, Text, Link } from "@nextui-org/react";

function Footer(){
    return(
        <Container fluid >
            <Row      
            css={{
                jc: 'center',
                textAlign: 'center',
                alignItems: 'center',
                borderStyle: 'solid',
                borderColor: '$gray600',
                borderWidth: '1px 0px 0px 0px',
                fontFamily:'bruce-forever'
            }}>
                <Text hideIn={'xs'}
                css={{
                    padding: '1% 0.35%',
                    fontSize: '$normal',
                    fontFamily:'bruce-forever'
                }}>
                    Made with 🤍 by
                </Text>
                <Text showIn={'xs'}
                css={{
                    padding: '1%',
                    fontFamily:'bruce-forever'
                }}>
                    By
                </Text>
                <Link
                css={{
                    color: '#3694ff'
                }} target='_blank' href="https://aryanyadav.com/"
                >
                    Aryan Yadav
                </Link>
            </Row>
        </Container>
    )
}

export default Footer;