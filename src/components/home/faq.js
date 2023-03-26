import React from "react";
import { Grid, Text, Collapse } from "@nextui-org/react";

export default function FAQs(){
    return(
        <div>
            <div className="faq-main">
                <div className="faq-bg">
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
                            FAQs❓
                        </Text>

                        <Text
                        css={{
                            fontFamily: 'bruce-forever',
                            width: '100%',
                            textAlign: 'center',
                            '@xsMin':{
                                fontSize: '$lg',
                                padding: '0px 250px 30px 250px',
                            },
                            '@xsMax':{
                                fontSize: '$sm',
                                padding: '10px 20px'
                            },
                            color: '$gray900'
                        }}>
                            Here you can find Frequently Asked Questions (FAQs). 
                            We hope these help you clarify some of the doubts, if any, in your mind. 
                            If still doubtful please reach out to us at ashokaplaystationparty@gmail.com
                        </Text>

                        {/* Left Side */}
                        <Grid
                        css={{
                            '@xsMin':{
                                width: '600px'
                            },
                            '@xsMax':{
                                width: '300px'
                            }
                        }}>
                            <Collapse.Group css={{fontFamily: 'bruce-forever'}} splitted accordion={false}>
                                <Collapse  title="How do I register?" expanded>
                                    <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    </Text>
                                </Collapse>
                                <Collapse title="Number of tournaments organised every month?">
                                    <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    </Text>
                                </Collapse>
                                <Collapse title="Are inter-batch teams allowed?">
                                    <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    </Text>
                                </Collapse>
                                <Collapse title="How and when can my team be disqualified?">
                                    <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    </Text>
                                </Collapse>
                                <Collapse title="How do I know if my team was successfully registered?">
                                    <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    </Text>
                                </Collapse>
                            </Collapse.Group>
                        </Grid>

                        {/* Right Side */}
                        <Grid
                        css={{
                            '@xsMin':{
                                width: '600px'
                            },
                            '@xsMax':{
                                width: '300px'
                            }
                        }}>
                            <Collapse.Group css={{fontFamily: 'bruce-forever'}} splitted accordion={false}>
                                <Collapse title="How are the fixtures decided?">
                                    <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    </Text>
                                </Collapse>
                                <Collapse title="Will I get a refund if I happen to back out?">
                                    <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    </Text>
                                </Collapse>
                                <Collapse title="Can I register without an Ashoka email ID?">
                                    <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    </Text>
                                </Collapse>
                                <Collapse title="What guarantee do I have of the prize money?">
                                    <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    </Text>
                                </Collapse>
                                <Collapse title="What games and why?">
                                    <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    </Text>
                                </Collapse>
                                <Collapse title="Does only the winner get rewarded?">
                                    <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    </Text>
                                </Collapse>
                                <Collapse title="What is an Elite Tournament & how do I enter?">
                                    <Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    </Text>
                                </Collapse>
                            </Collapse.Group>
                        </Grid>

                    </Grid.Container>
                </div>
            </div>
        </div>
    )
}