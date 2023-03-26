import React from "react";
import EventsLanding from "../components/eventslanding";
import FIFAOTAT from '../assets/images/cardspictures/Havertz.jpg';
import FIFAOTAL from '../assets/images/cardspictures/TedLasso.jpg';
import FIFAET from '../assets/images/cardspictures/Vini.jpeg';


export default function FIFAPage(){
    return(
        <div>
            <EventsLanding OTATpopover='yes' ETpopover='yes' OTALpopover='yes' heading='FIFA ⚽️' OTAL='yes' OTATimage={FIFAOTAT} OTAThref='/fifa/otat' ETimage={FIFAET} EThref='/fifa/et' OTALimage={FIFAOTAL} OTALhref='/fifa/otal'/>
        </div>
    )
}