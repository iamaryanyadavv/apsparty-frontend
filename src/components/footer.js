import React from "react";
import { Container, Row, Text, Link, Col } from "@nextui-org/react";

function Footer(){
    return(
        <Container fluid >
            <Col>
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
                <Text
                css={{
                    color: '$gray700',
                    jc: 'center',
                    textAlign: 'center',
                    paddingBottom: '20px'
                }}>
                    © 2023 Ashoka Playstation Party. All Rights Reserved.
                </Text>
            </Col>
        </Container>
    )
}

export default Footer;