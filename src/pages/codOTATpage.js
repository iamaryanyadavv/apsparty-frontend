import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Grid, Text, Col, Image, Row, Button, Spacer, Modal, Input, Loading, Dropdown, Table } from "@nextui-org/react";
import Grey from '../assets/images/Grey.jpeg';
import Diamond from '../assets/images/diamond.png';
import Format from '../assets/images/tournament.png'
import Cash from '../assets/images/money.png'
import GoldMedal from '../assets/images/gold-medal.png'
import SilverMedal from '../assets/images/silver-medal.png'
import Schedule from '../assets/images/schedule.png'
import Time from '../assets/images/clock.png'
import Location from '../assets/images/placeholder.png'
import One from '../assets/images/number-1.png'
import Two from '../assets/images/number-2.png'
import Three from '../assets/images/number-3.png'
import Team from '../assets/images/team.png'

export default function CODTourneyPage(){
    const [PrevTourney, setPrevTourney] = useState(false)
    const [UpcomingTourney, setUpcomingTourney] = useState(true)

    const batchItems = [
        { key: "UG25", name: "UG 2025" },
        { key: "UG24", name: "UG 2024" },
        { key: "UG23", name: "UG 2023" },
        { key: "UG22", name: "UG 2022" },
        { key: "ASP23", name: "ASP 2023" },
        { key: "YIF", name: "YIF" },
        { key: "MA", name: "MA" },
        { key: "Faculty/Staff", name: "Faculty/Staff" },
    ];

    const proficiencyItems = [
        { key: "Amatuer", name: "Amateur" },
        { key: "Intermediate", name: "Intermediate" },
        { key: "Semi-Pro", name: "Semi-Pro" },
        { key: "Advanced", name: "Advanced" }
    ];

    const [teamName, setTeamName] = useState('')
    const [teamNameStatus, setTeamNameStatus] = useState('')

    const [participantone, setParticipantone] = useState('');
    const [participantoneStatus, setParticipantoneStatus] = useState('');

    const [participantonephone, setParticipantonephone] = useState('')
    const [participantonephoneStatus, setParticipantonephoneStatus] = useState('');
    
    const [participantoneemail, setParticipantoneemail] = useState('');
    const [participantoneemailStatus, setParticipantoneemailStatus] = useState('');

    const [participantonebatch, setParticipantonebatch] = useState('');
    const [participantonebatchStatus, setParticipantonebatchStatus] = useState('');

    const [participanttwo, setParticipanttwo] = useState('');
    const [participanttwoStatus, setParticipanttwoStatus] = useState('');

    const [participanttwophone, setParticipanttwophone] = useState('');
    const [participanttwophoneStatus, setParticipanttwophoneStatus] = useState('');

    const [participanttwoemail, setParticipanttwoemail] = useState('');
    const [participanttwoemailStatus, setParticipanttwoemailStatus] = useState('');

    const [participanttwobatch, setParticipanttwobatch] = useState('');
    const [participanttwobatchStatus, setParticipanttwobatchStatus] = useState('');

    const [proficiency, setProficiency] = useState('');
    const [proficiencyStatus, setProficiencyStatus] = useState('');

    const [AlreadyRegistered, setAlreadyRegistered] = useState(false);
    const [RegistrationDone, setRegistrationDone] = useState();

    const [LoadingModal, setLoadingModal] = useState(false);

    const [ModalVisibility, setModalVisibility] = useState(false);
    const [LoginLoader, setLoginLoader] = useState(false);
    
    const [signedin, setSignedIn] = useState(false);
    const [User, setUser] = useState({});

    const [paymentSC, setPaymentSC] = useState();
    const [paymentSCUploaded, setPaymentSCUploaded] = useState();

    const [RegSuccessStatus, setRegSuccessStatus] = useState(false);
    const [RegErrorStatus, setRegErrorStatus] = useState(false);

    const [isRegFull, setIsRegFull] = useState(false);

    const [RegisteredData, setRegisteredData] = useState()

    //http://localhost:3001 https://appapi-eln1.onrender.com

    const getRegisteredData = async () => {
        await fetch('https://appapi-eln1.onrender.com/cod/otat')
        .then(response=>response.json())
        .then(data=>{
            if(data.values){
                setRegisteredData(data.values)
            }
        })
    }

    const getRegisteredPlayersEmail1Data= async (userObject) =>{
        await fetch('https://appapi-eln1.onrender.com/cod/otat/emails1') 
        .then(response=>response.json())
        .then((data)=>{
            getRegisteredPlayersEmail2Data(userObject, data)
        })
    } 

    const getRegisteredPlayersEmail2Data = async (userObject, data1)=>{
        await fetch('https://appapi-eln1.onrender.com/cod/otat/emails2')
        .then(response=>response.json())
        .then((data2)=>{
            var emails = []
            if(data1.values && data2.values){
                emails = data1.values.flat().concat(data2.values.flat())
            }
            var isSignedin = false
            if(emails.length!==0)
            {
                if(emails.length>=64)
                {
                    setIsRegFull(true)
                }
                else if(emails.length<=63)
                {
                    for(var i = 0; i < emails.length; i++){
                        if(userObject.email!=emails[i]){
                            isSignedin=true
                        }
                        else{
                            isSignedin=false
                            break;
                        }
                    }
                    if(isSignedin===true){
                        setLoginLoader(false);
                        setSignedIn(true)
                        document.getElementById("GoogleButton").hidden = true;
                        setUser(userObject);
                        setParticipantone(userObject.given_name + " "+userObject.family_name)
                        setAlreadyRegistered(false)
                        setParticipantoneemail(userObject.email);
                        setParticipantoneStatus('success'); 
                        setParticipantoneemailStatus('success');
                    }
                    else{
                        setLoginLoader(false);
                        setSignedIn(false)
                        setAlreadyRegistered(true)
                        document.getElementById("GoogleButton").hidden = false;
                    }   
                }
            }
            else if(emails.length===0){
                setLoginLoader(false);
                setSignedIn(true)
                setUser(userObject);
                setParticipantone(userObject.given_name + " "+userObject.family_name)
                setAlreadyRegistered(false)
                setParticipantoneStatus('success');
                setParticipantoneemail(userObject.email)
                setParticipantoneemailStatus('success')
            }   
        })
    }

    function CheckForm(){
        if(teamName){
            setTeamNameStatus('success')
        }
        if(!teamName){
            setTeamNameStatus('error')
        }
        if(participantone){
            setParticipantoneStatus('success')
        }
        if(!participantone){
            setParticipantoneStatus('error')
        }
        if(participantonephone.length===10){
            setParticipantonephoneStatus('success')
        }
        if(participantonephone.length<10 || participantonephone.length>10 || !participantonephone){
            setParticipantonephoneStatus('error')
        }
        if(participantoneemail){
            setParticipantoneemailStatus('success')
        }
        if(!participantoneemail){
            setParticipantoneemailStatus('error')
            console.log('ERROR EAIL')
        }
        if(participanttwo){
            setParticipanttwoStatus('success')
        }
        if(!participanttwo){
            setParticipanttwoStatus('error')
        }
        if(participanttwophone.length===10){
            setParticipanttwophoneStatus('success')
        }
        if(participanttwophone.length<10 || participanttwophone.length>10 || !participanttwophone){
            setParticipanttwophoneStatus('error')
        }
        if(participanttwoemail.includes('@ashoka.edu.in')){
            setParticipanttwoemailStatus('success')
        }
        if(!participanttwoemail.includes('@ashoka.edu.in')){
            setParticipanttwoemailStatus('error')
        }
        if(participantonebatch)
        {
            setParticipantonebatchStatus('success')
        }
        if(!participantonebatch)
        {
            setParticipantonebatchStatus('error')
        }
        if(participanttwobatch)
        {
            setParticipanttwobatchStatus('success')
        }
        if(!participanttwobatch)
        {
            setParticipanttwobatchStatus('error')
        }
        if(paymentSC)
        {
            setPaymentSCUploaded('success')
        }
        if(!paymentSC)
        {
            setPaymentSCUploaded('error')
        }
        if(proficiency)
        {
            setProficiencyStatus('success')
        }
        if(!proficiency)
        {
            setProficiencyStatus('error')
        }
        if(teamName && participantone && participantonephone.length===10 && participantoneemail && participanttwo && participanttwophone.length===10 && participanttwoemail && participantonebatch && participanttwobatch && paymentSC && proficiency){
            return true
        }
    }

    async function sendForm(e)
    {
        if(teamName && participantone && participanttwo && participanttwoemail && participantoneemail && participantonephone && participanttwophone && participantonebatch && participanttwobatch && paymentSC && proficiency)
        { 
            console.log('Sending')
            const res = await fetch('https://appapi-eln1.onrender.com/cod/otat',{
            method: 'POST',
            headers:{"Content-type":"application/json"},
            body: JSON.stringify({
                teamname: teamName,
                participantone: participantone,
                participantonephone: participantonephone,
                participantoneemail: participantoneemail,
                participantonebatch: participantonebatch,
                participanttwo: participanttwo,
                participanttwophone: participanttwophone,
                participanttwoemail: participanttwoemail,
                participanttwobatch: participanttwobatch,
                proficiency: proficiency
            })
        })
        if (res.status===200){
            setLoadingModal(false)
            setRegSuccessStatus(true)
        }
        else{
            setLoadingModal(false)
            setRegErrorStatus(true)
            
        }
        }
    }

    // function to send payment image to googledrive
    async function sendPaymentImage(paymentdata){
        var paymentName = teamName + ' Payment'
        const PaymentData = new FormData();
        PaymentData.append('file', paymentdata, paymentName);
        if(PaymentData){
            await fetch('https://appapi-eln1.onrender.com/cod',{
                method: 'POST',
                headers:{Value: "multipart/form-data"},
                body: PaymentData
            })
        }
    }

    // funciton to handle callback for google sign in
    function handleCallbackresponse(response){
        
        var userObject = jwt_decode(response.credential)
        setLoginLoader(true);
        document.getElementById("GoogleButton").hidden = true;

        getRegisteredPlayersEmail1Data(userObject);
        
    }

    useEffect( ()=>{
        setLoginLoader(true)
        window.setTimeout(()=>{
            window.google.accounts.id.initialize({
                client_id: "532591952056-4jank4bub98j6l59t470dsfoc71h1gdv.apps.googleusercontent.com",
                callback: handleCallbackresponse
            });
            
            window.google.accounts.id.renderButton(
                document.getElementById("GoogleButton"),
                { theme: 'outlined', size: 'large', shape: 'pill',}
            ); 
            setLoginLoader(false)
        }, 2000)
        getRegisteredData();
    }, [])

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
                    '@smMin':{
                        fontSize: '$5xl',
                        color: 'White',
                        paddingTop: '60px'
                    },
                    '@smMax':{
                        fontSize: '$2xl',
                        paddingTop: '40px',
                        color: 'White',
                    },
                }}>
                    COD: BO3 🔪
                </Text>
                <Text
                css={{
                    fontFamily: 'bruce-forever',
                    '@smMin':{
                        fontSize: '$4xl',
                        paddingTop: '0px'
                    },
                    '@smMax':{
                        fontSize: '$xl',
                        padding: '10px 20px 0px 20px',
                    },
                    textGradient: '45deg, #388EE9 20%, #09EBEE 100%'
                }}>
                    Open-To-All Tournament
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
                    From features latest upcoming tournament to details of all previous tournaments, you can find all of it here. Participate and earn massive rewards!
                </Text>
            </Col>
            
        </Grid.Container>
        
        {/* Nav Buttons - Upcoming, Previous */}
        <Grid.Container
        css={{
            jc: 'center',
            alignItems: 'center',
        }}>
            <Grid 
            css={{
                padding: '10px'
            }}>
                <Button auto color="primary" rounded flat
                onPress={()=>{
                    setUpcomingTourney(false)
                    setPrevTourney(true)
                }}>
                    Previous Editions
                </Button>
            </Grid>
            <Grid 
            css={{
                padding: '10px'
            }}>
                <Button auto color="primary" rounded flat
                onPress={()=>{
                    setUpcomingTourney(true)
                    setPrevTourney(false)
                }}>
                    Upcoming Tournament
                </Button>
            </Grid>
            
        </Grid.Container>

        {UpcomingTourney && !PrevTourney && 
        <>
            {/* Details */}
            <Grid.Container 
            css={{
                jc: 'center',
                textAlign: 'center',
                margin: '30px 0px 30px 0px',
                backgroundColor: 'rgb(20,20,20)',
                borderRadius: '20px'
            }}>
                <Grid>

                    {/* Heading */}
                    <Grid.Container
                    css={{
                        jc: 'center',
                        textAlign: 'center'
                    }}>
                        <Text
                        css={{
                            fontFamily: 'bruce-forever',
                            '@smMin':{
                                fontSize: '$3xl',
                                color: 'White',
                                paddingTop: '40px'
                            },
                            '@smMax':{
                                fontSize: '$lg',
                                paddingTop: '40px',
                                color: 'White',
                            },
                            textGradient: '45deg, #388EE9 20%, #09EBEE 100%',
                        }}>
                            Upcoming Tournament
                        </Text>
                    </Grid.Container>

                    {/* Content */}
                    <Grid.Container
                    css={{
                        jc: 'center',
                        alignItems: 'center',
                    }}>
                        {/* Poster */}
                        <Grid
                        css={{
                            margin: '40px 10px',
                            jc: 'center'
                        }}>
                            <Image
                            css={{
                                '@smMin':{
                                    width:'500px',
                                    height: '750px',
                                },
                                '@smMax':{
                                    width:'200px',
                                    height: '300px',
                                },
                                borderRadius: '25% 10% / 05% 20%',
                                objectFit: 'cover'
                            }} src={Grey}  />
                        </Grid>
                        
                        {/* Details */}
                        <Grid 
                        css={{
                            margin: '40px 10px',
                            jc: 'center',
                            '@smMin':{
                                width: '800px'
                            },
                        }}>
                            <Col
                            css={{
                                textAlign: 'left'
                            }}>
                                {/* Name */}
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                                    '@smMin':{
                                        fontSize: '$2xl',
                                        color: 'White',
                                        paddingTop: '40px'
                                    },
                                    '@smMax':{
                                        fontSize: '$lg',
                                        paddingTop: '40px',
                                        color: 'White',
                                    },
                                    textGradient: "45deg, $red600 50%, $red800 100%",
                                    paddingLeft: '40px'
                                }}>
                                    COD OPEN 1.0
                                </Text>
                                <Row>
                                    <img src={Diamond} width={30} height={30} style={{alignItems: 'center', margin: '10px 10px 0px 0px'}}/>
                                    <Text 
                                    css={{
                                        fontFamily: 'bruce-forever',
                                        '@smMin':{
                                            fontSize: '$md',
                                            color: 'White',
                                            paddingTop: '10px'
                                        },
                                        '@smMax':{
                                            fontSize: '$xs',
                                            paddingTop: '10px',
                                            color: 'White',
                                        },
                                    }}>
                                        First edition of the COD Open-To-All Tournaments.
                                    </Text>
                                </Row>

                                {/* Time and Loc */}
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                                    '@smMin':{
                                        fontSize: '$2xl',
                                        color: 'White',
                                        paddingTop: '40px'
                                    },
                                    '@smMax':{
                                        fontSize: '$lg',
                                        paddingTop: '40px',
                                        color: 'White',
                                    },
                                    textGradient: "45deg, $yellow600 40%, $yellow800 100%" ,
                                    paddingLeft: '40px'
                                }}>
                                    Time & Place
                                </Text>
                                <Col
                                css={{
                                    marginBottom: '30px'
                                }}>
                                    <Row>
                                        <img src={Time} width={30} height={30} style={{alignItems: 'center', margin: '10px 10px 0px 0px'}}/>
                                        <Text 
                                        css={{
                                            fontFamily: 'bruce-forever',
                                            '@smMin':{
                                                fontSize: '$md',
                                                color: 'White',
                                                paddingTop: '10px'
                                            },
                                            '@smMax':{
                                                fontSize: '$xs',
                                                paddingTop: '10px',
                                                color: 'White',
                                            },
                                        }}>
                                            9 PM to 12 AM
                                        </Text>  
                                    </Row>
                                    <Row>
                                        <img src={Schedule} width={30} height={30} style={{alignItems: 'center', margin: '10px 10px 0px 0px'}}/>
                                        <Text 
                                        css={{
                                            fontFamily: 'bruce-forever',
                                            '@smMin':{
                                                fontSize: '$md',
                                                color: 'White',
                                                paddingTop: '10px'
                                            },
                                            '@smMax':{
                                                fontSize: '$xs',
                                                paddingTop: '10px',
                                                color: 'White',
                                            },
                                        }}>
                                            3rd to 6th April, 2023
                                        </Text>
                                    </Row>
                                    <Row>
                                        <img src={Location} width={30} height={30} style={{alignItems: 'center', margin: '10px 10px 0px 0px'}}/>
                                        <Text 
                                        css={{
                                            fontFamily: 'bruce-forever',
                                            '@smMin':{
                                                fontSize: '$md',
                                                color: 'White',
                                                paddingTop: '10px'
                                            },
                                            '@smMax':{
                                                fontSize: '$xs',
                                                paddingTop: '10px',
                                                color: 'White',
                                            },
                                        }}>
                                            RH3 Common Room
                                        </Text>
                                    </Row>
                                </Col>
                                
                                {/* Format */}
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                                    '@smMin':{
                                        fontSize: '$2xl',
                                        color: 'White',
                                        paddingTop: '40px'
                                    },
                                    '@smMax':{
                                        fontSize: '$lg',
                                        paddingTop: '40px',
                                        color: 'White',
                                    },
                                    textGradient: "45deg, $green600 40%, $green800 100%",
                                    paddingLeft: '40px'
                                }}>
                                    Format
                                </Text>
                                <Col
                                css={{
                                    marginBottom: '30px'
                                }}>
                                    <Row>
                                        <img src={Team} width={30} height={30} style={{alignItems: 'center', margin: '10px 10px 0px 0px'}}/>
                                        <Text 
                                        css={{
                                            fontFamily: 'bruce-forever',
                                            '@smMin':{
                                                fontSize: '$md',
                                                color: 'White',
                                                paddingTop: '10px'
                                            },
                                            '@smMax':{
                                                fontSize: '$xs',
                                                paddingTop: '10px',
                                                color: 'White',
                                            },
                                        }}>
                                            Duos (2v2)
                                        </Text>  
                                    </Row>
                                    <Row>
                                        <img src={Format} width={30} height={30} style={{alignItems: 'center', margin: '10px 10px 0px 0px'}}/>
                                        <Text 
                                        css={{
                                            fontFamily: 'bruce-forever',
                                            '@smMin':{
                                                fontSize: '$md',
                                                color: 'White',
                                                paddingTop: '10px'
                                            },
                                            '@smMax':{
                                                fontSize: '$xs',
                                                paddingTop: '10px',
                                                color: 'White',
                                            },
                                        }}>
                                            64 team bracket. Straight knockouts.
                                        </Text>
                                    </Row>
                                </Col>

                                {/* Prizes */}
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                                    '@smMin':{
                                        fontSize: '$2xl',
                                        color: 'White',
                                        paddingTop: '40px',
                                    },
                                    '@smMax':{
                                        fontSize: '$lg',
                                        paddingTop: '40px',
                                        color: 'White',
                                    },
                                    textGradient: '45deg, #388EE9 20%, #09EBEE 100%',
                                    paddingLeft: '40px'
                                }}>
                                    Prizes
                                </Text>
                                <Col
                                css={{
                                    marginBottom: '30px'
                                }}>
                                    <Row>
                                        <img src={Cash} width={30} height={30} style={{alignItems: 'center', margin: '10px 10px 0px 0px'}}/>
                                        <Text 
                                        css={{
                                            fontFamily: 'bruce-forever',
                                            '@smMin':{
                                                fontSize: '$md',
                                                color: 'White',
                                                paddingTop: '10px'
                                            },
                                            '@smMax':{
                                                fontSize: '$xs',
                                                paddingTop: '10px',
                                                color: 'White',
                                            },
                                        }}>
                                            Total prize pool - 8,000.
                                        </Text>  
                                    </Row>
                                    <Row>
                                        <img src={GoldMedal} width={30} height={30} style={{alignItems: 'center', margin: '10px 10px 0px 0px'}}/>
                                        <Text 
                                        css={{
                                            fontFamily: 'bruce-forever',
                                            '@smMin':{
                                                fontSize: '$md',
                                                color: 'White',
                                                paddingTop: '10px'
                                            },
                                            '@smMax':{
                                                fontSize: '$xs',
                                                paddingTop: '10px',
                                                color: 'White',
                                            },
                                        }}>
                                            Winners - 5k
                                        </Text>
                                    </Row>
                                    <Row>
                                        <img src={SilverMedal} width={30} height={30} style={{alignItems: 'center', margin: '10px 10px 0px 0px'}}/>
                                        <Text 
                                        css={{
                                            fontFamily: 'bruce-forever',
                                            '@smMin':{
                                                fontSize: '$md',
                                                color: 'White',
                                                paddingTop: '10px'
                                            },
                                            '@smMax':{
                                                fontSize: '$xs',
                                                paddingTop: '10px',
                                                color: 'White',
                                            },
                                        }}>
                                            Runners Up - 3k
                                        </Text>
                                    </Row>
                                </Col>

                                {/* Rules */}
                                <Text 
                                css={{
                                    fontFamily: 'bruce-forever',
                                    '@smMin':{
                                        fontSize: '$2xl',
                                        color: 'White',
                                        paddingTop: '40px'
                                    },
                                    '@smMax':{
                                        fontSize: '$lg',
                                        paddingTop: '40px',
                                        color: 'White',
                                    },
                                    textGradient: "45deg, $purple600 -20%, $pink600 100%",
                                    paddingLeft: '40px'
                                }}>
                                    Rules
                                </Text>
                                <Col
                                css={{
                                    marginBottom: '30px'
                                }}>
                                    <Row>
                                        <img src={One} width={30} height={30} style={{alignItems: 'center', margin: '10px 10px 0px 0px'}}/>
                                        <Text 
                                        css={{
                                            fontFamily: 'bruce-forever',
                                            '@smMin':{
                                                fontSize: '$md',
                                                color: 'White',
                                                paddingTop: '10px'
                                            },
                                            '@smMax':{
                                                fontSize: '$xs',
                                                paddingTop: '10px',
                                                color: 'White',
                                            },
                                        }}>
                                            Routine TDM, nothing fancy. Winner goes through.
                                        </Text>  
                                    </Row>
                                    <Row>
                                        <img src={Two} width={30} height={30} style={{alignItems: 'center', margin: '10px 10px 0px 0px'}}/>
                                        <Text 
                                        css={{
                                            fontFamily: 'bruce-forever',
                                            '@smMin':{
                                                fontSize: '$md',
                                                color: 'White',
                                                paddingTop: '10px'
                                            },
                                            '@smMax':{
                                                fontSize: '$xs',
                                                paddingTop: '10px',
                                                color: 'White',
                                            },
                                        }}>
                                            Any kind or form of cheating will result in the team being banned from all APP tournaments.
                                        </Text>
                                    </Row>
                                    <Row>
                                        <img src={Three} width={30} height={30} style={{alignItems: 'center', margin: '10px 10px 0px 0px'}}/>
                                        <Text 
                                        css={{
                                            fontFamily: 'bruce-forever',
                                            '@smMin':{
                                                fontSize: '$md',
                                                color: 'White',
                                                paddingTop: '10px'
                                            },
                                            '@smMax':{
                                                fontSize: '$xs',
                                                paddingTop: '10px',
                                                color: 'White',
                                            },
                                        }}>
                                            Showing up 2 minutes later than the fixture timing will result in a forfeit and the opposite team goes through. In case both teams are absent the team that shows up first goes through.
                                        </Text>
                                    </Row>
                                </Col>

                            </Col>
                        </Grid>

                    </Grid.Container>

                    

                </Grid>
            </Grid.Container>

            {/* Registration Form */}
            <Grid.Container 
            css={{
                jc: 'center',
                textAlign: 'center',
                margin: '30px 0px 30px 0px',
                backgroundColor: 'rgb(20,20,20)',
                borderRadius: '20px'
            }}>
                <Grid>
                    {/* Form */}
                                    
                        {/* Heading */}
                        <Grid.Container
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            fontFamily: 'bruce-forever'
                        }}>
                            <Text 
                            css={{
                                textAlign: 'center',
                                fontFamily: 'bruce-forever',
                                '@smMin':{
                                    fontSize: '$3xl'
                                },
                                '@smMax':{
                                    fontSize: '$3xl'
                                },
                                textGradient: '45deg, #388EE9 20%, #09EBEE 100%',
                                padding: '40px 0px 0px 0px'
                            }}>
                                Registration
                            </Text>
                            <Text
                            css={{
                                textAlign: 'center',
                                fontFamily: 'bruce-forever',
                                '@smMin':{
                                    fontSize: '$xl'
                                },
                                '@smMax':{
                                    fontSize: '$xs'
                                },
                                padding: '2.5% 20% 2% 20%'
                            }}>
                                Fill out the form* below and pay the required registration fee to complete your registration!
                            </Text>

                        </Grid.Container>
                        
                        {/* Input */}
                        <Grid.Container
                        css={{
                            jc: 'center',
                            marginTop: '20px'
                        }}>
                            
                            <div className="GoogleButton" id='GoogleButton'></div>
                        </Grid.Container>

                        {Object.keys(User).length != 0 && //Display welcome message to user if User Object is not empty
                        <div>
                            <Grid.Container gap={0}
                            css={{
                                jc: 'center',
                                alignItems: 'center'
                            }}>
                                <Text
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    fontFamily: 'bruce-forever',
                                    '@smMin':{
                                        fontSize: '$3xl'
                                    },
                                    '@smMax':{
                                        fontSize: '$xl'
                                    },
                                    color: '$green600'
                                }}>
                                    Welcome {User.name}!
                                </Text>
                            </Grid.Container>

                            <Grid.Container
                            css={{
                                jc: 'center',
                                alignItems: 'center'
                            }}>
                                
                                <Text
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    fontFamily: 'bruce-forever',
                                    '@smMin':{
                                        fontSize: '$xl'
                                    },
                                    '@smMax':{
                                        fontSize: '$sm'
                                    },
                                    color: '$gray900'
                                }}>
                                    Signed in using: {User.email}
                                </Text>
                                
                            </Grid.Container>

                            <Modal
                            open={signedin}
                            closeButton
                            css={{
                                maxWidth: '100vw',
                                '@smMin':{
                                    maxWidth: '400px'
                                },
                                '@xsMax':{
                                    maxWidth: '100vw'
                                }
                            }}
                            >
                                    <Modal.Header
                                    css={{
                                        paddingTop: '0px',
                                    }}>
                                        <Col>
                                            <Text 
                                            css={{
                                                textAlign: 'center',
                                                fontFamily: 'bruce-forever',
                                                '@smMin':{
                                                    fontSize: '$xl'
                                                },
                                                '@smMax':{
                                                    fontSize: '$sm'
                                                },
                                                color: '$green600',
                                                borderStyle: 'solid',
                                                borderWidth: '0px 0px 1px 0px',
                                                borderColor: '$gray800'
                                            }}>
                                                Success!
                                            </Text>
                                            
                                        </Col>
                                    </Modal.Header>
                                    <Modal.Body
                                    css={{
                                        paddingTop: '0px'
                                    }}>
                                        <Text 
                                        css={{
                                            textAlign: 'center',
                                            fontFamily: 'bruce-forever',
                                            '@smMin':{
                                                fontSize: '$lg'
                                            },
                                            '@smMax':{
                                                fontSize: '$sm'
                                            },
                                            color: 'white',
                                        }}>
                                            You have been successfully logged in as {User.name}
                                        </Text>
                                    </Modal.Body>
                                    
                            </Modal>
                        
                        </div>
                        }

                        {!signedin && !LoginLoader && //Show login buttons when not signed in and LoginLoader===false
                        <div>
                            
                            <Grid.Container gap={0}
                            css={{
                                jc: 'center',
                                alignItems: 'center'
                            }}>

                                <Grid
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Text
                                    css={{
                                        paddingTop: '5px',
                                        fontFamily: 'bruce-forever',
                                        '@smMin':{
                                            fontSize: '$md'
                                        },
                                        '@xsMax':{
                                            fontSize: '$xs',
                                            margin: '0px 20px'
                                        }
                                    }}>
                                        *This form is open to only those affiliated with Ashoka University.
                                    </Text>
                                </Grid>
                                
                            </Grid.Container>

                            <Grid.Container
                            css={{
                                jc: 'center',
                                alignItems: 'center'
                            }}>

                                <Grid
                                css={{
                                    jc: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}>
                                    <Text
                                    css={{
                                        paddingBottom: '15px',
                                        fontFamily: 'bruce-forever',
                                        '@smMin':{
                                            fontSize: '$md'
                                        },
                                        '@xsMax':{
                                            fontSize: '$xs',
                                            margin: '0px 20px'
                                        }
                                    }}>
                                        Please login via your @ashoka.edu.in email ID for form access.
                                    </Text>
                                </Grid>
                                
                            </Grid.Container> 
                            
                        </div>
                        }

                        {LoginLoader && //Show loader when LoginLoader===true - for the lag between loggin in and shoing welcome message
                        <Grid.Container
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                        }}>
                            <Grid>
                                <Loading
                                size="xl"
                                color='white'

                                />
                            </Grid>
                        </Grid.Container>
                        }

                        {AlreadyRegistered && //If user is already registered, show error message
                        <div>
                            <Grid.Container
                            css={{
                                jc: 'center',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}>
                                <Modal
                                open={AlreadyRegistered}
                                closeButton
                                css={{
                                    maxWidth: '100vw',
                                }}
                                onClose={()=>{setAlreadyRegistered(false); window.location.pathname='/cod/otat'; }}
                                >
                                        <Modal.Header
                                        css={{
                                            paddingTop: '0px',
                                        }}>
                                            <Col>
                                                <Text 
                                                css={{
                                                    textAlign: 'center',
                                                    fontFamily: 'bruce-forever',
                                                    '@smMin':{
                                                        fontSize: '$xl'
                                                    },
                                                    '@smMax':{
                                                        fontSize: '$sm'
                                                    },
                                                    color: '$red600',
                                                    borderStyle: 'solid',
                                                    borderWidth: '0px 0px 1px 0px',
                                                    borderColor: '$gray800'
                                                }}>
                                                    Error!
                                                </Text>
                                                
                                            </Col>
                                        </Modal.Header>
                                        <Modal.Body
                                        css={{
                                            paddingTop: '0px'
                                        }}>
                                            <Text 
                                            css={{
                                                textAlign: 'center',
                                                fontFamily: 'bruce-forever',
                                                '@smMin':{
                                                    fontSize: '$lg'
                                                },
                                                '@smMax':{
                                                    fontSize: '$sm'
                                                },
                                                color: 'white',
                                            }}>
                                                It seems that you have already registered with this email address.
                                            </Text>
                                        </Modal.Body>
                                        
                                </Modal>
                            </Grid.Container>
                        </div>
                        }

                        {/* Team Name */}
                        <Grid.Container gap={0}
                                css={{
                                    jc: 'center',
                                    alignItems: 'center'
                                }}>
                                    {/* Teamname */}
                                    <Grid 
                                    css={{
                                        jc: 'center',
                                        padding: '20px 0px 0px 0px'
                                    }}>
                                        <Text
                                        css={{
                                            jc:'center',
                                            textAlign: 'center',
                                            fontFamily: 'bruce-forever',
                                            '@smMin':{
                                                fontSize: '$3xl'
                                            },
                                            '@smMax':{
                                                fontSize: '$2xl'
                                            },
                                        }}>Duo Name</Text>

                                        <Grid.Container gap={0}
                                        css={{
                                            jc: 'center',
                                        }}>
                                            <Grid
                                            css={{
                                                padding: '20px'
                                            }}>
                                                <Input disabled={!signedin} status={teamNameStatus} onChange={(event)=>{
                                                    setTeamName(event.target.value)
                                                    if(event.target.value){
                                                        setTeamNameStatus('success')
                                                    }
                                                    else if(!event.target.value){
                                                        setTeamNameStatus('error')
                                                    }
                                                    }} animated={true} placeholder='Team Name' type='text' bordered  clearable required/>
                                            </Grid>

                                        </Grid.Container>
                                    </Grid>

                        </Grid.Container>     
                    
                        {/* Participant 1 */}
                        <Grid.Container gap={0}
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            padding: '20px 0px 0px 0px'
                        }}>
                            <Text
                            css={{
                                jc:'center',
                                textAlign: 'center',
                                fontFamily: 'bruce-forever',
                                '@smMin':{
                                    fontSize: '$3xl'
                                },
                                '@smMax':{
                                    fontSize: '$2xl'
                                },
                            }}>Participant 1</Text>

                            <Grid.Container gap={0}
                            css={{
                                jc: 'center',
                            }}>
                                {/* Participant 1 */}
                                {participantone &&
                                <Grid
                                css={{
                                    padding: '20px'
                                }}>
                                    <Input onChange={(event)=>{
                                        participantone(event.target.value);
                                        if(event.target.value) {
                                            setParticipantoneStatus('success')
                                        }
                                        else if(!event.target.value){
                                            setParticipantoneStatus('error')
                                        }
                                    }} 
                                    width="200px" animated={true}  type='text' bordered status={participantoneStatus} disabled={!signedin} value={participantone} />
                                </Grid>
                                }
                                {!participantone && 
                                <Grid 
                                css={{
                                    padding: '20px'
                                }}>
                                    <Input onChange={(event)=>{
                                        setParticipantone(event.target.value)
                                        if(event.target.value) {
                                            setParticipantoneStatus('success')
                                        }
                                        else if(!event.target.value){
                                            setParticipantoneStatus('error')
                                        }
                                        }} 
                                        width="200px" animated={true}  type='text' bordered status={participantoneStatus} disabled={!signedin} placeholder='Name' />
                                </Grid>
                                }
                                {/* Participant One Phone */}
                                
                                <Grid 
                                css={{
                                    padding: '20px'
                                }}> 
                                    <Input onChange={(event)=>{
                                        setParticipantonephone(event.target.value)
                                        if(event.target.value.length>10 || event.target.value.length<10){
                                            setParticipantonephoneStatus('error')
                                        }
                                        else if(event.target.value.length===10){
                                            setParticipantonephoneStatus('success')
                                        }
                                    }}
                                    
                                    width="200px" animated={true}  type='text' bordered status={participantonephoneStatus} disabled={!signedin}
                                    placeholder='Phone Number' clearable required  />
                                </Grid>
                                <Grid
                                css={{
                                    textAlign: 'center',
                                    padding: '20px'
                                }}>
                                    <Col>
                                        <Input onChange={(event)=>{
                                        participantoneemail(event.target.value);
                                        if(event.target.value) {
                                            setParticipantoneemailStatus('success')
                                        }
                                        else if(!event.target.value){
                                            setParticipantoneemailStatus('error')
                                        }
                                    }}  width="300px" animated={true}  type='text' bordered status={participantoneemailStatus} readOnly disabled={!signedin} value={participantoneemail} placeholder='Email ID' />
                                    </Col>
                                </Grid>
                        
                            <Grid
                            css={{
                                jc:'center',
                                padding: '20px'
                            }}>
                                <Dropdown isDisabled= {!signedin} >
                                    {participantonebatch === '' 
                                    ? <Dropdown.Button className="dp-btn" color={participantonebatchStatus} default light >Batch</Dropdown.Button>
                                    : <Dropdown.Button className="dp-btn" color={participantonebatchStatus} default light >{participantonebatch}</Dropdown.Button>
                                    }
                                    <Dropdown.Menu 
                                    onAction={(event)=>{
                                        setParticipantonebatch(event);
                                        if(event){
                                            setParticipantonebatchStatus('success');
                                        }
                                    }} disallowEmptySelection selectionMode="single" selectedKeys={participantonebatch} aria-label="Dynamic Actions" items={batchItems}>
                                        {(item) => (
                                        <Dropdown.Item
                                            key={item.key}
                                            color={item.key === "delete" ? "error" : "default"}
                                        >
                                            {item.name}
                                        </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Grid>

                            </Grid.Container>
                        </Grid.Container>

                        {/* Participant Two */}
                        <Grid.Container gap={0}
                        css={{
                            jc: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                            css={{
                                jc:'center',
                                textAlign: 'center',
                                fontFamily: 'bruce-forever',
                                '@smMin':{
                                    fontSize: '$3xl'
                                },
                                '@smMax':{
                                    fontSize: '$2xl'
                                },
                            }}>Participant 2</Text>

                            <Grid.Container gap={0}
                            css={{
                                jc: 'center',
                            }}>
                                
                                <Grid 
                                css={{
                                    padding: '20px'
                                }}>
                                    <Input onChange={(event)=>{
                                        setParticipanttwo(event.target.value);
                                        if(event.target.value) {
                                            setParticipanttwoStatus('success')
                                        }
                                        else if(!event.target.value){
                                            setParticipanttwoStatus('error')
                                        }
                                    }} 
                                    width="200px" animated={true}  type='text' bordered  status={participanttwoStatus} disabled={!signedin} placeholder='Full Name' />
                                </Grid>
                                <Grid 
                                css={{
                                    padding: '20px'
                                }}> 
                                    <Input onChange={(event)=>{
                                        setParticipanttwophone(event.target.value)
                                        if(event.target.value.length===10){
                                            setParticipanttwophoneStatus('success')
                                        }
                                        else{
                                            setParticipanttwophoneStatus('error')
                                        }
                                        
                                        }} 
                                        width="200px" animated={true}  type='text' bordered status={participanttwophoneStatus} disabled={!signedin} placeholder='Phone Number' />
                                </Grid>
                                <Grid 
                                css={{
                                    padding: '20px'
                                }}> 
                                    <Input onChange={(event)=>{
                                        setParticipanttwoemail(event.target.value)
                                        if(event.target.value.includes('@ashoka.edu.in')){
                                            setParticipanttwoemailStatus('success')
                                        }
                                        else{
                                            setParticipanttwoemailStatus('error')
                                        }
                                        
                                        }} 
                                        width="300px" animated={true}  type='text' bordered status={participanttwoemailStatus} disabled={!signedin} placeholder='Email ID' />
                                </Grid>
                        
                            <Grid
                            css={{
                                jc:'center',
                                padding: '20px'
                            }}>
                                <Dropdown isDisabled= {!signedin}>
                                    {participanttwobatch === '' 
                                    ? <Dropdown.Button className="dp-btn" color={participanttwobatchStatus} default light>Batch</Dropdown.Button>
                                    : <Dropdown.Button className="dp-btn" color={participanttwobatchStatus} default light>{participanttwobatch}</Dropdown.Button>
                                    }
                                    <Dropdown.Menu 
                                    onAction={(event)=>{
                                        setParticipanttwobatch(event);
                                        if(event){
                                            setParticipanttwobatchStatus('success');
                                        }
                                    }} disallowEmptySelection selectionMode="single" selectedKeys={participanttwobatch} aria-label="Dynamic Actions" items={batchItems}>
                                        {(item) => (
                                        <Dropdown.Item
                                            key={item.key}
                                            color={item.key === "delete" ? "error" : "default"}
                                        >
                                            {item.name}
                                        </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Grid>

                            </Grid.Container>                            
                        </Grid.Container>

                        {/* Proficiency */}
                        <Grid.Container gap={0}
                        css={{
                            jc: 'center',
                            alignItems: 'center'
                        }}>
                            <Grid 
                            css={{
                                jc: 'center',
                                padding: '20px'
                            }}>
                                <Text
                                css={{
                                    jc:'center',
                                    textAlign: 'center',
                                    fontFamily: 'bruce-forever',
                                    '@smMin':{
                                        fontSize: '$3xl'
                                    },
                                    '@smMax':{
                                        fontSize: '$2xl'
                                    },
                                }}>
                                    Proficiency
                                </Text>

                                <Grid.Container gap={0}
                                css={{
                                    jc: 'center',
                                }}>
                                    <Grid 
                                    css={{
                                        padding: '20px'
                                    }}>
                                        <Dropdown isDisabled= {!signedin} >
                                        {proficiency === '' 
                                        ? <Dropdown.Button className="dp-btn" color={proficiencyStatus} default light >Proficiency</Dropdown.Button>
                                        : <Dropdown.Button className="dp-btn" color={proficiencyStatus} default light >{proficiency}</Dropdown.Button>
                                        }
                                            <Dropdown.Menu 
                                            onAction={(event)=>{
                                                setProficiency(event);
                                                if(event){
                                                    setProficiencyStatus('success');
                                                }
                                            }} disallowEmptySelection selectionMode="single" selectedKeys={proficiency} aria-label="Dynamic Actions" items={proficiencyItems}>
                                                {(item) => (
                                                <Dropdown.Item
                                                    key={item.key}
                                                    color={item.key === "delete" ? "error" : "default"}
                                                >
                                                    {item.name}
                                                </Dropdown.Item>
                                                )}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Grid>

                                </Grid.Container>
                            </Grid>

                        </Grid.Container> 

                        {/* payment details */}
                        <Grid.Container gap={0}
                        css={{
                            jc: 'center',
                            alignItems: 'center',
                            paddingBottom:'20px'
                        }}>
                            <Col>
                                {paymentSCUploaded==='error' && 
                                <Text
                                css={{
                                    jc: 'center',
                                    textAlign: 'center',
                                    color: '$red600',
                                    fontFamily: 'bruce-forever',
                                    '@smMin':{
                                        fontSize: '$xl'
                                    },
                                    '@smMax':{
                                        fontSize: '$lg'
                                    },
                                }}>
                                    Please upload payment screenshot from your UPI service app!
                                </Text>
                                }
                                
                                <Text
                                css={{
                                    jc:'center',
                                    textAlign: 'center',
                                    fontFamily: 'bruce-forever',
                                    '@smMin':{
                                        fontSize: '$3xl'
                                    },
                                    '@smMax':{
                                        fontSize: '$2xl'
                                    },
                                }}>
                                    Payment
                                </Text>
                                <Text 
                                css={{
                                    jc:'center',
                                    textAlign: 'center',
                                    fontFamily: 'bruce-forever',
                                    '@smMin':{
                                        fontSize: '$md',
                                        padding: '0px 30%'
                                    },
                                    '@smMax':{
                                        fontSize: '$sm',
                                        padding: '0px 20px'
                                    },
                                    paddingTop: '10px'
                                }}>
                                    Please pay the amount (350) to Krishna Bala (APP Business Head), via PayTM or GPay.
                                </Text>
                                <Text 
                                css={{
                                    jc:'center',
                                    textAlign: 'center',
                                    fontFamily: 'bruce-forever',
                                    '@smMin':{
                                        fontSize: '$md'
                                    },
                                    '@smMax':{
                                        fontSize: '$sm'
                                    },
                                }}>
                                    (+91 7338934003, UPI ID: krishnaspacebala@okicici)
                                </Text>
                            </Col>
                            <Grid
                            css={{
                                jc: 'center',
                                width: 'max-content'
                            }}>
                                <input disabled={!signedin} onChange={(event)=>{setPaymentSC(event.target.files[0]); }} className="photobtn" animated={'true'} type='file' accept="image/*" required/>
                            </Grid>
                            
                        </Grid.Container>

                        {/* payment button */}
                        <Grid.Container gap={0}
                        css={{
                            jc: 'center',
                        }}>
                            <Grid>
                                <Button auto rounded disabled={!signedin || isRegFull}
                                css={{
                                    background: '$gray900',
                                    margin: '20px'
                                }}
                                onPress={()=>{
                                    if(paymentSC){
                                        setPaymentSCUploaded(true)
                                        console.log('uploaded')
                                    }
                                    if(!paymentSC){
                                        setPaymentSCUploaded(false)
                                        console.log('not')
                                        console.log(paymentSCUploaded)
                                    }
                                    setModalVisibility(CheckForm());
                                    
                                }}>
                                    <Text
                                    css={{
                                        color: 'Black',
                                        textAlign: 'center',
                                        fontFamily: 'bruce-forever',
                                        '@smMin':{
                                            fontSize: '$xl'
                                        },
                                        '@smMax':{
                                            fontSize: '$md'
                                        },
                                    }}>
                                        Register
                                    </Text>
                                </Button>

                                <Modal
                                open={LoadingModal}>
                                    <Modal.Body>
                                        <Loading color='white' size={"xl"} />
                                    </Modal.Body>
                                </Modal>

                                <Modal
                                closeButton
                                open={ModalVisibility}
                                onClose={()=>{
                                    setModalVisibility(false)
                                }}
                                css={
                                    {
                                        display:'flex',
                                        flexWrap:'nowrap',
                                    }
                                }
                                
                                >

                                    <Modal.Header>
                                        <Col>
                                            <Text
                                            css={{
                                                textAlign: 'center',
                                                fontFamily: 'bruce-forever',
                                                '@smMin':{
                                                    fontSize: '$xl'
                                                },
                                                '@xsMax':{
                                                    fontSize: '$md'
                                                },
                                                color: '$yellow600'
                                            }}>
                                                Team Details
                                            </Text>
                                            <Text
                                            css={{
                                                textAlign: 'center',
                                                fontFamily: 'bruce-forever',
                                                '@smMin':{
                                                    fontSize: '$sm'
                                                },
                                                '@xsMax':{
                                                    fontSize: '$xs'
                                                },
                                                color: '$gray900'
                                            }}>
                                                Check your details one last time before registering!
                                            </Text>
                                        </Col>
                                        
                                    </Modal.Header>

                                    <Modal.Body>


                                        <Grid.Container
                                        css={{
                                            jc: 'center',
                                            alignItems: 'center',
                                            display:'flex',
                                            flexDirection: 'column',
                                            justifyContent:'center',
                                            alignContent:'center',
                                            flexWrap:'nowrap'
                                        
                                        }}>
                                            <Grid> 
                                            <Grid css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            marginBottom: 0
                                                        }}>
                                                        <Row
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            marginBottom: 0
                                                        }}>
                                                            <Text 
                                                            css={{
                                                                textAlign: 'center',
                                                                fontFamily: 'bruce-forever',
                                                                '@smMin':{
                                                                    fontSize: '$xl'
                                                                },
                                                                '@xsMax':{
                                                                    fontSize: '$md'
                                                                },
                                                                color: '$yellow600'
                                                            }}>
                                                                Participant 1
                                                            </Text>
                                                        </Row>
                                                    </Grid>
                                                <Grid.Container gap={0.5}
                                                css={{
                                                    jc: 'center',
                                                    alignItems: 'center',
                                                    textAlign: 'center'
                                                }}>
                                                    </Grid.Container> 
                                                    <Grid>
                                                    <Grid>
                                                        <Row
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center'
                                                        }}>
                                                            <Text
                                                            css={{
                                                                textAlign: 'center',
                                                                fontFamily: 'bruce-forever',
                                                                '@smMin':{
                                                                    fontSize: '$lg'
                                                                },
                                                                '@xsMax':{
                                                                    fontSize: '$sm'
                                                                },
                                                            }}>
                                                                {participantone}
                                                            </Text>
                                                        </Row>
                                                    </Grid>
                                                        {participantoneemail && 
                                                            <Row
                                                            css={{
                                                                jc: 'center',
                                                                textAlign: 'center'
                                                            }}>
                                                                <Text 
                                                                css={{
                                                                    textAlign: 'center',
                                                                    fontFamily: 'bruce-forever',
                                                                    '@smMin':{
                                                                        fontSize: '$md'
                                                                    },
                                                                    '@xsMax':{
                                                                        fontSize: '$xs'
                                                                    },
                                                                }}>
                                                                    {participantoneemail}
                                                                </Text>
                                                            </Row>
                                                        }
                                                    </Grid>
                                                    <Grid>
                                                        <Row
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            display: 'flex',
                                                            flexDirection: 'row'
                                                        }}>
                                                            <Text
                                                            css={{
                                                                textAlign: 'center',
                                                                fontFamily: 'bruce-forever',
                                                                '@smMin':{
                                                                    fontSize: '$md'
                                                                },
                                                                '@xsMax':{
                                                                    fontSize: '$xs'
                                                                },
                                                            }}>
                                                                {participantonephone}
                                                            </Text>
                                                        </Row>
                                                        <Grid/>
                                                    <Grid>
                                                        <Row
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center'
                                                        }}>
                                                            <Text
                                                            css={{
                                                                textAlign: 'center',
                                                                fontFamily: 'bruce-forever',
                                                                '@smMin':{
                                                                    fontSize: '$md'
                                                                },
                                                                '@xsMax':{
                                                                    fontSize: '$xs'
                                                                },
                                                            }}>
                                                                {participantonebatch}
                                                            </Text>
                                                        </Row>
                                                        </Grid>
                                                    </Grid> 
                                            </Grid>
                                        </Grid.Container>
                                        <Grid.Container
                                        css={{
                                            jc: 'center',
                                            alignItems: 'center',
                                            display:'flex',
                                            flexDirection: 'column',
                                            justifyContent:'center',
                                            alignContent:'center',
                                            flexWrap:'nowrap',
                                            marginTop:'6%'
                                        }}>
                                            <Grid> 
                                            <Grid css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            marginBottom: 0     
                                                        }}>
                                                        <Row
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            marginBottom: 0
                                                        }}>
                                                            <Text 
                                                            css={{
                                                                textAlign: 'center',
                                                                fontFamily: 'bruce-forever',
                                                                '@smMin':{
                                                                    fontSize: '$lg'
                                                                },
                                                                '@xsMax':{
                                                                    fontSize: '$sm'
                                                                },
                                                                color: '$yellow600'
                                                            }}>
                                                                Participant 2
                                                            </Text>
                                                        </Row>
                                                    </Grid>
                                                        <Grid.Container gap={0.5}
                                                        css={{
                                                            jc: 'center',
                                                            alignItems: 'center',
                                                            textAlign: 'center'
                                                        }}>
                                                    </Grid.Container> 
                                                    <Grid>
                                                    <Grid>
                                                        <Row
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center'
                                                        }}>
                                                            <Text 
                                                            css={{
                                                                textAlign: 'center',
                                                                fontFamily: 'bruce-forever',
                                                                '@smMin':{
                                                                    fontSize: '$md'
                                                                },
                                                                '@xsMax':{
                                                                    fontSize: '$xs'
                                                                },
                                                            }}>
                                                                {participanttwo}
                                                            </Text>
                                                        </Row>
                                                    </Grid>
                                                        {participanttwoemail && 
                                                            <Row
                                                            css={{
                                                                jc: 'center',
                                                                textAlign: 'center'
                                                            }}>
                                                                <Text
                                                                css={{
                                                                    textAlign: 'center',
                                                                    fontFamily: 'bruce-forever',
                                                                    '@smMin':{
                                                                        fontSize: '$md'
                                                                    },
                                                                    '@xsMax':{
                                                                        fontSize: '$xs'
                                                                    },
                                                                }}>
                                                                    {participanttwoemail}
                                                                </Text>
                                                            </Row>
                                                        }
                                                    </Grid>
                                                    <Grid>
                                                        <Row
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center',
                                                            display: 'flex',
                                                            flexDirection: 'row'
                                                        }}>
                                                            <Text 
                                                            css={{
                                                                textAlign: 'center',
                                                                fontFamily: 'bruce-forever',
                                                                '@smMin':{
                                                                    fontSize: '$md'
                                                                },
                                                                '@xsMax':{
                                                                    fontSize: '$xs'
                                                                },
                                                            }}>
                                                                {participanttwophone}
                                                            </Text>
                                                        </Row>
                                                        <Grid/>
                                                    <Grid>
                                                        <Row
                                                        css={{
                                                            jc: 'center',
                                                            textAlign: 'center'
                                                        }}>
                                                            <Text
                                                            css={{
                                                                textAlign: 'center',
                                                                fontFamily: 'bruce-forever',
                                                                '@smMin':{
                                                                    fontSize: '$md'
                                                                },
                                                                '@xsMax':{
                                                                    fontSize: '$xs'
                                                                },
                                                            }}>
                                                                {participanttwobatch}
                                                            </Text>
                                                        </Row>
                                                        </Grid>
                                                    </Grid> 
                                            </Grid>
                                        </Grid.Container>
                                    </Modal.Body>

                                    <Modal.Footer
                                    css={{
                                        jc: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Button auto rounded 
                                        css={{
                                            background: '$gray900'
                                        }}
                                        onPress={(e)=>{
                                            sendForm(e);
                                            sendPaymentImage(paymentSC)
                                            setModalVisibility(false);
                                            setLoadingModal(true)
                                        }}>
                                            <Text
                                            css={{
                                                color: 'Black',
                                                textAlign: 'center',
                                                fontFamily: 'bruce-forever',
                                                '@smMin':{
                                                    fontSize: '$md'
                                                },
                                                '@xsMax':{
                                                    fontSize: '$xs'
                                                },
                                            }}>
                                                Register
                                            </Text>
                                        </Button>
                                    </Modal.Footer>

                                </Modal>

                                {RegSuccessStatus===true && 
                                <Modal
                                open={RegSuccessStatus}
                                closeButton
                                onClose={()=>{
                                    setRegSuccessStatus(false)
                                    window.location.pathname='./cod/otat'
                                }}
                                >
                                        <Modal.Header
                                        css={{
                                            paddingTop: '0px',
                                        }}>
                                            <Col>
                                                <Text 
                                                css={{
                                                    textAlign: 'center',
                                                    fontFamily: 'bruce-forever',
                                                    '@smMin':{
                                                        fontSize: '$xl'
                                                    },
                                                    '@smMax':{
                                                        fontSize: '$sm'
                                                    },
                                                    color: '$green600',
                                                    borderStyle: 'solid',
                                                    borderWidth: '0px 0px 1px 0px',
                                                    borderColor: '$gray800'
                                                }}>
                                                    Success!
                                                </Text>
                                                
                                            </Col>
                                        </Modal.Header>
                                        <Modal.Body
                                        css={{
                                            paddingTop: '0px'
                                        }}>
                                            <Text 
                                            css={{
                                                textAlign: 'center',
                                                fontFamily: 'bruce-forever',
                                                '@smMin':{
                                                    fontSize: '$lg'
                                                },
                                                '@smMax':{
                                                    fontSize: '$sm'
                                                },
                                                color: 'white',
                                            }}>
                                                You have been successfully registered as {teamName}
                                            </Text>
                                        </Modal.Body>
                                        
                                </Modal>
                                }

                                {RegErrorStatus===true && 
                                <Modal
                                open={RegErrorStatus}
                                closeButton
                                onClose={()=>{
                                    setRegErrorStatus(false)
                                    window.location.pathname='./cod/otat'
                                }}
                                >
                                        <Modal.Header
                                        css={{
                                            paddingTop: '0px',
                                        }}>
                                            <Col>
                                                <Text 
                                                css={{
                                                    textAlign: 'center',
                                                    fontFamily: 'bruce-forever',
                                                    '@smMin':{
                                                        fontSize: '$xl'
                                                    },
                                                    '@smMax':{
                                                        fontSize: '$sm'
                                                    },
                                                    color: '$red600',
                                                    borderStyle: 'solid',
                                                    borderWidth: '0px 0px 1px 0px',
                                                    borderColor: '$gray800'
                                                }}>
                                                    Error!
                                                </Text>
                                                
                                            </Col>
                                        </Modal.Header>
                                        <Modal.Body
                                        css={{
                                            paddingTop: '0px'
                                        }}>
                                            <Text 
                                            css={{
                                                textAlign: 'center',
                                                fontFamily: 'bruce-forever',
                                                '@smMin':{
                                                    fontSize: '$lg'
                                                },
                                                '@smMax':{
                                                    fontSize: '$sm'
                                                },
                                                color: 'white',
                                            }}>
                                                You were not able to register as {teamName}. Please try again...
                                            </Text>
                                        </Modal.Body>
                                        
                                </Modal>
                                }

                                {isRegFull===true && 
                                <Modal
                                open={isRegFull}
                                closeButton
                                onClose={()=>{
                                    window.location.pathname='./cod/otat'
                                }}
                                >
                                        <Modal.Header
                                        css={{
                                            paddingTop: '0px',
                                        }}>
                                            <Col>
                                                <Text 
                                                css={{
                                                    textAlign: 'center',
                                                    fontFamily: 'bruce-forever',
                                                    '@smMin':{
                                                        fontSize: '$xl'
                                                    },
                                                    '@smMax':{
                                                        fontSize: '$sm'
                                                    },
                                                    color: '$red600',
                                                    borderStyle: 'solid',
                                                    borderWidth: '0px 0px 1px 0px',
                                                    borderColor: '$gray800'
                                                }}>
                                                    Stay Tuned!
                                                </Text>
                                                
                                            </Col>
                                        </Modal.Header>
                                        <Modal.Body
                                        css={{
                                            paddingTop: '0px'
                                        }}>
                                            <Text 
                                            css={{
                                                textAlign: 'center',
                                                fontFamily: 'bruce-forever',
                                                '@smMin':{
                                                    fontSize: '$lg'
                                                },
                                                '@smMax':{
                                                    fontSize: '$sm'
                                                },
                                                color: 'white',
                                            }}>
                                                There are no more slots left for this tournament but stay tuned, we have plenty more fun tournaments coming your way!
                                            </Text>
                                        </Modal.Body>
                                        
                                </Modal>
                                }
                            </Grid>
                        </Grid.Container>
                </Grid>
            </Grid.Container>
    
            {/* Registered Duos */}
            <Grid.Container 
            css={{
                jc: 'center',
                margin: '30px 0px 30px 0px',
                backgroundColor: 'rgb(20,20,20)',
                borderRadius: '20px',
                width: '100vw'
            }}>
                    {/* Heading */}
                    <Grid.Container
                    css={{
                        jc: 'center',
                        textAlign: 'center'
                    }}>
                        <Text
                        css={{
                            fontFamily: 'bruce-forever',
                            '@smMin':{
                                fontSize: '$3xl',
                                color: 'White',
                                padding: '40px'
                            },
                            '@smMax':{
                                fontSize: '$lg',
                                padding: '40px',
                                color: 'White',
                            },
                            textGradient: '45deg, #388EE9 20%, #09EBEE 100%',
                        }}>
                            Registered Duos
                        </Text>
                    </Grid.Container>

                    {RegisteredData &&
                    <Grid
                    css={{
                        width: '90vw',
                        marginBottom: '20px'
                    }}>
                        <Table bordered
                        aria-label="Example table with dynamic content"
                        css={{
                            height: "auto",
                            minWidth: "100%",
                        }}
                        >
                            <Table.Header>
                                <Table.Column css={{paddingLeft: '15px'}}>Duo</Table.Column>
                                <Table.Column css={{paddingLeft: '15px'}}>Player 1</Table.Column>
                                <Table.Column css={{paddingLeft: '15px'}}>Batch</Table.Column>
                                <Table.Column css={{paddingLeft: '15px'}}>Player 2</Table.Column>
                                <Table.Column css={{paddingLeft: '15px'}}>Batch</Table.Column>
                            </Table.Header>
                            <Table.Body items={RegisteredData}>
                                {(item,index)=>(
                                    <Table.Row key={item[3]}>
                                        <Table.Cell css={{paddingLeft: '15px'}} key={index}>{item[0]}</Table.Cell>
                                        <Table.Cell css={{paddingLeft: '15px'}} key={index}>{item[1]}</Table.Cell>
                                        <Table.Cell css={{paddingLeft: '15px'}} key={index}>{item[4]}</Table.Cell>
                                        <Table.Cell css={{paddingLeft: '15px'}} key={index}>{item[5]}</Table.Cell>
                                        <Table.Cell css={{paddingLeft: '15px'}} key={index}>{item[8]}</Table.Cell>
                                    </Table.Row>
                                )}
                            </Table.Body>
                        </Table>

                    </Grid>

                    }
            </Grid.Container>


        </>
        }

        {!UpcomingTourney && PrevTourney &&
        <>
            <Grid.Container 
            css={{
                jc: 'center',
                textAlign: 'center',
                margin: '30px 0px 30px 0px',
                backgroundColor: 'rgb(20,20,20)',
                borderRadius: '20px'
            }}>
                <Grid>
                    {/* Heading */}
                    <Grid.Container
                    css={{
                        jc: 'center',
                        textAlign: 'center'
                    }}>
                        <Text
                        css={{
                            fontFamily: 'bruce-forever',
                            '@smMin':{
                                fontSize: '$3xl',
                                color: 'White',
                                paddingTop: '40px'
                            },
                            '@smMax':{
                                fontSize: '$lg',
                                paddingTop: '40px',
                                color: 'White',
                            }
                        }}>
                            Tournament Editions
                        </Text>
                    </Grid.Container>

                    {/* Content */}
                    <Spacer y={25} />

                </Grid>
            </Grid.Container>
        </>
        }


    </div>
    )
}