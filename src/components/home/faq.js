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
                            '@smMin':{
                                fontSize: '$lg',
                                padding: '0px 250px 30px 250px',
                            },
                            '@smMax':{
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
                                    <Text
                                    css={{
                                        fontFamily: 'bruce-forever',
                                        '@smMin':{
                                            fontSize: '$sm'
                                        },
                                        '@smMax':{
                                            fontSize:'0.75rem'
                                        }
                                    }}>
                                    You can find the upcoming tournament details in our latest emails, instagram posts or website news bar. Based on that you can register for that tournament from that game's page (accessible via navbar)
                                    </Text>
                                </Collapse>

                                <Collapse title="Number of tournaments organised every month?">
                                    <Text
                                    css={{
                                        fontFamily: 'bruce-forever',
                                        '@smMin':{
                                            fontSize: '$sm'
                                        },
                                        '@smMax':{
                                            fontSize:'0.75rem'
                                        }
                                    }}>
                                        Currently, we plan on hosting one open-to-all tournament every two weeks though this could be changed with higher demand - we could go up to one every week.
                                    </Text>
                                </Collapse>

                                <Collapse title="Are inter-batch teams allowed?">
                                    <Text
                                    css={{
                                        fontFamily: 'bruce-forever',
                                        '@smMin':{
                                            fontSize: '$sm'
                                        },
                                        '@smMax':{
                                            fontSize:'0.75rem'
                                        }
                                    }}>
                                        Yes, inter-batch duos/teams are allowed. You can team up with a junior or senior as long as they are a part of the student body at Ashoka.
                                    </Text>
                                </Collapse>

                                <Collapse title="How and when can my team be disqualified?">
                                    <Text
                                    css={{
                                        fontFamily: 'bruce-forever',
                                        '@smMin':{
                                            fontSize: '$sm'
                                        },
                                        '@smMax':{
                                            fontSize:'0.75rem'
                                        }
                                    }}>
                                        Using unfair means, cheating, coercion and/or bullying fellow teams could result in the team being disqualified. Also, if the team shows up for their fixture later than the given time, they will have forfeited the game.
                                    </Text>
                                </Collapse>

                                <Collapse title="How do I know if my team was successfully registered?">
                                    <Text
                                    css={{
                                        fontFamily: 'bruce-forever',
                                        '@smMin':{
                                            fontSize: '$sm'
                                        },
                                        '@smMax':{
                                            fontSize:'0.75rem'
                                        }
                                    }}>
                                        You can know if you're team is successfully registered only after we have confirmed your payments after registrations close. Until then you can add your name by filling the registration form and uploading a payment screenshot.
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
                                    <Text
                                    css={{
                                        fontFamily: 'bruce-forever',
                                        '@smMin':{
                                            fontSize: '$sm'
                                        },
                                        '@smMax':{
                                            fontSize:'0.75rem'
                                        }
                                    }}>
                                        Fixtures are automated. So, once the slots are completely filled the website automaticlaly configures 64 teams into 32 batches of 2 teams each. Hence, giving us our fixtures. We are working on seeding and should implement that soon enough, stay tuned for that!
                                    </Text>
                                </Collapse>

                                <Collapse title="Will I get a refund if I happen to back out?">
                                    <Text
                                    css={{
                                        fontFamily: 'bruce-forever',
                                        '@smMin':{
                                            fontSize: '$sm'
                                        },
                                        '@smMax':{
                                            fontSize:'0.75rem'
                                        }
                                    }}>
                                        Yes, you will get a refund if you back out 24 hours before the tournament start time. So, the first game of the tournament is at 9 PM, Monday, you will get a refund if you have backed out before 9 AM, Monday. In order to get a refund you need to write to ashokapsparty@gmail.com stating you wish to back out, including: team name, your name, your email ID.
                                    </Text>
                                </Collapse>

                                <Collapse title="Can I register without an Ashoka email ID?">
                                    <Text
                                    css={{
                                        fontFamily: 'bruce-forever',
                                        '@smMin':{
                                            fontSize: '$sm'
                                        },
                                        '@smMax':{
                                            fontSize:'0.75rem'
                                        }
                                    }}>
                                        No, you cannot. We are open only to Ashoka's student body.
                                    </Text>
                                </Collapse>

                                <Collapse title="What guarantee do I have of the prize money?">
                                    <Text
                                    css={{
                                        fontFamily: 'bruce-forever',
                                        '@smMin':{
                                            fontSize: '$sm'
                                        },
                                        '@smMax':{
                                            fontSize:'0.75rem'
                                        }
                                    }}>
                                        We hope to build a trustworthy brand, one which you can call reliable. The prize money will be sent you via upi payment the very second the tournament ends.
                                    </Text>
                                </Collapse>

                                <Collapse title="What games and why?">
                                    <Text
                                    css={{
                                        fontFamily: 'bruce-forever',
                                        '@smMin':{
                                            fontSize: '$sm'
                                        },
                                        '@smMax':{
                                            fontSize:'0.75rem'
                                        }
                                    }}>
                                        Currently, we have FIFA23, COD: BO3, NBA2k23 and Rocket League. We chose these games because they're easy to play with/against others in not just a 1v1 but also 2v2 or 4v4 in some cases. We hope to add more games to the collection if demand arises.
                                    </Text>
                                </Collapse>

                                <Collapse title="Does only the winner get rewarded?">
                                    <Text
                                    css={{
                                        fontFamily: 'bruce-forever',
                                        '@smMin':{
                                            fontSize: '$sm'
                                        },
                                        '@smMax':{
                                            fontSize:'0.75rem'
                                        }
                                    }}>
                                        Hell no! We would not want that. In our tournaments, top 4-8 teams get rewarded not just the winners. We want to make it not just fun but also rewarding for as many people as possible!
                                    </Text>
                                </Collapse>

                                <Collapse title="What is an Elite Tournament & how do I enter?">
                                    <Text
                                    css={{
                                        fontFamily: 'bruce-forever',
                                        '@smMin':{
                                            fontSize: '$sm'
                                        },
                                        '@smMax':{
                                            fontSize:'0.75rem'
                                        }
                                    }}>
                                        Elite Tournaments are invite-only tournaments - teams that win the Open-To-All tournaments automatically become 'Elites' and earn the chance to take part in the Elite Tournament. Higher buy-in, higher skill, higher cash-out, but also lesser teams, lesser risk, hence, higher chances of earning cash.
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