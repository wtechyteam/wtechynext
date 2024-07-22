
import BannerSlider from "./bannersection";
import HomeSection2 from "./Homesection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";
import HomeSection5 from "./HomeSection5";
import HomeSection7 from "./HomeSection7";


const HomePage = () => {
   

    
    return (
        <>
        <head>
        <title>WTechy: Digital Marketing Agency | Grow Your Brand Online</title>
        <meta title="WTechy: Digital Marketing Agency | Grow Your Brand Online"/>
        <meta name="description"
        content="Boost your business with WTechy's expert digital marketing services. From SEO to social media, we help you reach your target audience and drive growth. Visit now!"/>
      </head>
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

export function generateMetaData(){
    return{
        title: "WTechy: Digital Marketing Agency | Grow Your Brand Online ",
        description: "Boost your business with WTechy's expert digital marketing services. From SEO to social media, we help you reach your target audience and drive growth. Visit now!"
    }
}
