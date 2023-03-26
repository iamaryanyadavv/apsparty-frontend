import React from "react";
import EventsLanding from "../components/eventslanding";
import RLOTAT from '../assets/images/cardspictures/rl4.jpg'
import RLET from '../assets/images/cardspictures/rl2.jpg'

export default function RLPage(){
    return(
        <div>
            <EventsLanding OTATpopover='yes' ETpopover='yes' heading='Rocket League 🚀' OTAL='no' OTATimage={RLOTAT} OTAThref='/rocketleague/otat' ETimage={RLET} EThref='/rocketleague/et'/>
        </div>
    )
}