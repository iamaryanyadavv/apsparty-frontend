import React from "react";
import EventsLanding from "../components/eventslanding";
import CODOTAT from '../assets/images/cardspictures/codbo32.jpg'
import CODET from '../assets/images/cardspictures/codbo31.jpg'

export default function CODPage(){
    return(
        <div>
            <EventsLanding heading='COD 🔪' OTAL='no' OTATimage={CODOTAT} OTAThref='/cod/otat' ETimage={CODET} EThref='/cod/et'/>
        </div>
    )
}