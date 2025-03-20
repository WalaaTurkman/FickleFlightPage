import HotelCard from "./HotelCard";

import './Homecontent.css'
import { Col, Container, Row } from "react-bootstrap";
import HolidaysCard from "./HolidaysCard";
import Popular from "./Popular";
import RecentSearches from './Recent-Searches';
import Preparetrip from "./Preparetrip";
function Homecontent() {
  return (
<div>



<p className="Recent-Searches-Title">Recent Searches</p>
<section className="Recent-Searches-section  d-flex align-items-center"
 style={{width:"1280px",height:"112px",gap:"15px"}}
>
<RecentSearches 
        TitleForm="SIN"
        TitleForm2="Tokyo"
        DatePlane="7 Sep 2021"
        style=
        {{width:"632.5px",
            height:"112px"
            ,gap:"21px",
    
        }}

/>
<RecentSearches 
        TitleForm="MY"
        TitleForm2="DUB"
        DatePlane="9 sep 2021"
/>



</section>

<p className="Prepare-trip-Title">Prepare for your trip</p>
<section className="Prepare-trip-section  d-flex align-items-center ms-5"
 style={{width:"1280px",height:"112px",gap:"15px"}}
>
    <Preparetrip 
        iconTitle="Hotel"
        iconsrc="src\assets\Icons\HotelIcon.png"

    />
    <Preparetrip 
        iconTitle="Attractions"
        iconsrc="src\assets\Icons\AttractionsIcon.png"

    />
    <Preparetrip 
        iconTitle="Eats"
        iconsrc="src\assets\Icons\EatsIcon.png"

    />
    <Preparetrip 
        iconTitle="Commute"
        iconsrc="src\assets\Icons\Commuteicon.png"

    />
    <Preparetrip 
        iconTitle="Taxi"
        iconsrc="src\assets\Icons\TaxiIcon.png"

    />
    <Preparetrip 
        iconTitle="Movies"
        iconsrc="src\assets\Icons\Moviesicon.png"

    />



</section>


<p className="Hotel-Header-p-1 mt-5" style={{width:"1048.6192626953125px",height:"21px"}}>Plan your next trip</p>

<section className="Hotel-Header-1  ms-3 mt-3" style={{width:"1048.6192626953125px",height:"62px"}}>
    
    <h1 className="Hotel-Header-h1-1"style={{width:"1048.6192626953125px",height:"35px"}}>Most Popular Destinations</h1>
    <section className="Hotel-Header-2" style={{width:"231.3806915283203px",height:"24px",gap:"10px"}}>
    <p className="Hotel-Header-p-2 small" style={{width:"197.32765197753906px",height:"21px"}}>View all destinations</p>
    <img className="Arrow-Icon" src="src\assets\headerimg\ArrowIcon.png" width="24" height="24" alt="Arrow Icon" />
</section>
</section>

<section className="City-Holidays  " style={{width:"1280px", height:"497px",gap:"20px"}}>
     
    <Popular imgSrc="src/assets/headerimg/ParisImage.png" city="Paris" price="699" />

    <Popular imgSrc="src\assets\headerimg\GreeceImage.png" city="Greece" price="1079" />

    <Popular imgSrc="src\assets\headerimg\NorwayImage.png" city="Norway" price="895" />


    <Popular imgSrc="src\assets\headerimg\TuscanyImage.png" city="Tuscany" price="1245" />

</section>





<div className="mt-4 " style={{marginBottom:"140px"}}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold ms-5" >Recommended Holidays</h4>
        <a href="#" className="text-primary">View all holidays →</a>
      </div>
      <div className="d-flex flex-wrap justify-content-between" style={{margin:"40px"}}>
    <div className="mb-3" style={{ width: '288px',height:"242px" }}>
      <HolidaysCard title="Bali" image="src\assets\headerimg\unsplash.png" price="899" duration="4D3N" />
    </div>
    <div className="mb-3" style={{ width: '288px',height:"242px" }}>
      <HolidaysCard title="Swiss" image="src\assets\headerimg\SwitzerlandImage.png" price="900" duration="6D5N" />
    </div>
    <div className="mb-3" style={{ width: '288px',height:"242px" }}>
      <HolidaysCard title="Boracay" image="src\assets\headerimg\BoracayImage.png" price="699" duration="5D4N" />
    </div>
    <div className="mb-3" style={{ width: '288px',height:"242px" }}>
      <HolidaysCard title="Palawan" image="src\assets\headerimg\PalawanImage.png" price="789" duration="4D3N" />
    </div>
    </div>
</div>

    <section className="Hotel-Header  ms-3 mt-1" style={{width:"1280px",height:"35px"}}>
    <h1 className="Hotel-Header-h1"style={{width:"1105.3406982421875px",height:"35px"}}>Popular Stays</h1>
    <section className="Hotel-Header" style={{width:"174.65933227539062px",height:"24px"}}>
    <p className="Hotel-Header-p" style={{width:"140.65933227539062px",height:"21px"}}>View all stays</p>
    <img className="Arrow-Icon" src="src\assets\headerimg\ArrowIcon.png" width="24" height="24" alt="Arrow Icon" />
    </section>
    </section>
    

    <section className="hotel  mt-3 "style={{width:"1280px", height:"497px",gap:"20px"}}>
            
            <HotelCard imgsrc="src/assets/headerimg/Matterhorn-Suites-Image.png"
                cardgraph="Entire bungalow"
                TitleCard="Matterhorn Suites"
                TextCard="575"
                RateNumber="4.9"
                Reviews="60"/>
            
            <HotelCard imgsrc="src\assets\headerimg\Discovery-Shores-Image.png"
                cardgraph="2-Story beachfront suite"
                TitleCard="Discovery Shores"
                TextCard="360"
                RateNumber="4.8"
                Reviews="116"/>
            
            <HotelCard imgsrc="src\assets\headerimg\Arctic-Hut-Image.png"
                cardgraph="Single deluxe hut"
                TitleCard="Arctic Hut "
                TextCard="420"
                RateNumber="4.7"
                Reviews="78"/>
            
            <HotelCard imgsrc="src\assets\headerimg\Lake-Louise-Image.png"
                cardgraph="Deluxe King Room"
                TitleCard="Lake Louise Inn"
                TextCard="244"
                RateNumber="4.6"
                Reviews="63"
                />
    </section>
        
</div>

  );
}

export default Homecontent;