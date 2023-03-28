import React from "react";
import Landing from "../components/home/landing";
import Info from "../components/home/info";
import RegCards from "../components/home/regcards";
import FAQs from "../components/home/faq";
import NewsTicker from "../components/home/marquee";

export default function Home(){
    return(
        <div>
            <NewsTicker/>
            <Landing/>
            <RegCards/>
            <Info/>
            <FAQs/>
        </div>
    )
}