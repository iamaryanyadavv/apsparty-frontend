import React from "react";
import EventsLanding from "../components/eventslanding";
import NBAOTAT from '../assets/images/cardspictures/Booker.jpg'
import NBAOTAL from '../assets/images/cardspictures/Jcole.jpg'
import NBAET from '../assets/images/cardspictures/nbaarcadehd.jpeg'

export default function NBAPage(){
    return(
        <div>
            <EventsLanding heading='NBA 🏀' OTAL='yes' OTATimage={NBAOTAT} OTAThref='/nba/otat' ETimage={NBAET} EThref='/nba/et' OTALimage={NBAOTAL} OTALhref='/nba/otal'/>
        </div>
    )
}