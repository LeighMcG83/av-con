import React from "react";
import HeroSection from "./HeroSection";
import FirstImageAndText from "./firstBlockOfText";
import MiddleBlockOfText from "./middleBlock";
import MailchimpScript from "./mailChimpPopup";
import Highlights from "./hightlights-section";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col justify-between p-24">
            {/* we pass 2 titles and 2 subtitles to use on small and large devices */}
            <HeroSection
                defaultTitle="AN UNFORGETTABLE THRILL FOR GAMERS AND ENTHUSIASTS"
                defaultSubtitle="Take the stick for an epic experience with AvCon Xtra's Flight Sim Challenge"
                smallScreenTitle="AvCon 2024"
                smallScreenSubtitle="Welcome to the Future of Aviation!"
                buttonText="Register Now"
                buttonLink="/bookTickets"
            />

            <FirstImageAndText />
            <MiddleBlockOfText />
            <Highlights />
            <MailchimpScript />
        </main>
    );
}
