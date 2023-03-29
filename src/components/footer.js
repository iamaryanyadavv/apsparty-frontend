import React from "react";
import { Container, Row, Text, Link, Col } from "@nextui-org/react";

function Footer(){
    return(
        <Container fluid >
            <Col>
                <Text
                css={{
                    color: '$gray700',
                    jc: 'center',
                    textAlign: 'center',
                    padding: '10px 0px',
                    borderStyle: 'solid',
                    borderColor: '$gray900',
                    borderWidth: '1px 0px 0px 0px',
                }}>
                    © 2023 Ashoka Playstation Party. All Rights Reserved.
                </Text>
            </Col>
        </Container>
    )
}

export default Footer;