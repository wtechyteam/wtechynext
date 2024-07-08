'use client';
import BannerSlider from "./bannersection";
import HomeSection2 from "./Homesection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";
import HomeSection5 from "./HomeSection5";
import HomeSection7 from "./HomeSection7";
import {useMounted} from "./../../common/unmounted"

const HomePage = () => {
   

    const mounted = useMounted();
    if(!mounted) return null;
    return (
        <>
            <BannerSlider/>
            <HomeSection2/>
            <HomeSection3/>
            <HomeSection4/>
            <HomeSection5/>
            <HomeSection7/>
        </>
    );
};

export default HomePage;
