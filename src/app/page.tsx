import React from "react";
import { HeadInfo } from "./components/HeadInfo";
import { InfoAcc } from "./components/InfoAcc";
import { Line } from "./components/Line";
import { HomeInfoLeft } from "./components/HomeInfoLeft";
import { HomeInfoRight } from "./components/HomeInfoRight";

export default function Home() {
    return (
        <>
            <HeadInfo />
            <Line />
            <InfoAcc />
            <Line />
            <HomeInfoLeft />
            <Line />
            <HomeInfoRight />
            <Line />
            <HomeInfoLeft />
            <Line />
            <HomeInfoRight />
            <Line />
            <HomeInfoLeft />
            <Line />
            <HomeInfoRight />
            <Line />
        </>
    );
}
