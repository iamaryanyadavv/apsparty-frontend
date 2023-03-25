import React from "react";
import Landing from "../components/home/landing";
import Info from "../components/home/info";
import RegCards from "../components/home/regcards";
import FAQs from "../components/home/faq";

export default function Home(){
    return(
        <div>
            <Landing/>
            <RegCards/>
            <Info/>
            <FAQs/>
        </div>
    )
}